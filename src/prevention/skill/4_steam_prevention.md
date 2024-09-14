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

## 注意事项

首先，建议阅读[【萌新必看】CSGO饰品防骗指南](https://tieba.baidu.com/p/6342046706)。虽然这篇教程针对CSGO饰品防骗，但其安全理念同样适用于整个Steam平台。

为了防止键盘记录器获取各位的登录信息，建议通过扫码登录Steam。

为了尽可能避免避免扫描到假二维码，可以使用Softcnkiller内置的“[弹窗定位.exe](https://pan.huang1111.cn/s/Xq3eEcl)”验证二维码是否被覆盖。将准星拖动至登录窗口二维码上方，查看以下信息，特别是确认数字签名为“Valve Corp.”。

![正确示例](https://ooo.0x0.ooo/2024/09/14/O4FtlN.png)

## 利用Hips增强账户安全

我们可以通过Hips软件为Steam账号增加额外保护。以创信长荣的[冰盾 · 主动防御系统](https://trustsing.com/idefender/)为例，该软件据官方声明与其他杀毒软件兼容，大部分功能可免费使用。其他具有Hips功能的软件也可以参考类似的防护策略。

若选择冰盾，并且已安装其他安全软件，务必将安全软件的数字签名加入信任列表（属性 → 数字签名 → 详细信息 → 名称）。

![查看数字签名](https://ooo.0x0.ooo/2024/09/14/O4FXu1.png)

### 防止Steam内存读取

为防止Steam内存被恶意读取，同时避免误拦截Steam自身行为，需加入如下规则并信任数字签名为“Valve Corp.”的程序。

![规则设置](https://ooo.0x0.ooo/2024/09/14/O4FDBC.png)

![信任设置](https://ooo.0x0.ooo/2024/09/14/O4FHZL.png)

### 防止Steam文件篡改

为防止Steam文件被替换，同时避免误拦截Steam自身行为，需加入如下规则并信任Steam目录下的相关操作。

![规则设置](https://ooo.0x0.ooo/2024/09/14/O4FIzI.png)

![信任设置](https://ooo.0x0.ooo/2024/09/14/O4F3PD.png)

### 禁止读取Steam内存

启用增强保护时，可以禁止读取Steam内存。为了避免误拦截Steam程序行为，依旧需要信任数字签名为“Valve Corp.”的程序（参见上文图片）。

![规则设置](https://ooo.0x0.ooo/2024/09/14/O4FC9F.png)

### 处理SSFN文件

SSFN文件已经随着新版本steam的发布进入了历史的垃圾堆。如果各位仍担心SSFN文件还存在于电脑中，可以手动在Steam安装目录下删除它。引用其它网站的内容：

> 打开Steam目录，勾选“隐藏项目文件”，然后在搜索框中搜索“ssfn”，将找到的所有ssfn文件删除。

![搜索](https://gcore.jsdelivr.net/gh/lxcf/js@27ab632/upload/2.png)

![删除](https://gcore.jsdelivr.net/gh/lxcf/js@27ab632/upload/3.png)

## 补救措施

由于该内容已有全面的教程文档，特此放置教程的跳转链接：

- [Steam账号被盗/密码丢失/手机令牌丢失的申诉教程](https://tieba.baidu.com/p/4933393251)
- [Steam被盗号后的补救方法](https://www.bilibili.com/read/cv26753698/?jump_opus=1)