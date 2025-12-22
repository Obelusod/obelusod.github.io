---
title: 故障排除
---

## 安装问题

### Check Requirements：Microsoft Visual C++ 2019 Redistributable Package

![](../../assets/images/mysql/issues-1.png)

!!! bug "错误原因"

    在 Windows 平台上，缺少 **Microsoft C 和 C++（MSVS）运行时库**（MySQL Server 需要依赖此库）导致无法运行
    MySQL Server，因此提示要求安装此依赖

???+ success "解决方法：安装 VC++ 运行库"

    访问 [Visual C++ Redistributable | Microsoft Learn](https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist)
    官网，在 **"支持的最新可再发行版本"** 下选择对应版本（`X64`）并下载安装即可

    ![](../../assets/images/mysql/issues-2.png)

---

### .\鎴戠殑鐢佃剳...?bin.index not found (OS errno 2 - No such file or directory)

<div class="grid" markdown>

![](../../assets/images/mysql/issues-3.png)

![](../../assets/images/mysql/issues-4.png)

</div>

!!! bug "错误原因"

    计算机名或用户名为特殊字符（如**中文**），系统文本的编码和解码格式不统一；导致 MySQL Server 的某些数据文件（如
    `..?bin.index` 文件）自动命名为带有特殊字符，MySQL Server 在初始化配置时无法识别（找不到）这些文件

??? success "解决方法一：修改计算机名"

    !!! warning ""

        **本方法只能解决由计算机名存在特殊字符导致的问题，但如果是用户名存在特殊字符请尝试方法二**

    打开系统设置，在 **"主页"** 页面上方点击**重命名**，将设备名称改为 ASCII 字符（如英文、数字），并**重启电脑**
    
    ![](../../assets/images/mysql/issues-5.png)

    重启电脑后，先使用 MySQL Installer 将 MySQL Server **卸载**（Remove），之后再重新安装一遍即可

    ![](../../assets/images/mysql/issues-6.png)

??? success "解决方法二：手动修改配置文件"

    打开 MySQL Server 的数据目录（根据 Log 中的提示），如 `C:\ProgramData\MySQL\MySQL Server 8.0`

    !!! tip  ""

        其中 `ProgramData` 文件夹需要启用 **"显示隐藏的项目"** 才能显现；或者也可以直接复制 Log
        中的路径，并粘贴至资源管理器上方的地址栏并按下回车即可快捷访问

    ![](../../assets/images/mysql/issues-7.png)

    右键单击 **"my.ini"** 文件，选择 **"属性"** 选项，打开文件属性设置

    ![](../../assets/images/mysql/issues-8.png)

    在上方选择 **"安全"** 选项，并点击其中的 **"编辑..."** 按钮；在权限页面选择 **"Users"**，并勾选下方权限中
    **"完全控制"** 右侧的 **"允许"** 选项，应用并确定

    <div class="grid" markdown>

    ![](../../assets/images/mysql/issues-9.png)
    
    ![](../../assets/images/mysql/issues-10.png)
    
    </div>

    再次右键单击 **"my.ini"** 文件，选择打开方式用 "记事本" 打开

    ![](../../assets/images/mysql/issues-11.png)

    在文本 125~135 行附近（共 4 处），将中文乱码全部更改为 ASCII 字符（如英文、数字），或者全部删掉

    !!! example "分别需要修改以下四项"

        - `general_log_file`
        - `slow_query_log_file`
        - `log-error`
        - `log-bin`

    ![](../../assets/images/mysql/issues-12.png)

    ![](../../assets/images/mysql/issues-13.png)

    修改完成后，在记事本左上方点击 **"文件"** 选项，并选择 **"另存为"**

    ![](../../assets/images/mysql/issues-14.png)

    将文件名更改为：`my.ini`，将保存类型更改为：`所有文件`，并点击保存按钮

    ![](../../assets/images/mysql/issues-15.png)

    点击保存后会提示是否替换文件，点击 **"是"** 将原始文件覆盖掉

    ![](../../assets/images/mysql/issues-16.png)

    打开 MySQL Server 的安装路径中的 `bin` 目录（根据 Log 中的提示），如 `C:\Program Files\MySQL\MySQL Server 8.0\bin`

    ![](../../assets/images/mysql/issues-17.png)

    在此目录的右侧空白处右键单击，选择 **"在终端中打开"**，打开终端窗口

    ![](../../assets/images/mysql/issues-18.png)

    在终端窗口中输入以下命令（仅适用于数据目录位为 C 盘），并回车执行

    !!! example ""

        如果 MySQL Server 数据（`my.ini`）存放在其他盘符，需要修改其中 `--defaults-file` 的路径

    ``` pwsh-session
    > .\mysqld --defaults-file="C:\ProgramData\MySQL\MySQL Server 8.0\my.ini" --console --initialize-insecure=on --lower-case-table-names=1
    ```

    ![](../../assets/images/mysql/issues-19.png)

    如果执行后提示类似于如下信息，则说明重新初始化成功，此时可以尝试重新执行 MySQL Server 安装

    ![](../../assets/images/mysql/issues-20.png)

---

### 路径中具有非法字符

![](../../assets/images/mysql/issues-21.png)

!!! bug "错误原因"

    **TODO**

???+ success "解决方法"

    **TODO**

---

### 只有在任务处于完成状态(RanToCompletion、Faulted 或 Canceled)时才能释放它

![](../../assets/images/mysql/issues-22.png)

!!! bug "错误原因"

    **TODO**

???+ success "解决方法"

    **TODO**
