---
title: 杀毒软件无法启动怎么办
author: Raven95676
date: 2024-08-08
icon: fas fa-file
category:
  - 后继措施
tag:
  - 处置措施
  - 应急恢复
isOriginal: true
order: 2
---
如果系统感染了恶性病毒，杀毒软件无法启动，可以使用下面的手段恢复。

## 需要提前准备的部分

为了防止电脑系统被病毒破坏后无法及时应对，建议提前准备应急杀毒工具和Windows PE。

### Windows PE

关于Windows PE的详细介绍，请参考[制作WindowsPE以备不时之需](https://faq.ravenote.top/prevention/basic/4_why_windows_pe.html)。

### 应急杀毒工具

> [!important]
> Kaspersky Virus Removal Tool会自带一个日期的病毒库与查毒引擎，请定期下载最新版的Kaspersky Virus Removal Tool以供备用，以防止断网情况无法更新。
>
> 360系统急救箱使用时 ==**必须联网**== ，少了联网病毒库的急救箱就好像一个人失去了左膀右臂。（岩浆膏来啦的补充）

- **[360系统急救箱](https://weishi.360.cn/jijiuxiang/)**
  - 可以提前下载[Windows PE版本](https://weishi.360.cn/jijiuxiang/guide.html)，根据PE的位数选择32位或64位版本，并将其存储到PE盘中，启动PE后解压即可。

- **[Kaspersky Virus Removal Tool](https://www.kaspersky.com/downloads/free-virus-removal-tool)**
  - 没网的时候各位最好用这个。
  - 不能在PE内运行。

### 不推荐的应急工具

- **ESET Online Scanner**：遇到复杂病毒时可能无法启动，不适合作为应急使用。
- **Norton Power Eraser**：新时代Hash校验器，并且无法应付特别厉害的病毒

### 备用工具

> [!important]
> 从求助者的实际使用情况来看，（krd）不能正常启动的情况太多了。
>
> 故不建议使用
>
> 情报来自“岩浆膏来啦”

- **[Kaspersky Rescue Disk](https://www.kaspersky.com.cn/downloads/thank-you/free-rescue-disk)**
  - 提供应急盘功能，但实机测试发现其对现代无线网卡的支持度较低（如Intel ax211无法识别）。联网时推荐使用有线连接。
  - 详细体验可以参考[反向种草！卡巴斯基急救盘（KRD）试用体验报告](https://post.smzdm.com/p/a5dxn0g8/)。

## 系统内使用应急工具

在系统内建议使用Kaspersky Virus Removal Tool和360系统急救箱进行扫描，尤其推荐360系统急救箱对抗Rootkit。

## 在Windows PE中使用

> [!important]
> PE中x盘的东西不是病毒。PE中很多工具都涉及到了对系统的更改，还有一些破解过的软件。

### 在pe <Badge text="推荐" type="tip" />

> [!note]
> 该方法来自“四海一叶秋”
>
> 有时候360系统急救箱扫描不到，360杀毒能扫描到。比如之前某个感染dll的病毒，急救箱扫描不到，360杀毒可以检查出。——来自“四海一叶秋”

1. 安装FirPE到本地硬盘，重启后选择进入PE。
2. 进入PE后，由于可以联网，打开浏览器下载安装360杀毒、火绒杀毒软件。
3. 全盘扫描并处理威胁。

**360系统急救箱PE版的使用方式：**（[自定义壁纸](https://www.pixiv.net/artworks/112139971)请忽略）

![360_jijiuxiang_pe_easyu.gif](https://s2.loli.net/2024/07/29/uK1IcRZkzr5FexA.gif)

更多内容请参见[手动添加PE引导查杀病毒]()

### 方法B

使用[Kaspersky Rescue Disk](https://www.kaspersky.com.cn/downloads/thank-you/free-rescue-disk)进行系统扫描和处理。

### 手动添加PE引导查杀病毒

> [!note]
> 本节内容由“四海一叶秋”提出，由“Raven95676”进行整理。

有些rootkit会针对PE本地安装，即本地安装PE会被阻止，但是用bootice手动添加可以装上。

bootice下载地址：[123盘](https://www.123pan.com/s/Pti7Vv-aJTRh.html) 解压密码：Raven95676

添加里添加wim启动项。之后箭头的几个地方改下。

或者压缩一个1g左右fat32分区，释放pe生成的iso文件（这种方法适用于支持uefi引导的急救盘）bootice可以调整uefi启动顺序勾选下次启动fat32分区的bootx64.efi。

## 一切手段失效时

可以使用PE重置系统。关于PE的制作和使用，请参考[制作WindowsPE以备不时之需](https://faq.ravenote.top/prevention/7_why_windows_pe.html)中的相关介绍。

### 没有PE的情况下

1. ~~请移驾电脑店~~
2. 前往网吧开台机子制作PE并下载系统镜像。（嫌下载时间长可以且手机是安卓可以手机下载相关文件后就用电脑处理必须用电脑处理的部分）
3. 记得把需要下载的pe工具也放进去
4. pe可联网的，pe工具也直接在pe里面下载
