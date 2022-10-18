---
title: server.properties文件
description: ''
position: 7
category: 基本操作
---

# 关于 server.properties

## 什么是server.properties？

(以下内容从Minecraft官方wiki复制而来并进行了一些修改)

<code>server.properties</code>是储存多人游戏/服务端(包括但不限于Vanilla原版/CraftBukkit系/Sponge系)的服务器设置(官方提供的选项，不包括paper等提供的选项)的文件。

在编辑<code>server.properties</code>时，就算不同行之间的顺序可以打乱，确保其与原始的文件有相同的结构也很重要。每一行的等号之前的文本为选项名，**您不应该修改这些内容**。等号后面为变量的值，您可以按照规则自行编辑。以 <code>#</code> 开头的行为注释，添加、修改或移除注释行不会对游戏造成任何影响。

保存了<code>server.properties</code>的更改之后，服务端**必须重新启动**才能使更改生效，另一种选择是在服务器控制台或游戏中使用<code>/reload (confirm)</code>命令重新加载(可以但不建议，以及该命令具体用法请查看本文下一段 <code>关于 /reload (confirm)</code>)，这也能获得同样的效果。

如果<code>server.properties</code>文件未列出下文中所有的属性（例如服务端版本更新加入新属性，或该文件还未创建），那么服务器在启动时会重写<code>server.properties</code>补全缺失的属性，并将缺失的属性值设为默认值。

<code>server.properties</code>文件只是一个普通的UTF-8编码文本文件，尽管它有扩展名，但可以使用任何文本编辑器进行编辑，包括但不限于用于Windows的Notepad、用于Mac的TextEdit或者用于Linux的nano和vim。 

## 关于 /reload (confirm)

<code>/reload (confirm)</code> 是由Minecraft官方提供的一个指令，用于重载整个Minecraft服务端，

其中CraftBukkit系服务端需要在执行 <code>/reload</code> 后再次执行 <code>/reload confirm</code> 进行二次确认.

#### 为啥不建议使用 /reload ?

<code>/reload</code> 作为一个热重载指令，在专业(或者说比较复杂)的服务端如CraftBukkit系上执行有一定的风险，例如某些插件的配置可能会因此损坏或者插件会因此崩溃. 

因此，通常建议需要重载整个服务端的时候不如直接重新启动服务端而不是使用 <code>/reload</code>.