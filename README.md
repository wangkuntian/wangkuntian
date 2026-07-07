<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=0:020617,45:2563eb,100:10b981&height=210&section=header&text=Wang%20Kuntian&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Cloud%20Network%20Builder%20%7C%20OpenStack%20Explorer&descSize=18&descAlignY=58)

# Hi, I'm Wang Kuntian

## An engineer who spends long days with cloud, networking, and virtualization

I like digging into how complex systems work, and I like turning hard-won lessons into reusable solutions.  
These days, I mainly work on OpenStack, cloud platforms, virtual networking, host agents, and automation tooling.

![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1200&center=true&width=820&lines=OpenStack+%2F+Neutron+%2F+Cloud+Network;Still+debugging+networks+today;Build+it%2C+debug+it%2C+document+it)

<p>
  <a href="mailto:wangkuntian1994@163.com">
    <img src="https://img.shields.io/badge/Email-Let's%20Talk-2563eb?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
  <a href="https://www.littlemoon.vip/">
    <img src="https://img.shields.io/badge/Blog-littlemoon.vip-10b981?style=for-the-badge&logo=blogger&logoColor=white" />
  </a>
  <a href="https://github.com/wangkuntian">
    <img src="https://img.shields.io/badge/GitHub-wangkuntian-111827?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</p>

![GitHub Stats](./profile/stats.svg)

![Top Langs](./profile/top-langs.svg)

</div>

---

## Today's Build

<table>
  <tr>
    <td><strong>Role</strong></td>
    <td>Cloud network debugger</td>
  </tr>
  <tr>
    <td><strong>Tools</strong></td>
    <td>Logs, packet captures, routing tables, iptables, OVS / OVN flows</td>
  </tr>
  <tr>
    <td><strong>Skill</strong></td>
    <td>Turning intermittent issues into stable reproductions, and translating mysterious networking into plain language</td>
  </tr>
  <tr>
    <td><strong>Status</strong></td>
    <td>Caffeine-powered, with documentation generated alongside the fix</td>
  </tr>
</table>

```text
       (￣▽￣)ノ   Cloud Network Debugger is online
       /|    |    Turning mysterious issues into known issues
        |____|
```

---

## About Me

In a few lines:

- I work with cloud platforms, network forwarding, virtualization, storage, and host agents.
- When something breaks, I trace it through logs, packets, routing tables, iptables, and OVS / OVN flows until the root cause shows up.
- Outside code, I also write documents: designs, troubleshooting notes, technical research, and postmortems.
- I prefer solutions that can ship, be maintained, and be explained clearly over implementations that only look clever.

---

## Cloud Adventure Map

<p>
  <img src="https://img.shields.io/badge/OpenStack-EA7600?style=for-the-badge&logo=openstack&logoColor=white" />
  <img src="https://img.shields.io/badge/Neutron-2563EB?style=for-the-badge&logo=openstack&logoColor=white" />
  <img src="https://img.shields.io/badge/OVS%20%2F%20OVN-0F766E?style=for-the-badge&logo=opennetworkingfoundation&logoColor=white" />
  <img src="https://img.shields.io/badge/KVM-374151?style=for-the-badge&logo=linuxcontainers&logoColor=white" />
  <img src="https://img.shields.io/badge/Linux-111827?style=for-the-badge&logo=linux&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Shell-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white" />
  <img src="https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" />
  <img src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" />
</p>

```mermaid
flowchart LR
  start(["Enter the Cloud Continent"]) --> linux["Linux / Shell"]
  linux --> virt["Virtualization Range<br/>KVM / QEMU / libvirt"]
  virt --> openstack["OpenStack City<br/>Nova / Neutron / Cinder"]
  openstack --> network{"Network Maze"}
  network --> l3["L3 HA / DVR"]
  network --> ovs["OVS / OVN"]
  network --> route["iptables / Policy Routing / tun"]
  openstack --> storage["Storage Workshop<br/>LVM / Images / Volumes"]
  openstack --> agent["Host Agent<br/>Applications / Disks / System Disks"]
  l3 --> docs["Documentation Scrolls"]
  ovs --> docs
  route --> docs
  storage --> docs
  agent --> docs
  docs --> next(["Keep Exploring Rust / Go / Axum"])

  classDef main fill:#2563eb,color:#fff,stroke:#93c5fd,stroke-width:1px;
  classDef area fill:#0f766e,color:#fff,stroke:#99f6e4,stroke-width:1px;
  classDef finale fill:#7c3aed,color:#fff,stroke:#ddd6fe,stroke-width:1px;
  class start,next finale;
  class openstack,network main;
  class virt,storage,agent,l3,ovs,route,docs area;
```

---

## Recent Side Quests

```mermaid
mindmap
  root((Side Quests))
    OpenStack
      Neutron
      Nova
      Cinder
    Cloud Networking
      OVS
      OVN
      iptables
      Policy Routing
    Hosts
      Agent
      LVM
      libvirt
    Output
      RPM
      Ansible
      Technical Docs
```

---

## Engineering Preference Cards

<p>
  <img src="https://img.shields.io/badge/SSR-Explainable%20Architecture-7c3aed?style=for-the-badge" />
  <img src="https://img.shields.io/badge/SR-Small%20Verified%20Steps-2563eb?style=for-the-badge" />
  <img src="https://img.shields.io/badge/SR-Documented%20Learning-0f766e?style=for-the-badge" />
  <img src="https://img.shields.io/badge/R-Plain%20Implementation-374151?style=for-the-badge" />
</p>

> ### SSR Explainable Architecture
> When something fails, the path to the root cause should be traceable, not something that needs a meeting titled "why did it suddenly recover?"
>
> ### SR Small Verified Steps
> In complex systems, evidence beats instinct; a reproducible issue is already half solved.
>
> ### SR Documented Learning
> One troubleshooting note today can save one late-night spiral tomorrow.
>
> ### R Plain Implementation
> Code that can be maintained for years is the kind that is truly cool; shipping stable systems beats showing off.

---

## Contribution Snake

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wangkuntian/wangkuntian/output/github-contribution-grid-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/wangkuntian/wangkuntian/output/github-contribution-grid-snake.svg" />
  <img alt="GitHub contribution snake" src="https://raw.githubusercontent.com/wangkuntian/wangkuntian/output/github-contribution-grid-snake.svg" />
</picture>

</div>

---

## Find Me

- Blog: <https://www.littlemoon.vip/>
- Email: <wangkuntian1994@163.com>
- GitHub: <https://github.com/wangkuntian>

---

<div align="center">

**Do not blame every problem on the network, even though it often looks suspicious.**

</div>
