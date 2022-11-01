# 高级启动脚本(Aikar's Flags)

## 什么是Aikar's Flags?

首先，Aikar是一个人的网名，PaperMC核心成员/高级软件工程师，

他在对JVM和各种Java参数进行了数周研究后，为基于PaperSpigot的Minecraft服务器核心设计了一组经过高度优化的启动参数。

## 为什么要用Aikar's Flags?

Aikar本人：

I strongly suggest using these flags to start your server. These flags help keep your server running CONSISTENT without any large garbage collection spikes. CPU may be slightly higher, but your server will be overall more reliable and stable TPS.

(我强烈建议使用这些参数来启动你的服务器，这些参数有助于保持你的服务器运行稳定，没有产生任何垃圾。CPU占用可能会稍微高一点，但你的服务器总体上会获得更可靠和稳定的TPS。)

## 如何使用?

### 在线启动脚本生成

[StartMC](https://startmc.sh/) [Flags](https://flags.sh)

通过这两个网站,你只需要填入基本的信息(如服务端核心文件名/你希望使用的内存大小/是否自动重启)后，自动生成一套脚本，

你只需要将其生成的脚本文件下载，然后跟你的服务端核心放到一起，随后启动，然后就完事了