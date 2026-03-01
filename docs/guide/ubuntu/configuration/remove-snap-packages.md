---
title: 卸载 Snap 组件及其软件包
---

!!! abstract "Snap"

    **Snap** 是 Ubuntu 推出的容器化软件打包格式，由 Canonical 开发，通过自包含依赖和沙盒隔离技术，简化应用安装与管理，
    避免依赖冲突并增强安全性；其应用默认自动更新，支持跨 Linux 发行版，并依托 Snap Store 提供集中化分发平台。

    **但由于 snap 在国内网络下体验较差，软件包占用空间较多而软件启动速度较慢，并且强制捆绑、夹带私货等原因，在确定不需要的情况下可以将其卸载。**

!!! danger "务必谨慎卸载 Snap！"

    在 Ubuntu 24.04 及以上版本中，Snap 作为系统的核心组件，卸载将导致以下后果：
    
    - **Firefox 浏览器等 Snap 版应用被移除**。
    - **Ubuntu App Center (应用商店) 被移除**。
    - **部分依赖 Snap 的系统功能可能失效。**
    
    除非明确知道如何通过命令行安装**替代软件**，否则请勿执行卸载操作！

---

## 卸载 Snap 软件包

手动卸载 Firefox 和应用商店等上层软件

``` console
$ sudo snap remove firefox
$ sudo snap remove snap-store
$ sudo snap remove firmware-updater
```

---

循环卸载所有 Snap 包，确保 `snap list` 命令结果为空

``` console
$ for p in $(snap list | awk 'NR>1 {print $1}'); do \
    sudo snap remove --purge "$p"; \
  done
```

---

## 移除 Snapd 服务与核心

卸载前，先停止所有 Snapd 服务

``` console
$ sudo systemctl disable --now \
  snapd.service \
  snapd.socket \
  snapd.seeded.service
```

---

使用 APT 完全卸载 Snap

``` console
$ sudo apt autoremove --purge snapd
```

---

清理 Snap 残留文件

``` console
$ rm -rf ~/snap
$ sudo rm -rf /var/cache/snapd/
$ sudo rm -rf /var/lib/snapd/
```

---

## 防止 Snap 自动重装

为了禁止 Ubuntu 的某些更新试图重新安装 Snap，新建并编辑规则（`nosnap`）

``` console
$ sudo gedit /etc/apt/preferences.d/nosnap
```

---

在 `nosnap` 文件中写入以下内容并保存

``` yaml title="nosnap"
Package: snapd
Pin: release a=*
Pin-Priority: -10
```

---

最后刷新 APT 缓存即可

``` console
$ sudo apt update
```
