---
title: 关于杀毒软件的选择：360、卡巴与Avast
author: Raven95676
date: 2024-07-29
icon: fas fa-file
category:
  - 预先防毒
tag:
  - 杀毒软件
  - 360安全软件
  - Avast
  - 卡巴斯基
isOriginal: true
order: 3
---

> [!note]
> 本文接受了 G5125872、shenapex 的指正
>
> 由于本文主要内容是 360、卡巴与 Avast，故修改标题。

首先，推荐先去看看病毒吧官方所写的[电脑常见问题汇总解答（病毒吧）](https://docs.qq.com/doc/DSU9mbmt5SHp2YmFS)

## 杀毒软件选择-省流

感谢《电脑常见问题汇总解答（病毒吧）》文档负责人的授权

![2024-08-01截取，已获得转载授权](3_choose_antivirus\OtLhSi.png)

## 360 的优势与劣势

> [!warning]
> 云安全响应（360 叫 360 安全大脑，卡巴斯基叫 ksn，其他厂家的在此不再赘述）是几乎每个知名的杀毒软件都有的功能。其安全程度取决于杀毒软件的用户基数、处理速度、更新速度等。并不是说云安全响应是 360 独有的功能。

得益于在中国庞大的装机量，只要各位不是前几百/几千个感染病毒的倒霉蛋，360 都能快速将新病毒纳入数据库并进行查杀。

可以说，360 之所以在境内是神，主要靠的是装机量大，云响应的够快。断网情况下的 360 可以说是如断一臂。

## 卡巴斯基的优势与劣势

> [!important]
> 卡巴斯基免费版乃至 KAV 都没有应用程序控制。
>
> kav 升级成卡巴斯基标准版之后倒是有了。

虽然卡巴斯基在云安全响应的用户基数上可能略逊于 360,但卡巴斯基强大的主动防御能力使其成为了世界顶级杀毒软件之一。主动防御可以智能判断恶意行为，对未知的新病毒有着强大的防御能力，即使是离线的情况下依然具有不俗的查杀能力。

而且据本人实际使用体验，卡巴斯基的误报率相对较低。

实测在启用 21.3 以上版本的卡巴斯基的设备上启动 WSL2 或者基于 WSL2 的 docker 会导致系统响应极为缓慢。

在 21.3 以上版本的卡巴斯基中，禁用“系统薄弱设置扫描”或忽略“允许运行 Linux 应用程序”的薄弱项设置可能是有效的解决方案。

如果已经修复了该薄弱项，请在管理员权限的 cmd 中运行：

sc config LxssManager start=auto

然后禁用“系统薄弱设置扫描”或忽略“允许运行 Linux 应用程序”的薄弱项设置

![官方声明](3_choose_antivirus\OtL7Dx.png)

卡巴斯基所具有的回滚功能可以尽可能还原病毒造成的破坏，比如被加密的文件、被破坏的文件等。

> [!caution]
> 回滚不是万能的。存在病毒造成了破坏但是杀毒软件没有识别到或者没有成功回滚的可能。

卡巴斯基作为境外的杀毒软件虽然强大且本地化做得不错，但也不可避免地存在一些水土不服的问题。比如，卡巴斯基对境内病毒的反应速度不如国内的杀毒软件快（装机量毕竟没那么大）。

而且，卡巴斯基的**离线**扫描能力是它的弱项。这一点在[AV-C 恶意软件防护测试 2024 年 3 月](https://www.av-comparatives.org/tests/malware-protection-test-march-2024/)等报告中可以看出。

![从左到右依次为：没网时的检测率、有网时的检测率、有网时的保护率、误报量](3_choose_antivirus\OtLiCX.png)

> [!tip]
> 检测率指单纯扫描的检测率，保护率才是主防测试

卡巴斯基同时具有免费版和付费版，其区别为（引自[卡巴斯基免费版常见问题](https://www.kaspersky.com.cn/blog/kaspersky-free-faq/8245/)）：

![卡巴斯基免费版和付费版的区别](3_choose_antivirus\OtL1nt.png)

由“岩浆膏来啦”进行补充的，更详细的查询页面：[卡巴斯基客户支持](https://support.kaspersky.cn/consumer)

另：为啥某些“病毒”卡巴不管呢？因为这些“病毒”除了闪屏、改壁纸别的不会干了……说是病毒，但是不会造成恶劣后果。它们的正式名称是玩笑程序，卡巴很少管这种玩笑程序。

## 关于 Avast

从上图可以看到 avast 的防御能力很高，那是不是 avast 就比其他杀毒软件更好呢？

首先 avast 其实也不错，但是其误报量看起来可能没什么，而且在境外口碑也不错，尤其是 avast 还是唯一一个以免费版参赛的（其实付费版杀毒能力也没比免费版高多少）。但是据我实际使用体验来说，avast 对于国内软件的包容性很低，误报可以把人气晕——国内软件的特殊情况。

如果说检测率决定了杀毒软件的防御力，那误报量就决定了杀毒软件的使用体验。avast 误报最狠的时候 WinRAR 汉化了都杀（本人实际体验），虽然能加白名单以及上报，但终归会影响使用体验。

> [!warning]
> 安装 CCleaner 时会捆绑安装 Avast（但是能取消），Avast 疑似已经成为流氓头子之一

## 总结

每款杀毒软件都有其优点和缺点，不能简单地说哪个更好。世界上没有绝对完美的杀毒软件。如果一个技术高超的病毒作者下定决心要突破这些杀毒软件的防御，那么杀毒软件的防护就像纸一样薄。

虽然强大的杀毒软件的防御不是什么阿猫阿狗都能过去的，但还是老生常谈的一句话，杀毒软件不是铜墙铁壁。良好的上网习惯比任何杀毒软件都更重要。不要随便点击小链接，不贪小便宜，可以让各位避免 99%的病毒感染。

此外，漏报和误报是所有杀毒软件不可避免的问题。世界上不存在 0 误报 0 漏报的杀毒软件，除非这个软件依靠一份覆盖了电脑内安装的以及未来可能接触到的所有软件的白名单工作——但这在日常使用中几乎是不可能达成的，君不见 360 的误报率（