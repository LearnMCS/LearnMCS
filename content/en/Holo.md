---
title: DecentHolograms
description: ''
position: 13
category: 插件操作
---
## 这是什么?

是不是看见过其他服务器里炫酷的浮空字？

是不是还是全息随视角变换的？

DecentHolograms就是一个可以实现这些功能的插件，

只需要通过几行简单的指令，你也可以做出如此炫酷的全息字

## 安装

[下载地址](https://www.spigotmc.org/resources/decentholograms-1-8-1-19-papi-support-no-dependencies.96927/)

将下载的插件放置于`/plugins`文件夹，然后重启/启动服务端，

待服务端加载完成后你会在`/plugins`里找到一个名为`DecentHolograms`的文件夹，打开，里面就是此插件的配置等信息了.

## 使用

使用方法真的很简单很简单！

你只需要进入你的服务器，然后找一个你想要放置全息字的位置，

然后输入下方指令:

```
/dh create <名字(英文)>
```

然后你的脚下就会出现一个这样的全息字:

![01.jpg](https://s1.ax1x.com/2022/10/22/xgMim6.png)

恭喜你！你的第一个全息字就被创建啦！

接下来，该如何编辑呢？

还记得前面提到过的配置文件夹吗？打开它，然后找到`holograms`文件夹，再打开它

然后你就会在里面发现以你刚刚创建的名字命名的一个全息字文件，

比如：`01.yml`

### 全息字存储文件

打开这个文件，然后你会发现好多好复杂好复杂的信息对吧，不用慌，我们一行一行来看：

![01.yml.jpg](https://s1.ax1x.com/2022/10/22/xgMKXt.png)

`location: world:-119.166:67.117:210.867`:存储的是你这个全息字的位置，格式为

`location: 世界名:x坐标:y坐标:z坐标`；

`enabled: true`:意为是否启用此全息字，`true`为启用，`false`为禁用；

`display-range: 48`:意为玩家在此全息字附近的几格距离内能看见，`48`即为玩家走进以全息字为中心的半径48格内就能看见此全息字；

`update-range: 48`:跟`display-range`差不多，意为当玩家在几格距离内将更新全息字显示的内容；

`update-interval: 20`:全息字显示内容的更新间隔；

`facing: 0.0`:全息字的初始朝向，不需要动；

`down-origin: false`:最下方一行为最底行并保持`location`的坐标；

`pages:`全息字的页面；

```
- lines:
  - content: Blank Line
    height: 0.3
```

全息字第一页的第一行，`content`为该行包含的内容，`height`为行间距；

`actions: {}`:玩家点击全息字后的行为。

### 修改全息字显示内容

找到行`- content: Blank Line`，并把`Bland Line`删除并加上两个单引号：

```
- lines:
  - content: ''
```

然后往单引号内填入任何你想要的内容（支持颜色符号，1.16及以上支持RGB渐变色），然后保存，进入游戏，输入

```
/dh reload
```

然后你刚刚创建的第一个全息字，内容就会变成你刚刚修改的内容辣

### 其他内容

DecentHolograms支持在全息字里添加多行内容以及格子头颅/生物等等，

更多详细内容可以查阅[官方文档](https://wiki.decentholograms.eu)或者前往QQ群询问。