---
title: 通过卸载更新来解决玄学问题
author: Raven95676
date: 2024-07-29
icon: fas fa-file
category:
  - 实用技巧
tag:
  - 故障处理
  - Windows更新
isOriginal: true
order: 4
---
如果在系统更新后出现问题，可以通过卸载更新来解决。

> [!caution]
> 回退到较早版本的Windows时，如果当前版本的 Windows 具有 2023 年 5 月 9 日安全更新，并且应用了吊销策略，而以前版本未应用，则此过程可能会失败。
>
> 人话：[为了修复CVE-2023-24932漏洞发布的kb5025885补丁包](https://support.microsoft.com/zh-cn/topic/kb5025885-%E5%A6%82%E4%BD%95%E9%92%88%E5%AF%B9%E4%B8%8E-cve-2023-24932-%E5%85%B3%E8%81%94%E7%9A%84%E5%AE%89%E5%85%A8%E5%90%AF%E5%8A%A8%E6%9B%B4%E6%94%B9%E7%AE%A1%E7%90%86-windows-%E5%BC%95%E5%AF%BC%E7%AE%A1%E7%90%86%E5%99%A8%E5%90%8A%E9%94%80-41a975df-beb2-40c1-99a3-b3ff139f832d)把安全启动的其中一个证书吊销了，还原到安装这个补丁包之前的版本会导致系统无法启动。

![step 1](https://pic.imgdb.cn/item/66b70e7dd9c307b7e98ed366.jpg)

![step 2](https://pic.imgdb.cn/item/66b70e88d9c307b7e98edb3e.jpg)

之后就可以选择性地卸载部分更新了。

或者，各位还可以尝试回退到较早版本的Windows。

![step 3](https://pic.imgdb.cn/item/66b70e8fd9c307b7e98ee33e.jpg)
