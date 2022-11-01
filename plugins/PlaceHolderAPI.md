现在你应该在本教程前几章的学习以及不停地折磨群友之后学会了怎么开服，

现在让我来教教你如何使用一些几乎每个服务端必备的那些API/插件.

本文中学要学习的是：**PlaceHolderAPI**.

## 安装

PlaceHolderAPI的官方下载地址为： [Spigotmc](https://placeholderapi.com/), [Github(fastgit源)](https://hub.fastgit.xyz/PlaceholderAPI/PlaceholderAPI/releases).

至于安装的话... 不会？

那我上来梆梆给你来两下信不信？

## 使用

在使用之前我们先了解一下PlaceHolderAPI(下方简称PAPI)是干什么用的.

PAPI是一款为各个插件等提供动态变量占位符的插件，

主要用途如在计分板中或者TAB栏里显示各种支持的变量，

如显示服务器实时TPS，玩家个人的点券数量，当前时间等等等等.

但是PAPI又不可能自动识别所有插件的变量并自动转换为占位符，

所以他们提供了API可以让插件开发者们自行创建各种占位符，

有一些占位符会在你安装了PAPI和带有占位符的插件时自动加载，

而有一些则需要自行下载，比如PAPI本身提供的占位符.

我们可以前往 [这里](https://hub.fastgit.xyz/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders) 寻找并按提示下载各种占位符，可以看到他们总共将所有已收录的占位符分成了两种类型: <code>Standalone</code> 和 <code>Plugin-placeholders</code>,

<code>Standalong</code> 顾名思义就是只需要安装了PAPI即可使用，但是在使用前需要先按照提示安装/加载占位符,

这里以 <code>Player</code> 系占位符为例, 

在找到其占位符列表后（如图），

![player](https://s1.ax1x.com/2022/08/24/vcgkes.png)

我们可以看到标题Player下方提供了一个指令：

```
/papi ecloud download Player
```

打开你的游戏并进入服务器，输入其提供的指令，正常情况下他会有这样的提示：

![提示](https://s1.ax1x.com/2022/08/24/vcgHhV.png)

那就是成功安装咯，然后你再输入:

```
/papi reload
```

然后你就可以编辑你的TAB栏/记分板/等等等等只要支持显示PAPI占位符的插件，

并在某个位置放入一个Player变量: <code>%player_allow_flight%</code>，然后保存-重载你的插件，

然后你就会看到它显示了你需要的东西辣.

## PlaceholderAPI配置文件

因为有一些变量需要显示的是完全由你决定的内容(比如 <code>%server_name%</code> 也就是服务器名这种的),

因此PAPI提供了一个配置文件让你对这些变量的内容进行自定义.

我们打开PAPI的配置文件夹，你会发现这样几个文件:

![PAPI文件](https://s1.ax1x.com/2022/08/24/vcgUSO.png)

<code>expansions</code>文件夹是用来存放各个你手动加载的变量的，<code>config.yml</code> 就是主配置文件.

里面会存放各个你加载的占位符的配置以及PAPI的主要配置,

我们先来看一下PAPI的主配置:

```
check_updates: true #在OP进入时主动检查更新并将更新信息发送给OP
cloud_enabled: true #是否启用PAPI提供的云服务，建议为true否则无法正常下载变量
cloud_sorting: "name" #云的检索方式，不需要动
cloud_allow_unverified_expansions: false #是否允许云下载未经验证的占位符，建议为false
boolean: #布尔值的显示方式
  'true': 'yes' #当占位符显示的内容为true时，将会自动变成yes，这个yes是可以自行修改的
  'false': 'no' #跟上方同理
date_format: MM/dd/yy HH:mm:ss #时间显示格式，MM为月; dd为日; yy为年; HH为小时/时; mm为分; ss为秒.
debug: false #debug模式，正常情况下不用动.
```