---
title: 什么是root
author: shenapex
date: 2024-08-25
icon: fas fa-file
category:
  - 实用技巧
isOriginal: true
tag:
  - 安卓
  - Android
  - 玩机技巧
  - root
  - bootloader
order: 1
---

## 致谢

- Hyperos 解锁栏目大幅引用参考了(https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire)中内容，对相关作者致以最诚挚的谢意

- 解锁 bootloader 栏目中参考了 B 站 up[极客湾 Geekerwan 的视频](https://www.bilibili.com/video/BV1BY4y1H7Mc)

对于其他地方，参考了官方文档以及部分博客等内容，在此一并表示感谢

## 为什么要 root

### root 的意义

目前各大手机厂商都有着自己的定制系统，随着谷歌退出中国市场各家系统的生态迅速崛起，而随之而来的也有满天飞的广告[^1] 和占用系统资源/流氓的系统软件，部分厂商给“大厂”软件开后门[^2]，使得对他们的自启和权限监控管理变得宽松，让其行为越发肆无忌惮，也常常让用户陷入苦恼之中。

而在互联网早期时代，由于系统底层管控不严也有着许多方法应对，比如使用李跳跳这类无障碍软件跳过广告[^3]，或者使用一键 root 软件，但伴随着安卓版本的提高，虚拟沙盒机制出现以及对 SELinux 的严格管理让一键 root 软件不再适用，Android13＋ 十分钟后会自动关闭第三方无障碍，厂商定制化也严重破坏了 adb 权能[^4]，无 root 已无法满足我们的一些需求，有时为了系统优化/影响第三方软件行为，我们不得不进行 root。

然而厂商为了安全和自己的利益，对我们刷机的第一步——Bootloader 进行了锁定，使得我们刷机困难了许多，因此我们首先要先对bootloader进行解锁，相关介绍在[解锁bootloader篇](https://faq.ravenote.top/useful_tips/Androidplay/2_bootloader.html)

> [!note]
> 必须说明的是解锁 ≠root，root 也不一定非要解锁（比如魅族官方支持获取 root），但现在主流的 root 方案都必须解锁后才能使用。

### root 后我们能干什么

删除不必要的系统应用；更攻 CPU/GPU 调度，超频锁频；使用 xposed（在六中介绍）以达到我们对某些软件进行修改的目的（如净化不必要的组件，添加不开放/没有的新功能，~~破解 VIP~~.）使用 Magisk 模块达到修改系统的目的

> [!caution]
> 决定刷机/root 前必看！！！root/刷机的注意事项（坏处）
>
> 1. 除小米、红米等厂商，大部分厂商在解锁后**不再支持保修**部分若可刷回原厂系统仍支持保修!
>
> 2. 若操作不当（例乱删系统文件；滥用 xposed/root），或刷入格机类模块，会导致系统变砖（常见表现：无法正常开机；不显示 IMEI，无法上网）因此在刷机前强烈建议您先行了解救砖相关知识， 以及备份完整字库到安全/不易丢失的地方，~~如果你是小白或者纯纯好奇，不建议刷机~~
>
> 3. 游戏、银行类软件多数会检测 root，**前者会导致封号，后者会导致无法使用**，如果你没有足够的知识和经验去绕过检测，或无法接受所带来的后果，那么请不要刷机，所造成的后果自负
>
> 4. 由于 root 属于最高权限，恶意软件申请到 root 后可以为所欲为，且一般情况下是无法察觉的，因此，请平时养成良好习惯，不要随意授予软件 root 权限，谨慎使用来源不明的模块/xposed！
>
> 5. 解锁后的某些操作可能导致 TEE 永久性不可逆损坏（除非更换主板）

## root 的获取

关于 root 类管理软件，我们主要推荐使用 Magisk，如果您想要一种更好的隐藏 root 方案且您的设备为 GKI 内核（非 GKi 内核的设备也可以寻找第三方大佬提供的内核 ① 不对安全性作保证！ 或者自行编译）也推荐使用 KernelSU 进行 root.apatch笔者不做推荐，有兴趣可自行了解

### 关于 Magisk 版本的选择与区别

主要从隐藏 root 效果进行介绍

**1.Magisk 官版：** 官方开源，24.2 ＋后由于作者进入谷歌工作，于是移除了 Magiskhide，可通过搭配 shamiko 模块（2024.01.09，机圈震动，shamiko 宣布停更）使用。[链接](https://github.com/topjohnwu/Magisk/releases)

**2.Magisk Alpha 版：** 官方开源，实际上是官版的 canary 分支； 隐藏效果无过大差异，仍需使用 shamiko 模块，但内测含有不稳定功能，可能存在 bug，未知性较高。[链接](https://install.appcenter.ms/users/vvb2060/apps/magisk/distribution_groups/public)

**3.Magisk delta 版（2023 年 11 月已改名为 Kitsune Mask）：** 第三方开源， 将官版 24.2 ＋移除的 Magiskhide 又加了回来，搭配使用 Shamiko 模块， 隐藏效果更好。[链接](https://github.com/HuskyDG/magisk-files/releases)

### KernelSU 介绍

一种内核 root 方案，由于处于内核隐蔽性更高，且在此之前的 root 一直停于 EL0，受到内核与硬件的直接限制，内核不想让你操作的文件你就动不了（比如企业模式下 root＂失灵＂）而 Kernel SU 直接由内核提供权限，不受此限制，此外还提供了一种另类解锁 system 分区的办法以及可以给硬件下断点，~~但目前仍处于开发阶段 有很多模块尚不兼容~~， 另外有 App Profile 限制 root 权限，（以下开发者原话）KernelSU 不会替代 Magisk，出现只是为了提供一种内核 root 方案， Magisk 在现有阶段已完全够用。KernelSU [使用文档](https://kernelsu.org/zh_CN/)[开源地址](https://github.com/tiann/KernelSU)

### root 的获取

> [!caution]
> 以下所有操作请在解锁 Bootloader 后进行！

1. 如果之前已安装过其它 root 类软件/版本面具，则直接打开同意其 root 权限，选择直接安装即可，重启后生效。

2. 提取出 Boot 镜像交于 Magisk 修补（可以在官网系统包中找到，必须为原厂 boot！否则刷后可能导致不开机！！！），先在开发者选项中打开 USB 调试

> [!note]
> 附：各厂商系统额外操作
>
> MIUI（小米、红米）
>
> 在“开发者选项”中开启“USB 调试（安全设置）”。注意，这和“USB 调试”是两个分开的选项。
>
> ColorOS（OPPO & OnePlus）
>
> 在“开发者选项”中关闭“权限监控”。
>
> Flyme（魅族）
>
> 在“开发者选项”中关闭“Flyme 支付保护”

并永久允许此电脑调试（模式：系统中）， 连接电脑后输入＂adb devices＂，再输入``adb reboot bootloader``，之后手机会重启并进入 Fastboot 模式， 将修补好的 boot 文件用`fastboot flash boot path`（是指的 boot 文件在 windwos 系统中的存放路径！！不要输入 path, 出厂内核 Android 版本为 Android13 的机型将 ramdisk 从 boot 中移除，单独放在了 init_boot 分区中，修补刷入方法大同小异，提取 init_boot 修补后使用`fastboot flash init_boot path`刷人即可）＂刷入，之后使用`fastboot reboot`命令重启进入系统

3. 在第三方 rec 下刷入已修补好的 boot 镜像将 magisk 安紫包后设改为 zip 使用第三方 rec 刷入

### Magisk 的优势与使用注意

Magisk 引入了 systemless 机制以用来修改 system 分区，不会破坏原有分区， 防止操作不当而变砖，而模块的引入也让我们对系统的修改与 xposed 的使用有了更好的方法，由于原生 XP 是直接劫持 Zygote 以达到 Hook 的目的，导致十分容易被软件检测出来，而 Magisk 在 Zygisk 中运行达到了隐藏目的使用 zygisk-lsposed 能让我们使用 LPosed 被发现的概率大大减少，而模块则可以用来比如修改调度、hosts 屏蔽，修改开机动画，内存管理等很多高效又实用的模块。

> [!warning]
>
> 1. VAB 架构手机 系统更新前请先到 Magisk 中＂安装到另一槽位（OTA 前）＂， 否则系统更新后 root 权限会丢失！
>
> 2. 请谨慎授予 root 权限与安装模块！！！root 尽量授予给给开源类和信任的软件：由于 root 属于最高权限， 因此授予后就算干坏事我们可能也无感知，甚至有可能进行格机操作！模块安装也请尽量安装开源模块， 对于加密模块与未知来源模块一定要谨慎！！！可在安装前先用＂爱玩机工具箱＂ 进行分析扫描（无法保证 100％安全！！！）
>
> 3. 如果模块不兼容导致刷入重启后无法开机（卡一屏） 可进入第三方 rec 文件管理、删除/data/adb/module 下的对应模块，也可在此前先行 安装各类救砖模块进行救砖，如果因刷入格机模块而导致黑砖，请使用电脑尝试使用 Fastboot 下救砖，若 Fastboot 也无法进入则只能进行 9008 救砖（更多将在下一章（4）镜像分区简介与注意中介绍
>
> 4. 永远不会知道你会碰上什么玄学问题，请一定记得备份原厂 boot， 以备不时之需

[^1]: 据测评数据报告，各大厂商系统中华为手机广告数量居首位， 魅族居末位（2022 年）
[^2]: PDD 利用的并非只是厂商给他开的”后门“，自身利用 Android Bundle 风水漏洞进行提权[参考链接 ](https://mp.weixin.qq.com/s/P_EYQxOEupqdU0BJMRqWsw)，并进行了许多恶意行为（附：该漏洞已在谷歌 2023 年 4 月份补丁中被修复，Android13 ＋不受此漏洞影响）
[^3]: 李跳跳、大圣净化等反广告 XPosed 模块在 2023 年 8 月被 TX 寄律师函导致永久停更/移除部分功能，在此致敬。
[^4]: 例：卸载系统应用达到一定上限时将无法继续卸载更多系统软件（仅限 adb）；ColorOS13 将自家浏览器等部分系统应用进行“加密”，（无法通过 adb 卸载）
