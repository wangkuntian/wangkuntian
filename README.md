<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=0:020617,45:2563eb,100:10b981&height=210&section=header&text=Wang%20Kuntian&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Cloud%20Network%20Builder%20%7C%20OpenStack%20Explorer&descSize=18&descAlignY=58)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/wangkuntian/wangkuntian/output/github-contribution-grid-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/wangkuntian/wangkuntian/output/github-contribution-grid-snake.svg" />
  <img alt="GitHub contribution snake" src="https://raw.githubusercontent.com/wangkuntian/wangkuntian/output/github-contribution-grid-snake.svg" />
</picture>

# Hi, I'm Wang Kuntian

## Cloud network engineer by day, infrastructure anime protagonist by build log

I hunt cloud-network bugs until they drop loot, then turn the battle notes into docs the next engineer can actually use.  
Current arc: OpenStack, virtual networking, host agents, automation tooling, and the occasional "why is the packet doing parkour?" episode.

![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1200&center=true&width=820&lines=OpenStack+%2F+Neutron+%2F+Cloud+Network;Packet+trace+training+arc+in+progress;Build+it%2C+debug+it%2C+document+it)

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

<p>
  <img height="180" alt="GitHub Stats" src="./profile/stats.svg" />
  <img height="180" alt="Top Languages" src="./profile/top-langs.svg" />
</p>

</div>

---

## Character Sheet

<table>
  <tr>
    <td><strong>Role</strong></td>
    <td>Cloud network debugger, packet whisperer, incident side-quest enjoyer</td>
  </tr>
  <tr>
    <td><strong>Loadout</strong></td>
    <td>Logs, packet captures, routing tables, iptables, OVS / OVN flows</td>
  </tr>
  <tr>
    <td><strong>Special Move</strong></td>
    <td>Turning "it only happens sometimes" into a boring, repeatable failure with receipts</td>
  </tr>
  <tr>
    <td><strong>Status Effect</strong></td>
    <td>Caffeinated, mildly over-leveled in tcpdump, documentation auto-summoned after combat</td>
  </tr>
</table>

```text
       (￣▽￣)ノ   Cloud Network Debugger: online
       /|    |    Plot armor: disabled. Packet capture: enabled.
        |____|
```

---

## About Me

Short version:

- I build and debug cloud platforms, network forwarding paths, virtualization layers, storage plumbing, and host agents.
- When a system starts acting haunted, I follow the logs, packets, routes, iptables rules, and OVS / OVN flows until the mystery loses its dramatic lighting.
- I write code, but I also write the trail map: designs, troubleshooting notes, research writeups, and postmortems.
- Flashy tech is fun; boring, shippable, explainable systems are the real final boss clear.

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
  start(["Spawn in the Cloud Continent"]) --> linux["Linux / Shell"]
  linux --> virt["Virtualization Range<br/>KVM / QEMU / libvirt"]
  virt --> openstack["OpenStack City-State<br/>Nova / Neutron / Cinder"]
  openstack --> network{"Network Dungeon"}
  network --> l3["L3 HA / DVR"]
  network --> ovs["OVS / OVN"]
  network --> route["iptables / Policy Routing / tun"]
  openstack --> storage["Storage Workshop<br/>LVM / Images / Volumes"]
  openstack --> agent["Host Agent Guild<br/>Applications / Disks / System Disks"]
  l3 --> docs["Documentation Spellbook"]
  ovs --> docs
  route --> docs
  storage --> docs
  agent --> docs
  docs --> next(["Next Arc: Rust / Go / Axum"])

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
  <img src="https://img.shields.io/badge/SR-Battle%20Tested%20Docs-0f766e?style=for-the-badge" />
  <img src="https://img.shields.io/badge/R-Boring%20Code%20Wins-374151?style=for-the-badge" />
</p>

> ### SSR Explainable Architecture
> If production starts yelling, the root-cause trail should be clear enough to follow without a twelve-person mystery council.
>
> ### SR Small Verified Steps
> In complex systems, evidence beats vibes. A reproducible bug has already lost half its health bar.
>
> ### SR Battle Tested Docs
> One solid troubleshooting note today saves one future engineer from dramatic 2 a.m. monologues.
>
> ### R Boring Code Wins
> Clever code gets applause. Boring code gets paged less. I know which ending I prefer.

<div align="center">

---

### Final Boss Rule

**Comments are like side quests: essential lore, somehow always skipped.**

</div>
