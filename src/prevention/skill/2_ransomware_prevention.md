---
title: 关于反勒索病毒的两三事
author: Raven95676
date: 2024-07-29
icon: fas fa-file
category:
  - 预先防毒
tag:
  - 系统防护
  - 反勒索
isOriginal: true
order: 2
---

首先需要明确，现在没有任何手段可以 100%防御电脑端勒索病毒。手机只要不乱安装软件乱授权或者随便登别人的 Apple ID 都没有大问题。

下面是从几个方面来进行勒索病毒的防御。

## Windows Defender 用户

使用 Windows defender 的用户可以打开 wd 的“防勒索保护”以获得更高的防勒索能力。方法请参照：[Win10 怎么样使用 Defender 防止勒索病毒](https://jingyan.baidu.com/article/495ba841b715e538b20ede66.html)

## 安全辅助软件

> [!note]
> 使用的样本 SHA256 为：7de7ce42cde20847749fa5bc4048cf5cacec8c2bf49169d7d262ea38630640ea

在原有杀毒软件的情况下，可以使用安全辅助软件对系统进行布防。关于安全辅助软件，请参阅[正确利用杀毒软件辅助工具](https://faq.ravenote.top/prevention/basic/5_auxiliary_antivirus.html)。

### [360 文档卫士](https://weishi.360.cn/wendangweishi.html)

> [!caution]
> 需要保证在勒索软件彻底清除完成的情况下才能进行还原，否则还原后的文件将继续被加密。
>
> 360 文档卫士只防加密文件类勒索。

优点：在文档作出更改时自动备份文档，除非文档卫士本身遭到针对性攻击，不然备份文件基本上是安全的。

缺点：就像名字一样，默认情况下只保护 100MB 以下的文档（doc、docx、ppt、pptx、xls、xlsx、pdf），不保护图片、视频等，不保护 txt。但是可以通过设置让其支持某个后缀名的文件。

![恢复页面](https://ooo.0x0.ooo/2024/08/24/OtL2KC.png)

在被加密后自行恢复即可

### [Kaspersky Anti-Ransomware Tool](https://www.kaspersky.com/anti-ransomware-tool)（KART）

> [!note]
> 本软件只能 Block（封锁）病毒，需要手动将被封锁的病毒删除。
>
> Windows LTSC 版本、企业版请安装 FOR BUSINESS。家庭版、专业版请安装 FOR HOME.

优点：ksn（卡巴斯基安全云）和卡巴主防的提炼，在不安装卡巴斯基的情况下提供较为全面的保护，具有回滚能力。

缺点：回滚不是万能的。存在病毒造成了破坏但是杀毒软件没有识别到或者没有成功回滚的可能。

![样本在断网的情况下被主防杀](https://ooo.0x0.ooo/2024/08/24/OtLjBN.png)

![回滚了被加密的两个文件](https://ooo.0x0.ooo/2024/08/24/OtLE56.png)

附：**K**aspersky **A**nti-**R**ansomware **T**ool（KART）的使用指南

![全勾上然后一路Next](https://ooo.0x0.ooo/2024/08/24/OtLGKP.png)

![关掉引导提示](https://ooo.0x0.ooo/2024/08/24/OtLs8s.png)

![点击注册](https://ooo.0x0.ooo/2024/08/24/OtLdHB.png)

![全填上](https://ooo.0x0.ooo/2024/08/24/OtLQ0b.png)

![圈起来的是邮箱收到的要输入的激活码](https://ooo.0x0.ooo/2024/08/24/OtL60L.png)

![打开设置](https://ooo.0x0.ooo/2024/08/24/OtLfJa.png)

![打开额外的防护](https://ooo.0x0.ooo/2024/08/24/OtLlfS.png)

![UnBlock是解除警报，Move to trust是移到信任](https://ooo.0x0.ooo/2024/08/24/OtLYxK.png)

### [瑞星之剑](https://www.rising.com.cn/j/)

> [!note]
> 本推荐条目来自于“岩浆膏来啦”
>
> 本软件只能禁止病毒运行，并改病毒后缀，需要手动将病毒删除。
>
> 瑞星之剑现在还在维护。

优点：通过诱饵文件以及行为分析等技术，可有效防御未知与已知勒索病毒的攻击，阻止用户正常文件被勒索病毒破坏。

缺点：没有回滚功能，存在文档被加密无法恢复的可能。

### 已知问题

Kaspersky® Anti-Ransomware Tool 尤其是在打开额外的防护的情况下会导致 sandboxie 部分功能无法正常使用。

## 为什么要备份

> [!important]
> 对于公司电子账本等涉及公司管理条例的文件，请谨慎考虑备份行为是否违反公司规定，以避免数据泄露和法律风险。
>
> 在执行数据恢复前，务必确保勒索病毒本体已被彻底清除。

无论何时，保护数据安全的首要措施就是备份。勒索病毒的威胁越来越严重，其中一些加密的文件无法通过暴力破解，只能等待解密工具的出现。然而，对于那些不流行的勒索病毒，开发解密工具的可能性极低。更糟糕的是，有些勒索病毒使用完全随机的加密密钥，即使支付赎金也无法解密。

在这种情况下，最坏的结果是，文件可能永远无法恢复。因此，备份是防止数据丢失的最可靠手段。

爷爷/奶奶，你当年被加密的文件的解密工具出现啦（bushi

## 正确备份很重要

跳转链接：[正确备份很重要](https://faq.ravenote.top/prevention/skill/3_correct_backup_method.html)

制作 By shenapex

## 利用离机备份保护重要文件 <Badge text="推荐" type="tip" />

> [!caution]
> 如果使用 MLC/SLC/TLC 固态硬盘作为移动硬盘，请定期通电（连接电脑，不是连接充电器），以确保数据不会丢失。
>
> 对于长时间存储，推荐使用 CMR 机械硬盘，并注意防震。
>
> 切勿使用 QLC 固态硬盘或 SMR 机械硬盘进行备份。
>
> ![垃圾硬盘的代价](https://ooo.0x0.ooo/2024/08/24/OtH841.jpg)

1. 购买一块移动硬盘，将重要文件拷贝进去。
2. 需要修改时，复制到主机修改完再覆盖回移动硬盘。

## 利用公有云保护重要文件

### OneDrive

~~360 文档卫士 Plus~~

从原理上说，这个比 360 文档卫士安全。

> [!warning]
> 在购买 OneDrive 前，请先测试本地的文件上传下载速度是否满意，并确保能够访问[OneDrive 网页版](https://onedrive.live.com/)，因为数据恢复可能需要通过网页版操作。
>
> 暂未发现隐私泄露风险，尤其是其个人保管库功能。

OneDrive 免费提供 5G 存储空间，免费 5G，购买 Microsoft 365 之后会升级为 1T（[数码荔枝](https://lizhi.shop/site/products/id/65)售价￥ 259/年，为了数据安全请勿购买拼车版）。

直接集成在 Windows 文件管理器中，可与 Windows 无缝衔接。

![OneDrive设置流程](https://ooo.0x0.ooo/2024/08/24/OtLc1g.png)

**个人保管库**：个人保管库（锁定状态下）中的文件不会受到勒索病毒的侵扰——可惜免费版只能往里放 3 个文件。

**数据恢复方法**：

（前提：onedrive 还能运行。不能运行的话需要将系统恢复到能运行 onedrive 的状态）

![OneDrive恢复流程](https://ooo.0x0.ooo/2024/08/24/OtLSwl.png)

1. 如果源文件被删除，可以通过网页版的“回收站”恢复。
2. 如果文件被覆盖，可以在文件历史版本中进行恢复。

### 百度网盘

> [!caution]
> 由于百度网盘存在文件和谐和隐私泄露的风险，请务必在上传前将文件压缩、加密，或者使用[VeraCrypt](https://www.veracrypt.fr/code/VeraCrypt/)进行保护。
>
> VeraCrypt相关介绍：[一键跳转](https://www.bilibili.com/video/BV1WG4y1T7hc)

百度网盘提供 200G 免费存储免费 200G，购买售价 263/年（连续包年）的网盘会员后可升级为 5T。

**数据恢复方法：**

从网盘下载备份的文件。

### 阿里云 OSS

> [!warning]
> 阿里云 OSS 中的文件会被审核，因此请务必将文件压缩、加密后上传，或使用 VeraCrypt 进行保护。
>
> 暂未发现隐私泄露风险。

阿里云 OSS 的存储成本为 0.12 元/GB/月，可以购买 9 元/年的 40G 储存包来节省开支。上传下载需要支付流量费用。由于配置相对于上面两个较为复杂且个人感觉没人用这个，暂不展开讲解。如有人需详细讲解可联系本人<Raven95676@proton.me>。有人需要的话本人就展开讲讲这个。

胜在存得少就便宜。并且还有 ossbrowser 这种图形化管理软件。

**数据恢复方法**：

通过 ossbrowser 下载备份的文件。

## 利用 NAS 设备保护重要文件

虽然本人目前正在使用该方案对电脑进行备份，但这个方法存在一些问题：

1. 使用 NAS 进行备份需要一定的硬件投入，包括 NAS 设备和硬盘的购买。

2. 对于安全意识较低的小白用户，可能会因配置不当而让 NAS 受到勒索病毒的威胁。这些病毒专门针对 NAS 设备，如果配置不当，可能导致数据丢失或被加密。

尽管 NAS 备份方案有效，但并不适合所有用户，所以这里不作详细展开。

## 歪·门·邪·道

~~需要保护的文件直接存手机里~~

~~但手机丢了就完蛋了~~
