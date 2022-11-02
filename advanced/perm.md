# 权限系统

## 什么是权限系统？有什么用？

往简单的说，mc的整个服务端的所有行为，包括指令/玩家行为等等等等都需要一条权限节点，权限节点通常长这样：

```
learnmcs.github.star
learnmcs.github.fork.*
```

一条权限节点可以让我们大概知道这是哪个插件的干什么用的，而对于服务端来说，服务端会在玩家每次执行操作时检测玩家是否拥有该操作需要的权限节点，

比如一个普通玩家想输入`/stop`,那么服务端就会检测这个玩家的uuid下有没有权限`minecraft.command.stop `，如果有，就让玩家执行并且停止服务端，如果没有，那就会通过这种方式提示：啊你没有权限！你不能执行这个指令！

### 而我们该如何管理每一个玩家的权限呢？又该如何给予所有玩家某一条权限呢？

这个时候我们就需要使用一个权限管理插件辣！（其实Spigot服务端自带这个功能但是太拉了就直接略过）

常见的权限管理插件有：[LuckPerms](https://luckperms.net/)/[GroupManager](https://www.spigotmc.org/resources/groupmanager.38875/)/[PermissionsEX](https://www.spigotmc.org/resources/permissionsex.98708/)(已停更)

本系列教程中将使用现代、开发者活跃且功能强大的LuckPerms作为所有关于权限的演示！(不是广告不是广告)

关于如何管理权限、设置权限(组)等等，我们将放到 [LuckPerms](../plugins/LuckPerms.md) 中进行讲解啦