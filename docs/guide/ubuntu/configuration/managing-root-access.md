---
title: 管理并获取 Root 权限
---

!!! note "Root vs Sudo"

    - **Root（超级用户）**是 Linux 系统中的最高权限拥有者，类似于 Windows 的 Administrator，但权力更大。
    - **Sudo（SuperUser DO）**是一种安全机制，允许普通用户**临时**以 Root 身份执行命令。

!!! question "为什么推荐使用 Sudo 而不是直接登录 Root？"

    1. **安全性**：避免因 Root 密码泄露导致系统完全沦陷。
    2. **容错率**：Sudo 仅在当前命令生效，避免因长时间处于 Root 模式下的误操作（如误删系统文件）。
    3. **可追溯**：Sudo 会记录每一条特权命令的操作日志，便于排查问题。

    !!! tip ""

        **最佳实践：**日常使用普通用户，仅在需要安装软件或修改系统配置时，在命令前加上 `sudo`

---

## 临时获取 Root 权限

!!! tip "获取 Root 权限"

    在 Ubuntu 中，出于安全考虑，默认禁用了 Root 账户（未设密码），如果需要长时间以
    Root 身份执行多条命令，不建议直接启用 Root 账户密码，而是临时获取 Root Shell，这比反复输入 `sudo` 更高效。

在终端中执行下列命令，并输入**当前用户**的密码后，将进入 Root Shell 环境（命令提示符变为 `#`）

- `sudo -i`：（推荐）以登录 Shell 的方式获取权限，会加载 Root 用户的环境变量和配置文件，工作目录会自动切换到 `/root`，环境更纯净
- `sudo -s`：以非登录 Shell 的方式获取权限，保留原用户的环境变量，且保持在当前目录不变

``` console
$ sudo -i
```

完成操作后，可以执行下列命令，或按下 ++ctrl+d++ 键退出 Root 身份，返回普通用户模式

``` console
$ exit
```

---

## 启用 Root 账户

!!! danger "务必谨慎启用 Root 账户！"

    启用 Root 账户密码会增加系统被暴力破解的风险。请确保设置一个**极高强度的密码**，且不要在公网 SSH 中允许 Root 登录！

在终端中执行下列命令，依次输入当前用户密码、两次 Root 用户密码

``` console
$ sudo passwd root # (1)!
```

1. 也可以使用 `sudo passwd <username>` 更改其他用户的密码

![](../../../assets/images/ubuntu/passwd-root.png)

---

## 切换用户

可以使用下列命令在终端中切换用户（Switch User），需要输入**目标用户**的密码

- `su`：切换用户身份，保留原用户的环境变量（可能导致配置冲突或找不到命令）
- `su -`：（推荐）切换用户并同时切换环境变量（相当于完全重新登录），环境更纯净

``` console
$ su - <username>
```

![](../../../assets/images/ubuntu/su-root.png)

/// caption
例如，使用 `su root` 命令切换至 Root 用户
///