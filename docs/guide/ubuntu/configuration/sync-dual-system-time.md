---
title: 同步双系统时间
---

!!! note "Windows 和 Ubuntu 系统时间不同步"

    由于 Windows 和 Ubuntu 的时钟同步机制不同，导致安装 Ubuntu 后，再切换至 Windows
    系统，时间会显示慢了 8 个小时（CST），导致两者的系统时间不同步。

    <div class="grid cards" markdown>
    
    -   **Windows 时钟同步原理**

        - Windows 使用本地时钟（Local Time）
        - 时间同步过程：从 CMOS（BIOS）中获取时间 →  **视为本地时间** →  联网后同步时间  →  显示本地时间 →  写入 CMOS（BIOS）
    
    -   **Ubuntu 时钟同步原理（CST）**

        - Ubuntu 使用协调世界时（UTC/GMT）
        - 时间同步过程：从 CMOS（BIOS）中获取时间 →  **视为 UTC 时间**  →  联网后同步时间 →  显示 UTC+8 时间 →  写入 CMOS（BIOS）
    
    </div>

    !!! tip ""

        使用 `timedatectl status` 命令，可以查看系统时间状态

!!! example "两种时钟配置方式"

    基于 Windows 和 Ubuntu 两种不同的时钟机制，同步双系统时间也有两种不同的解决方法，选择其中一种即可：

    - **将 Ubuntu 时钟设置为本地时钟**
    - **将 Windows 时钟设置为 UTC 时钟**

=== "将 Ubuntu 时钟设置为本地时钟"
    将 RTC 硬件时钟视为本地时间，同时进行校准
    
    ``` console
    $ sudo timedatectl set-local-rtc 1 --adjust-system-clock
    ```

    ---

    可以执行下列命令验证状态，如果显示 `RTC in local TZ: yes` 则说明设置成功

    ``` console
    $ timedatectl status
    ```

    ???+ question "提示 RTC 时间警告"

        执行命令后可能会出现警告（翻译如下）：
        
        `系统当前被配置为使用本地时区来读取 RTC 时间。这种模式无法得到完全支持。它会在时区变更和夏令时调整时引发各种问题。在此模式下，RTC
        时间不会被自动更新，它依赖外部工具来维护。如果可能，请通过执行命令 'timedatectl set-local-rtc 0' 来使用 UTC 模式的 RTC。`
    
        由于中国时区（CST）没有夏令时，通常也不会更改时区，因此可以忽略此警告，RTC 时间由 Windows 系统维护。

=== "将 Windows 时钟设置为 UTC 时钟"

    !!! warning "如果日常主要使用 Windows 系统，不建议使用此方法，避免潜在的系统和软件兼容性问题"

    在 Windows 系统中，按下 ++win+r++ 启动运行，输入 `regedit`，打开注册表编辑器
    
    ![](../../../assets/images/ubuntu/run-regedit.png)
    
    ---
    
    将地址定位至 `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneInformation` (1)
    { .annotate }
    
    1. 可以在地址栏中输入并回车跳转
    
    ![](../../../assets/images/ubuntu/regedit-timezone-1.png)
    
    ---
    
    右键单击右侧的空白区域，选择 **"新建 > DWORD (32位)值"**，命名为 `RealTimeIsUniversal`
    
    ![](../../../assets/images/ubuntu/regedit-timezone-2.png)
    
    ---
    
    将该项的 **"数值数据"** 设置为 `1`，重启后生效
    
    ![](../../../assets/images/ubuntu/regedit-timezone-3.png)
