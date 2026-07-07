import { mkdir, writeFile } from "node:fs/promises";

const username = process.env.GITHUB_STATS_USERNAME || "wangkuntian";
const outDir = process.env.GITHUB_STATS_OUT_DIR || "profile";
const token = process.env.GITHUB_TOKEN || "";

const colors = {
  bg: "#1a1b27",
  title: "#70a5fd",
  text: "#c9d1d9",
  muted: "#a9b1d6",
  line: "#2f334d",
  cyan: "#38bdf8",
  green: "#10b981",
};

const languageColors = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Shell: "#89e051",
  Rust: "#dea584",
  Go: "#00ADD8",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
};

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function github(path) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "wangkuntian-readme-stats",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`https://api.github.com${path}`, { headers });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${path}`);
  }
  return response.json();
}

async function allPages(path) {
  const items = [];
  for (let page = 1; page <= 10; page += 1) {
    const separator = path.includes("?") ? "&" : "?";
    const chunk = await github(`${path}${separator}per_page=100&page=${page}`);
    items.push(...chunk);
    if (chunk.length < 100) break;
  }
  return items;
}

function card(width, height, title, body) {
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)}</title>
  <desc id="desc">Generated GitHub profile stats for ${escapeXml(username)}</desc>
  <rect width="${width}" height="${height}" rx="6" fill="${colors.bg}"/>
  <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="5.5" stroke="${colors.line}"/>
  <text x="24" y="34" fill="${colors.title}" font-family="Segoe UI, Ubuntu, sans-serif" font-size="18" font-weight="700">${escapeXml(title)}</text>
${body}
</svg>
`;
}

function statRow(label, value, x, y) {
  return `  <text x="${x}" y="${y}" fill="${colors.text}" font-family="Segoe UI, Ubuntu, sans-serif" font-size="14">${escapeXml(label)}</text>
  <text x="${x + 150}" y="${y}" fill="${colors.green}" font-family="Segoe UI, Ubuntu, sans-serif" font-size="14" font-weight="700">${escapeXml(value)}</text>`;
}

function statsSvg(user, repos) {
  const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const forks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
  const updated = new Date().toISOString().slice(0, 10);
  const body = [
    statRow("Public repos", user.public_repos, 24, 72),
    statRow("Stars", stars, 24, 104),
    statRow("Forks", forks, 24, 136),
    statRow("Followers", user.followers, 24, 168),
    statRow("Updated", updated, 24, 200),
  ].join("\n");
  return card(495, 230, `${username}'s GitHub Stats`, body);
}

function topLangsSvg(languageTotals) {
  const total = [...languageTotals.values()].reduce((sum, bytes) => sum + bytes, 0) || 1;
  const top = [...languageTotals.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  let x = 24;
  const segments = top
    .map(([language, bytes]) => {
      const width = Math.max(3, Math.round((bytes / total) * 447));
      const color = languageColors[language] || colors.cyan;
      const rect = `  <rect x="${x}" y="56" width="${width}" height="8" rx="4" fill="${color}"/>`;
      x += width;
      return rect;
    })
    .join("\n");

  const rows = top
    .map(([language, bytes], index) => {
      const y = 94 + index * 28;
      const color = languageColors[language] || colors.cyan;
      const percent = ((bytes / total) * 100).toFixed(1);
      return `  <circle cx="30" cy="${y - 4}" r="5" fill="${color}"/>
  <text x="44" y="${y}" fill="${colors.text}" font-family="Segoe UI, Ubuntu, sans-serif" font-size="14">${escapeXml(language)}</text>
  <text x="410" y="${y}" fill="${colors.muted}" font-family="Segoe UI, Ubuntu, sans-serif" font-size="14" text-anchor="end">${percent}%</text>`;
    })
    .join("\n");

  return card(495, 280, "Top Languages", `${segments}\n${rows}`);
}

async function main() {
  const [user, repos] = await Promise.all([
    github(`/users/${username}`),
    allPages(`/users/${username}/repos?type=owner&sort=updated`),
  ]);
  const ownRepos = repos.filter((repo) => !repo.fork);
  const languages = new Map();

  for (const repo of ownRepos) {
    const repoLanguages = await github(`/repos/${repo.full_name}/languages`);
    for (const [language, bytes] of Object.entries(repoLanguages)) {
      languages.set(language, (languages.get(language) || 0) + bytes);
    }
  }

  await mkdir(outDir, { recursive: true });
  await writeFile(`${outDir}/stats.svg`, statsSvg(user, ownRepos));
  await writeFile(`${outDir}/top-langs.svg`, topLangsSvg(languages));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
