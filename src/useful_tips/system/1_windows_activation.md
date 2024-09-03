---
title: 安全地激活Windows
author: Raven95676
date: 2024-07-29
icon: fas fa-file
category:
  - 实用技巧
tag:
  - Windows激活
  - Windows版本转换
isOriginal: true
order: 1
---

## winodws 7 激活

这个我没啥办法，撞运气下载激活工具吧。

## Windows 8.1 及以上

> [!note]
> 本节接受了幸运的红烧熊掌、shenapex、Firedoge 的补充。

### 命令激活法

首先，去微软官网查询下激活码[(KMS) 客户端激活和产品密钥](https://learn.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys)

以 Windows 10 专业版为例，依次执行：

```shell
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
slmgr /skms kms.03k.org
slmgr /ato
```

系统会自动续期，不用每半年运行一次。

### 激活工具法

这里推荐一个叫做[Microsoft Activation Scripts](https://github.com/elitekamrul/MAS)的脚本。可以下载使用，也可以执行：

```shell
irm https://massgrave.dev/get | iex
```

来直接使用该脚本（本人验证截止至 2024-07-29,该脚本内容正常）。

### Windows 转版本

首先，通过管理员权限终端执行：

```shell
dism /online /get-targeteditions
```

来查询可以转到哪个版本。

之后使用：

```shell
slmgr /ipk 目标系统key
```

转换到目标系统。然后再执行一次激活流程即可。

目标系统 key：

专业版: VK7JG-NPHTM-C97JM-9MPGT-3V66T

专业教育版: 8PTT6-RNW4C-6V7J2-C2D3X-MHBPB

专业工作站版: DXG7C-N36C4-C4HTG -X4T3X-2YV77

企业版: XGVPP-NMH47-7TTHJ-W3FW7-8HV2C

教育版: YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY

家庭版: YTMG3-N6DKC-DKB77-7M9GH-8HVX7
