---
title: 保护Steam账号的小妙招
author: Raven95676
date: 2024-09-14
icon: fas fa-file
category:
  - 预先防毒
tag:
  - 数据保护
  - Steam
  - 防盗号
isOriginal: true
order: 4
---

由于近期Steam被盗库存的人数激增，本人编写了此文，整理了现有的资源，并补充了一些本人的见解。

## 预先防盗

首先，建议阅读[【萌新必看】CSGO饰品防骗指南](https://tieba.baidu.com/p/6342046706)。虽然这篇教程针对CSGO饰品防骗，但其安全理念同样适用于整个Steam平台。

本人在此提出以下补充：

- 谨慎添加陌生人为好友。建议添加可以通过其他渠道确认其当前steam账号状态的好友。
- 请勿使用某宝等平台购买任何steam激活码，尤其是不让直接输入CD-KEY，需要对电脑进行操作的“激活码”。
- 务必确认当前操作页面是否为steam官方链接。
- 为了防止键盘记录器获取各位的登录信息，建议通过扫码登录Steam。
  - 为了尽可能避免避免扫描到假二维码，可以使用Softcnkiller内置的“[弹窗定位.exe](https://pan.huang1111.cn/s/Xq3eEcl)”验证二维码是否被覆盖。将准星拖动至登录窗口二维码上方，查看以下信息，特别是确认数字签名为“Valve Corp.”。
  ![正确示例](4_steam_prevention\O4FtlN.png)

## 利用Hips增强账户安全

我们可以通过Hips软件为Steam账号增加额外保护。以创信长荣的[冰盾 · 主动防御系统](https://trustsing.com/idefender/)为例，该软件据官方声明与其他杀毒软件兼容，大部分功能可免费使用。其他具有Hips功能的软件也可以参考这个思路。

若选择冰盾，并且已安装其他安全软件，务必将安全软件的数字签名加入信任列表（属性 → 数字签名 → 详细信息 → 名称）。

![查看数字签名](4_steam_prevention\O4FXu1.png)

### 禁止读取Steam配置

可以通过Hips软件限制非数字签名为“Valve Corp.”的程序读取Steam配置。

虽然ssfn已经随着steam新版本的发布进入了历史的垃圾堆，但是为了防止降级客户端生成ssfn或升级客户端后ssfn未删除导致ssfn泄露，也加上了关于ssfn的规则。

![规则设置](4_steam_prevention\O4hk9S.png)

![信任设置](4_steam_prevention\O4hzUN.png)

### 防止篡改Steam文件

为防止Steam文件被替换，同时避免误拦截Steam自身行为，需加入如下规则。

> [!caution]
> 该规则默认放行steamapp下的程序。如小红车之类的软件下载的内容请务必移动至其他目录运行。

![规则设置](4_steam_prevention\O4hBEB.png)

![信任设置](4_steam_prevention\O4hWFK.png)

### 禁止读取Steam内存

启用增强保护时，可以禁止读取Steam内存。为了避免误拦截Steam程序行为，依旧需要信任数字签名为“Valve Corp.”的程序（信任设置参见上文图片）。

![规则设置](4_steam_prevention\O4FC9F.png)

### 使用优秀的杀毒软件

这些措施只能在一定程度上增强steam的安全性，无法做到绝对避免任何入侵行为。使用优秀的杀毒软件依然是必须的。

## 补救措施

由于该内容已有全面的教程文档，特此放置教程的跳转链接：

- [Steam账号被盗/密码丢失/手机令牌丢失的申诉教程](https://tieba.baidu.com/p/4933393251)
- [Steam被盗号后的补救方法](https://www.bilibili.com/read/cv26753698/?jump_opus=1)