---
home: true
icon: fas fa-home
title: 主页
heroImage: https://ooo.0x0.ooo/2024/08/23/OtHStj.png
heroText: 病毒吧非官方FAQ
tagline: 由Raven主编的计算机安全入门教程。
actions:
  - text: 开始阅览
    icon: fas fa-book-open
    link: ./prevention/
    type: primary

  - text: 贡献者名录
    icon: fas fa-users
    link: ./contributors
---

## 小白电脑使用必知必会

- 不要直接用文件粉碎机卸载软件，**尤其是杀毒软件**。安装/卸载杀毒软件之后必须重启。
- 小白别动注册表。非得动的话先备份。
  - 如果想要启用注册表自动备份，在“HKLM\System\CurrentControlSet\Control\Session Manager\Configuration Manager”下创建值为1的“EnablePeriodicBackup”DWORD(32位)值项。系统会自动在每次开机时备份注册表至“C:\Windows\System32\config\RegBack”文件夹中。
  - 在WindowsRE中依次点击“疑难解答→高级选项”，接着在高级选项窗口点击“命令提示符”，执行下面的命令进行还原：
  ```shell
  copy C:\Windows\System32\config\RegBack\*.* C:\Windows\System32\config\
  ```
- 一般情况下，绿色软件都需要将所有文件全部解压缩出来才能用。尤其是各位在压缩包里面看见了 dll 文件或“绿化.bat/绿化.cmd/绿化.reg”的时候。
- ps1/cmd/com/reg/bat 结尾的和 exe 一样，都能在里面藏病毒。
- 卡巴斯基不是没有免费版，免费版需要输入 3SXCM-M9RJM-6985N-PWKP7 这个激活码进行转换。
- 安卓 10 以上的系统，只有属于这个软件的媒体文件不申请权限就能读取（即这个软件自己创建的媒体文件）
  - 在搭载 Android 10 或更高版本的设备上，您无需拥有存储相关权限即可访问和修改您的应用拥有的媒体文件，包括 MediaStore.Downloads 集合中的文件。例如，如果您正在开发一款相机应用，则无需请求获得存储相关权限即可访问该应用拍摄的照片，因为该应用拥有您将写入媒体库的图片。
  - 如需访问其他应用创建的媒体文件，您必须声明适当的存储相关权限，并且文件必须位于以下任一媒体集合中：
    - MediaStore.Images
    - MediaStore.Video
    - MediaStore.Audio
- 看到 Microsoft 的签名 ≠ 这个驱动由 Microsoft 开发。有 Microsoft Windows Hardware Compatibility Publisher 这个签名只代表了这个驱动通过了 Windows 硬件兼容性测试。

## 历程

这个项目起源于我在 2024 年 4 月 4 日 22:20 发布的第一个帖子。当时，我只是想分享一些关于计算机的知识，帮助广大吧友。随着我的持续更新以及吧友的提问和指正，截止至网站发布，该贴已有 399 条回复。途中还有意外上了贴吧热门的小插曲。

然而，随着帖子的更新，一些问题也逐渐显现出来：

- **不易检索：** 想查看某条问题只能翻全文。
- **不易补充：** 若需做出更改必须再开一楼或者楼中楼。
- **易被删除：** 虽然通过申诉找回了部分被贴吧系统抽掉的楼，但仍有部分楼未能恢复。

因此，我决定将原计划重构为新帖子的内容整合成一个网站。

首先，网站方便检索。不仅有完善的目录，还有搜索功能。

其次，网站方便修改。由于网站将托管于 GitHub，无论是我自己修改还是他人指正内容或添加新条目，都可以通过提交 PR（Pull Request）或者成为协作者来进行。

好处多多，所以本网站应运而生。

如果各位对本网站内容进行了有价值的修改或新增了有价值的条目，各位的名字将出现在贡献者名录中。

贴吧内的帖子将继续作为草稿及收集帖子更新。最新的整理版本请参见本网站。

2024 年 7 月 28 日补充：腾讯文档版本我也会尽可能维护。

若各位希望成为协作者，请私信申请，或发送申请至<Raven95676@proton.me>。请附上各位的 GitHub 账户，我会向各位发出邀请。

2024 年 8 月 23 日补充：重构了一下网站结构，更方便查找了。~~以及彻底放弃了搜索功能~~

## 贡献须知

请确认项目在编辑后能够正常运行且显示正常。请善用以下命令：

```shell
pnpm docs:dev
```

如有不明白的操作，请参阅[主题官方教程](https://theme-hope.vuejs.press/zh/get-started/)。

为避免出现奇怪的问题以及满足 SEO 需求，请尽可能保证文件名为：序号\_英文文件名。

每篇文档一般情况下的 frontmatter 如下：

```markdown
---
title: 中文标题
author: 作者名字
date: 撰写日期
icon: file
category:
  - 分类
isOriginal: 是否原创，是true，否false
order: 序号
---
```

本文档的主要文件储存在 src 目录下。新增文件无需编辑目录，目录会自动生成。

```shell
src
├── contributors.md（贡献者名录）
├── follow-up（后继措施板块）
│   ├── …….md
│   └── README.md（后继措施板块主页）
├── links.md（友情链接）
├── prevention（预先防毒板块）
│   ├── …….md
│   └── README.md（预先防毒板块主页）
├── README.md（网站主页）
└── useful_tips（实用技巧板块）
    ├── …….md
    └── README.md（实用技巧板块主页）
```

## 鸣谢

本网站的内容准确性及丰富度离不开广大吧友的指正与贡献。以下是在贴吧时期的贡献名录（排名不分先后）：

- G5125872
- 岩浆膏来啦
- shenapex
- Firedoge
- 雨·点
- dx/dy
- 幸运的红烧熊掌
- 肥皂水泡方便面
- YoF

若各位不希望各位的名字出现在这里，请私信本人或发邮件至<Raven95676@proton.me>向我反馈。

注：需要头像展示、简介的话可以联系本人。

欢迎并感谢广大吧友继续提供指正与贡献。
