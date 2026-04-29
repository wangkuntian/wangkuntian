<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=0:020617,45:2563eb,100:10b981&height=210&section=header&text=%E7%8E%8B%E5%9D%A4%E7%94%B0&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Cloud%20Network%20Builder%20%7C%20OpenStack%20Explorer&descSize=18&descAlignY=58)

# Hi，我是王坤田

## 一个长期和云、网络、虚拟化打交道的工程师

我喜欢研究复杂系统背后的运行逻辑，也喜欢把踩过的坑整理成可以复用的方案。  
现在主要在做 OpenStack、云平台、虚拟网络、宿主机 Agent 和自动化工具相关的事情。

![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1200&center=true&width=820&lines=OpenStack+%2F+Neutron+%2F+Cloud+Network;%E4%BB%8A%E6%97%A5%E4%B9%9F%E5%9C%A8%E5%92%8C%E7%BD%91%E7%BB%9C%E8%B0%83%E8%AF%95%E5%92%8C%E8%A7%A3;Build+it%2C+debug+it%2C+document+it)

<p>
  <a href="mailto:wangkuntian1994@163.com">
    <img src="https://img.shields.io/badge/Email-找我聊聊-2563eb?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
  <a href="https://www.littlemoon.vip/">
    <img src="https://img.shields.io/badge/Blog-littlemoon.vip-10b981?style=for-the-badge&logo=blogger&logoColor=white" />
  </a>
  <a href="https://github.com/wangkuntian">
    <img src="https://img.shields.io/badge/GitHub-wangkuntian-111827?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</p>

</div>

---

## 今日人设

<table>
  <tr>
    <td><strong>职业</strong></td>
    <td>云网络系调试师</td>
  </tr>
  <tr>
    <td><strong>武器</strong></td>
    <td>日志、抓包、路由表、iptables、OVS / OVN 流表</td>
  </tr>
  <tr>
    <td><strong>技能</strong></td>
    <td>把“偶现问题”逼到稳定复现，把“玄学网络”翻译成人话</td>
  </tr>
  <tr>
    <td><strong>状态</strong></td>
    <td>咖啡因驱动中，文档同步生成中</td>
  </tr>
</table>

```text
       (￣▽￣)ノ   Cloud Network Debugger is online
       /|    |    今日也在把玄学问题变成已知问题
        |____|
```

---

## 关于我

如果用几句话介绍我，大概是这样：

- 白天和云平台、网络转发、虚拟化、存储、Agent 打交道。
- 遇到问题时，喜欢从日志、抓包、路由表、iptables、OVS / OVN 流表一路追到根因。
- 写代码之外，也喜欢写文档：方案、排障记录、技术调研、踩坑复盘都算。
- 相比“看起来很酷”的实现，我更偏爱能上线、能维护、能解释清楚的方案。

---

## 云端冒险地图

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
  start(["登录云端大陆"]) --> linux["Linux / Shell"]
  linux --> virt["虚拟化山脉<br/>KVM / QEMU / libvirt"]
  virt --> openstack["OpenStack 城邦<br/>Nova / Neutron / Cinder"]
  openstack --> network{"网络迷宫"}
  network --> l3["L3 HA / DVR"]
  network --> ovs["OVS / OVN"]
  network --> route["iptables / 策略路由 / tun"]
  openstack --> storage["存储工坊<br/>LVM / 镜像 / 卷"]
  openstack --> agent["宿主机 Agent<br/>应用 / 磁盘 / 系统盘"]
  l3 --> docs["文档卷轴"]
  ovs --> docs
  route --> docs
  storage --> docs
  agent --> docs
  docs --> next(["继续探索 Rust / Go / Axum"])

  classDef main fill:#2563eb,color:#fff,stroke:#93c5fd,stroke-width:1px;
  classDef area fill:#0f766e,color:#fff,stroke:#99f6e4,stroke-width:1px;
  classDef finale fill:#7c3aed,color:#fff,stroke:#ddd6fe,stroke-width:1px;
  class start,next finale;
  class openstack,network main;
  class virt,storage,agent,l3,ovs,route,docs area;
```

---

## 最近的支线任务

```mermaid
mindmap
  root((支线任务))
    OpenStack
      Neutron
      Nova
      Cinder
    云网络
      OVS
      OVN
      iptables
      策略路由
    宿主机
      Agent
      LVM
      libvirt
    输出
      RPM
      Ansible
      技术文档
```

---

## 工程偏好卡组

<p>
  <img src="https://img.shields.io/badge/SSR-可解释架构-7c3aed?style=for-the-badge" />
  <img src="https://img.shields.io/badge/SR-小步验证-2563eb?style=for-the-badge" />
  <img src="https://img.shields.io/badge/SR-文档沉淀-0f766e?style=for-the-badge" />
  <img src="https://img.shields.io/badge/R-朴素实现-374151?style=for-the-badge" />
</p>

> ### SSR 可解释架构
> 出问题时能一路查到根因，而不是开会研究“它为什么突然好了”。
>
> ### SR 小步验证
> 复杂系统里，证据比直觉可靠；能复现的问题已经赢了一半。
>
> ### SR 文档沉淀
> 今天写一页排障记录，明天少一次深夜怀疑人生。
>
> ### R 朴素实现
> 能长期维护的代码，才是真的酷；炫技不如稳定上线。

---

## GitHub 小窗口

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=wangkuntian&show_icons=true&theme=tokyonight&hide_border=true&rank_icon=github)

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=wangkuntian&layout=compact&theme=tokyonight&hide_border=true)

</div>

---

## 找到我

- Blog：<https://www.littlemoon.vip/>
- Email：<wangkuntian1994@163.com>
- GitHub：<https://github.com/wangkuntian>

---

<div align="center">

**不要把所有问题都归咎于网络，虽然它经常看起来很可疑。**

</div>
