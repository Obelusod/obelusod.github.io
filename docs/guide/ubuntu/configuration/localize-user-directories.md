---
title: 更改用户文件夹本地化
---

!!! note "用户文件夹本地化"

    用户目录下的默认文件夹（如桌面、文档、下载、图片等）的名称会在安装 Ubuntu 时根据选择的系统语言进行本地化命名。
    如果系统语言为中文，则用户文件夹也会以中文命名，这可能**导致某些软件在读取用户目录时无法识别中文**，可以使用
    [xdg-user-dirs](https://wiki.archlinux.org/title/XDG_user_directories) 工具进行更改。

安装 `xdg-user-dirs` 工具（通常多数桌面环境已安装）

``` console
$ sudo apt install xdg-user-dirs
```

---

设置系统默认的语言环境为美国英语（`en_US.UTF-8`）

``` console
$ export LANG=en_US.UTF-8
```

---

使用 `xdg-user-dirs` 根据当前语言环境重新配置用户目录

``` console
$ xdg-user-dirs-gtk-update
```

---

如果需要，可以再设置系统默认的语言环境为初始语言（如中文，`zh_CN.UTF-8`）

``` console
$ export LANG=zh_CN.UTF-8
```
