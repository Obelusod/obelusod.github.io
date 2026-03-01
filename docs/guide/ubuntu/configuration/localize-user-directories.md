---
title: 更改用户目录本地化
---

!!! note "用户目录本地化"

    用户目录下的默认文件夹（如桌面、文档、下载、图片等）的名称会在安装 Ubuntu 时根据选择的系统语言进行本地化命名。
    如果系统语言为中文，则用户文件夹也会以中文命名，这可能**导致某些软件在读取用户目录时无法识别中文**，可以使用
    [xdg-user-dirs](https://wiki.archlinux.org/title/XDG_user_directories) 工具进行更改。

安装 `xdg-user-dirs` 工具（通常多数桌面环境已预装）

``` console
$ sudo apt install xdg-user-dirs
```

---

=== "生成英文用户目录"

    执行下列命令，强制创建英文命名的目录

    ``` console
    $ LC_ALL=C.UTF-8 xdg-user-dirs-update --force
    ```

    ---

    生成新的用户目录后，旧目录下的文件会**移动到新目录**，但旧目录可能仍然存在，需要手动删除

    ``` console
    $ rm -rf ~/桌面 ~/下载 ~/模板 ~/公共 ~/文档 ~/音乐 ~/图片 ~/视频
    ```

=== "生成中文用户目录"

    !!! tip "确保已安装中文语言包" 

        如果系统之前为非中文语言，需要安装中文语言包，包括系统语言包、桌面语言包和字体包等，可以使用下列命令安装：

        ``` console
        $ sudo apt install language-pack-zh-hans language-pack-gnome-zh-hans fonts-noto-cjk
        ```

    执行下列命令，强制创建中文命名的目录

    ``` console
    $ LC_ALL=zh_CN.UTF-8 xdg-user-dirs-update --force
    ```

    ---

    生成新的用户目录后，旧目录下的文件会**移动到新目录**，但旧目录可能仍然存在，需要手动删除

    ``` console
    $ rm -rf ~/Desktop ~/Downloads ~/Templates ~/Public ~/Documents ~/Music ~/Pictures ~/Videos
    ```
