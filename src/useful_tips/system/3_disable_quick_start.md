---
title: Windows内存占用太多/关机后自动重启
author: Raven95676
date: 2024-07-29
icon: fas fa-file
category:
  - 实用技巧
tag:
  - 故障处理
  - 快速启动
isOriginal: true
order: 3
---
这两个问题大概率可以使用同一个方法解决——关闭快速启动。

## 为什么要关闭快速启动

Windows 10 开始，有了一个新功能叫快速启动。但是我更愿意叫它bug启动——相对于系统的其他部分快速启动起码在本人的电脑上几乎没有正确工作过。

这两个问题很大概率都是快速启动引起的，这种情况下最快解决问题的方案就是关闭快速启动——反正在使用固态硬盘的情况下，开不开快速启动只差了几秒而已。

## 怎么关闭快速启动

### 第一步

打开控制面板。

Windows 10&Windows 8.1：

开始-Windows系统-控制面板

![Winodws8.1](https://pic.imgdb.cn/item/66b70e4ad9c307b7e98e9b3f.jpg)

![Windows10](https://pic.imgdb.cn/item/66b70e50d9c307b7e98ea146.jpg)

Windows 11：

开始-所有程序-Windows工具-控制面板

![Windows11](https://pic.imgdb.cn/item/66b70e56d9c307b7e98ea7d1.jpg)

### 第二步

在控制面板的搜索框内输入“电源”，之后点击“更改电源按钮的功能”

![电源选项](https://pic.imgdb.cn/item/66b70e67d9c307b7e98ebab7.png)

### 第三步

点击“更改当前不可用设置”，并取消选中“启用快速启动（推荐）”

![关闭快速启动](https://pic.imgdb.cn/item/66b70e72d9c307b7e98ec6b6.jpg)
