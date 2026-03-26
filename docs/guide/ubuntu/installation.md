---
title: 安装 Ubuntu
---

## 禁用 Secure Boot 功能

!!! abstract "Secure Boot（安全启动）"

    **Secure Boot** 是 BIOS 的一种安全功能，旨在确保操作系统和启动项的完整性和可信性，可以防止未经授权的操作系统、病毒和恶意软件向计算机进行认证，进而保护系统不被攻击和篡改。

    **启用 Secure Boot 后，在使用外部 U 盘运行某些程序或安装其他操作系统时，会被受到限制而无法运行/安装，因此需要临时禁用。**

---

首先进入 BIOS，启动电源/重启系统后，在 LOGO 界面（1~2s 内）按下特定的按键进入

!!! tip "进入 BIOS 界面"

    不同的主板/电脑进入 BIOS 的按键和操作方法不尽相同，常见的按键如：++f2++、++f12++、++delete++、++esc++等，建议根据主板品牌/型号查询，如搜索
    "华硕主板如何禁用 Secure Boot 功能"。

---

以华硕主板为例，在 BIOS（Advanced Mode）的 `Security`（安全）或 `Boot` 栏中，设置 `Secure Boot` 选项为
`Disabled` 进行禁用，最后保存更改即可 (1)
{ .annotate }

1. 华硕主板可能还需要更改 `OS Type` 为 `Other OS`

![](../../assets/images/ubuntu/secure-boot.png)

/// caption
华硕主板的 BIOS 界面（旧版本），图片来源于华硕官网
///

---

## 从 U 盘启动引导

!!! info "引导启动"

    安装 Ubuntu 系统需要从引导盘（U 盘）使用 ISO 镜像安装。

=== "在 BIOS/Boot Manager 启动"

    进入 BIOS/Boot Manager，在 **"Boot Manager"** 或 **"启动选项"** 选择相应的 U 盘（USB Device）即可

    ![](../../assets/images/ubuntu/boot-manager.png)

    
    /// caption
    VMware 的 Boot Manager
    ///

=== "使用高级启动（Windows）"

    如果使用 Windows 系统，可以通过 **"设置 → 系统 → 恢复 → 高级启动"** 立刻重新启动，进入高级启动界面

    ![](../../assets/images/ubuntu/advanced-startup-1.png)

    
    /// caption
    系统设置（Windows 11）
    ///

    ---

    进入高级启动后，选择 **"使用设备"** 并选择相应的 U 盘（USB Device）即可

    ![](../../assets/images/ubuntu/advanced-startup-2.png)

    
    /// caption
    高级启动（Windows 11）
    ///

---

## 选择 Ubuntu 镜像文件

!!! info "Ventoy 镜像"

    从 U 盘启动引导后，Ventoy 会自动查找镜像文件，并进入 Ventoy 的镜像选择菜单界面。

在 Ventoy 选择菜单中，选择需要安装的 Ubuntu 镜像文件（`ubuntu-xx.xx.x-desktop-amd64.iso`）

![](../../assets/images/ubuntu/ventoy-1.png)

---

选择镜像后进入二级菜单，选择 **"Boot in normal mode"**（以正常模式启动）

![](../../assets/images/ubuntu/ventoy-2.png)

---

## Ubuntu 安装配置

在 GRUB 启动菜单中，选择 **"Try or Install Ubuntu"**（尝试或安装 Ubuntu），进入 Ubuntu 系统

??? info "GRUB 选项说明"

    - **Try or Install Ubuntu**：进入 Ubuntu 的 Live CD 系统，试用或安装 Ubuntu，可以在不安装系统的情况下直接从启动盘启动，通常用于安装新的操作系统或者修复旧的操作系统。
    - **Ubuntu (safe graphics)**：以安全图形模式启动 Ubuntu 系统，确保系统以兼容性较好的图形模式启动，从而减少可能出现的图形或显卡驱动问题。
    - **OEM install (for manufacturers)**：原始设备制造商（Original Equipment Manufacturer）安装，为计算机制造商和系统集成商设计的，用于在计算机出厂前进行批量预安装操作系统，并为用户准备好定制化的系统设置。
    - **Boot from next volume**：从下一个卷（磁盘分区）引导启动系统，当计算机上有多个操作系统或者多个引导设备时，可以选择该选项来从其他卷或设备中切换系统。
    - **UEFI Firmware Settings**：进入计算机的 UEFI 固件设置界面（即 BIOS），可以对计算机的硬件设置、启动顺序、安全启动等进行调整和配置。

![](../../assets/images/ubuntu/grub-install-ubuntu.png)

---

### 系统语言（Language）

选择系统语言，并点击 **"Next"** 下一步

> 中文（简体）在选项最底部

![](../../assets/images/ubuntu/ubuntu-installation-1.png)

---

### 可访问性（Accessibility）

如无特殊需求，可以点击 **"Next"** 跳过

![](../../assets/images/ubuntu/ubuntu-installation-2.png)

---

### 键盘布局（Keyboard Layout）

选择 `English`（英文）或 `Chinese`（中文）均可，也可以之后再安装其他输入法

![](../../assets/images/ubuntu/ubuntu-installation-3.png)

---

### 网络连接（Internet Connection）

选择一种网络类型，根据网络情况选择是否连接至互联网

!!! tip "联网更新"

    连接网络后会提供额外的更新选项，可以选择在安装过程中获取更新，但可能会导致安装时间大大延长。如果网络较差，建议选择
    `Do not connect to the internet` 暂不连接网络。

![](../../assets/images/ubuntu/ubuntu-installation-4.png)

---

### 安装类型（Type of Installation）

选择 **"Install Ubuntu"** 安装 Ubuntu 系统

![](../../assets/images/ubuntu/ubuntu-installation-5.png)

---

选择 **"Interactive installation"**（交互安装）进行自定义配置安装

??? info "安装方式"

    - **Interactive installation（交互安装）**：即传统的安装方式，在安装过程中，用户需要根据引导逐一选择或输入相关配置信息（如分区、账户、时区等），直到完成所有配置后才会开始安装，适用于普通用户的自定义安装。
    - **Automated installation（自动安装）**：一种无需用户干预、提前配置的高级安装方式，通过网络从指定的 URL
    加载 autoinstall.yaml 配置文件，可以按照设定好安装选项进行自动化安装，适用于高级用户或企业统一批量部署。

    自动安装详见：[Introduction to autoinstall - Ubuntu installation documentation](https://canonical-subiquity.readthedocs-hosted.com/en/latest/intro-to-autoinstall.html)

![](../../assets/images/ubuntu/ubuntu-installation-6.png)

---

### 应用程序（Applications）

根据需要选择预安装的应用，推荐选择 **"Default selection"**（默认集合）进行最小化安装

!!! info "预装集合"

    - **Default selection（默认集合）**：即最小化安装，仅预装一些基本的应用，但依然包括捆绑的软件（如 Snap、FireFox）。
    - **Extended selection（扩展集合）**：附带安装一些常用的办公应用、工具（如
    LibreOffice、Rhythmbox、GNOME Calendar），无需网络连接即可离线安装。

![](../../assets/images/ubuntu/ubuntu-installation-7.png)

---

### 专有软件（Proprietary Software）

选择是否安装推荐的专有软件（如显卡驱动、Wi-Fi 驱动和编解码器等），建议此处**全都不勾选**，后续有需要再自行安装

!!! warning "开源显卡驱动"

    Ubuntu 默认使用开源的显卡驱动（Xorg），如果勾选 `Install third-party software for graphics and Wi-Fi hardware`，将会安装第三方非开源的专有驱动（如
    NVIDIA/AMD 驱动）。另外，勾选后安装的专有驱动可能不是最新版本，如出现问题可以在之后更换。

![](../../assets/images/ubuntu/ubuntu-installation-8.png)

---

### 磁盘与分区（Disk Setup）

根据实际情况选择安装类型和磁盘分区

!!! question "如何选择安装类型"

    - 如果已有 Windows 系统且需要**安装双系统**，可以选择 "Install Ubuntu alongside Windows Boot Manager and Ubuntu 24.04 LTS"，保留
    Windows 相关文件并与 Ubuntu 共存，将会自动进行分区。
    - 如果安装双系统或**自定义分区**，选择 "Manual installation"（手动安装），自定义磁盘分区。
    - 如果**仅使用 Ubuntu**（不存在其他系统），选择 "Erase disk and install Ubuntu"（擦除磁盘并安装 Ubuntu）。

![](../../assets/images/ubuntu/ubuntu-installation-9.png)

---

!!! example "手动分区指南"

    以下步骤为自定义分区，即选择 **"Manual installation"**（手动安装）的情况，如果不需要手动分区可以跳过此步骤。

选择一块磁盘的 **"Free space"**（空闲区）(1)，注意不同磁盘分区的命名差异
{ .annotate }

1. 空闲区，即 Windows 系统的磁盘管理中的 "未分配空间"

!!! info "分区命名"

    - `/dev/sda1`：第1块 ^^**SATA/SCSI/USB 硬盘**^^（`a`）的第1块分区（`1`）
    - `/dev/sdb2`：第2块 ^^**SATA/SCSI/USB 硬盘**^^（`b`）的第2块分区（`2`）
    - `/dev/nvme0n1p1`：第1块 ^^**NVMe 硬盘**^^（`nvme0`）的第1个命名空间（`n1`）的第1块分区（`p1`）
    - `/dev/nvme1n1p2`：第2块 ^^**NVMe 硬盘**^^（`nvme1`）的第1个命名空间（`n1`）的第2块分区（`p2`）
    - ......以此类推

!!! warning "注意正确选择硬盘空闲区"

    如果有两块或两块以上的硬盘，例如想要将 Ubuntu 安装在第二块硬盘，务必选择**第二块硬盘下方的空闲区（`Free space`）**！

![](../../assets/images/ubuntu/ubuntu-installation-10.png)

/// caption
图中，将 Ubuntu 安装在第二块硬盘的第二块分区（`nvme1n1p2`），具体以实际情况为准
///

---

在左下方选择 **"Device for boot loader installation"**（安装引导程序的设备），即 Linux 引导分区 `/boot/efi`
的位置，默认会自动分配分区大小

!!! tip "双系统引导位置"

    如果在此之前已安装有 Windows 系统，可以将引导程序安装在 Windows 系统的引导分区（`/boot/efi`）中，无需新建引导分区。

![](../../assets/images/ubuntu/ubuntu-installation-11.png)

/// caption
图中，将 Ubuntu 安装在第二块硬盘，因此选择在 `nvme1n1` 安装引导程序
///

---

选择 **"Free space"**（空闲区），并点击左下方 **"+"** 按钮，新建根挂载点 `/` 分区

??? info "Linux 目录结构 [^1]"

    在基于 Linux 内核的系统中，所有的目录和文件都置于**根挂载点**下。

    | 常见目录/分区                          | 描述                                                |
    |:---------------------------------------|:----------------------------------------------------|
    | `/boot`（MBR）<br/> `/boot/efi`（GPT） | **引导分区**，存放引导程序文件                      |
    | `swap`                                 | **内存交换分区**，相当于虚拟内存                    |
    | `/`                                    | **根挂载点**，整个文件系统的根目录                  |
    | `/home`                                | **普通用户主目录**，存储普通用户的一般文件          |
    | `/root`                                | **root 用户主目录**，存储 root 用户的数据和脚本文件 |
    | `/bin`                                 | 存储基本命令的二进制文件                            |
    | `/usr`                                 | 存储系统软件，包含用户数据和应用程序                |
    | `/etc`                                 | 存储系统配置文件                                    |
    | `/tmp`                                 | 存储临时文件，通常在重启后自动删除                  |
    | `/var`                                 | 存储变量文件，比如日志或缓存                        |
    | `/dev`                                 | 存储设备文件，通常是硬件设备的接口文件              |

!!! tip "建议仅划分出根挂载点"

    在目前的 Ubuntu 新版本中，引导分区 `/boot/efi` 会自动分配大小，交换分区 `swap` 也已被 Swapfile（交换文件）替代，因此建议**仅划分出根挂载点 `/`** 即可。

![](../../assets/images/ubuntu/ubuntu-installation-12.png)

---

分区完成后如下图所示，选择 **"install new"**（立刻安装），后续将会对所分区进行划分和格式化

![](../../assets/images/ubuntu/ubuntu-installation-13.png)

/// caption
图中，仅划分出必要的引导分区（`/boot/efi`）和根挂载点（`/`）
///

---

### 设置账户（Account）

设置昵称、主机名、用户名（必须小写）和密码，其中用户名和主机名不宜过长

??? info annotate "Use Active Directory（使用活动目录）[^2]"

    Active Directory（AD）是用于在网络环境中为企业和组织提供存储和组织网络资源和用户信息的组策略服务，以及统一身份验证和访问控制的能力；在安装
    Ubuntu 时，可以选择使用 AD 对 Ubuntu 进行用户身份验证和集中式管理。

!!! tip "远程控制无需登录"

    如果该电脑/系统常被用于远程操控，可以取消勾选 `Require my password to log in`（登录时需要密码），以便每次重启后无需登录直接进入桌面。

![](../../assets/images/ubuntu/ubuntu-installation-14.png)

---

### 选择时区（Timezone）

点击中国版图的任意区域，设置为 `Asia/Shanghai` 时区（北京时间，UTC/GMT+08:00）

!!! tip "自动选择镜像站"

    在此处选择时区和位置后，如果先前连接了网络，将会自动将 APT 软件源更换至选定位置附近的镜像源，例如
    `Asia/Shanghai`（上海）时区可能会选择 "清华大学镜像站"（tsinghua）。

![](../../assets/images/ubuntu/ubuntu-installation-15.png)

---

### 确认安装（Install）

确认并核对安装选项和信息，点击 **"Install"** 执行安装

!!! danger "务必确认硬盘分区！"

    务必再三确认磁盘分区是否正确，一旦开始安装将进行磁盘格式化，重要数据务必提前备份！

![](../../assets/images/ubuntu/ubuntu-installation-16.png)

---

等待安装完成，可能需要十分钟左右，点击右下方的 **"终端"** 图标可以查看安装详情

> 如果先前已连接网络并勾选了安装专有软件，可能需要额外的安装和更新时间

![](../../assets/images/ubuntu/ubuntu-installation-17.png)

![](../../assets/images/ubuntu/ubuntu-installation-18.png)

---

### 重启系统（Restart）

安装完成后，选择重启系统（Restart now）

![](../../assets/images/ubuntu/ubuntu-installation-19.png)

---

重启时需要将启动 U 盘拔出，并按下 ++enter++ 键。

![](../../assets/images/ubuntu/ubuntu-installation-20.png)

---

启动后进入 GNU GRUB 系统，选择启动引导（Boot）项，或是在等待 10s 后自动选择第一启动项

> 其中 `Windows Boot Manager` 为 Windows 启动管理器，用于启动 Windows 系统

![](../../assets/images/ubuntu/ubuntu-installation-21.png)

[^1]: [文件系统层次结构标准 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84%E6%A0%87%E5%87%86)
[^2]: [Active Directory GPO client documentation](https://documentation.ubuntu.com/adsys/en/stable/)
