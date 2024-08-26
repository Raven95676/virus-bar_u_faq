---
title:
author: Raven95676
date: 
icon: fas fa-file
category:
  - 实用技巧
tag:
  - 网络重置
  - 网络异常
  - 解决方案
isOriginal: true
order: 5
---

## 确定网络设备的类型

在确定网络问题之前，我们先要搞明白一个问题：啥玩意是有线网卡，啥玩意是无线网卡，啥玩意是蓝牙设备？

我们可以通过设备名称内包含的不同的关键词来区分这些设备。

有线网卡通常会包含这些关键词：

- Ethernet
- Gigabit
- GbE
- Family Controlle

无线网卡通常会包含这些关键词：

- Wireless
- Wi-Fi
- Dual Band

蓝牙设备就简单多了，看看里面有没有Bluetooth就行了。

其次，我们还需要搞明白ipv6和ipv4的区别。在这里提供一个简单的区分ipv6与ipv4的方式：有":"的是ipv6，有"."的是ipv4。

## 常见错误类型

下面收集了一些常见的错误类型及其通用解决方案。

### DNS_PROBE_STARTED

当出现这个错误代码的时候，通常表示浏览器正在尝试启动 DNS 查询以解析域名，但由于某种原因未能成功完成。一般来说，等待一会之后就会变成更为精准的错误代码。

### DNS_PROBE_FINISHED_NO_INTERNET

顾名思义，没网络了，连接不上DNS服务器。

### DNS_PROBE_FINISHED_NXDOMAIN

这个错误表示 DNS 服务器无法解析这个的网站域名。

假如你只有一个网站访问起来是这样，请首先检查下你是不是输错了域名。

如果域名没有输入错误，请按Win+R组合键后，在运行窗口内输入“cmd”之后点击确定。

![运行窗口](https://ooo.0x0.ooo/2024/08/25/OtQApK.png)

在弹出来的窗口中输入：

```shell
nslookup 访问错误的网址
nslookup baidu.com
```

如果显示的内容中包含ipv6，请

## 使用网络重置解决未知问题

> [!caution]
>
> 网络重置可能导致设备出现无法上网的情况，请谨慎使用。

## 网络重置后无法连接网络
