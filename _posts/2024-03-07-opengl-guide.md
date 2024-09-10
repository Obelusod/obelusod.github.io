---
title: 【OpenGL】安装与配置指南（Visual Studio）
author: Obelus
data: 2024-03-07 18:10:00 +0800
categories: [指南, OpenGL]
tags: [OpenGL, GLEW, freeglut, Visual Studio, 计算机图形学]
media_subpath: /assets/img/post/opengl-guide/
image: opengl-logo.png
expand_toc: true
---

## 安装 GLEW 与 freeglut

### 下载 GLEW（OpenGL 扩展库）

{% box info "GLEW（OpenGL Extension Wrangler Library）" %}
**GLEW** 是一个开源的、跨平台的 C/C++ 库，用于管理 OpenGL 的扩展。在实际的 OpenGL 开发中，有许多功能是由扩展提供的，而 GLEW 可以帮助我们轻松地管理这些扩展。它提供了一组简洁的接口，方便我们查询、加载和管理 OpenGL 的扩展，使得在不同平台上编写 OpenGL 代码变得更加简单和统一。
{% endbox %}

{:start="1"}
1. [访问 GLEW 官网](https://www.opengl.org)，在 **"Downloads"** 标题下，点击 **`Windows 32-bit and 64-bit`** 下载适用于 Windows 平台的二进制文件（Binaries）

> 二进制文件包含了从源文件（Source）编译的适用于特定平台的可执行文件、头文件、静态/动态库文件等

![](glew-homepage.png){: .shadow }

---

{: start="2" }
1. 将下载的二进制文件压缩包解压至任意路径，例如：`C:\Library`

> 库路径不建议包含任何特殊字符（如中文）和空格

![](glew-folder.png){: .shadow }

---

{% box info "GLEW 动态库（Windows 平台）的文件目录结构" %}
- **bin**：存放可执行文件
  - **Release**：发行版本
    - **Win32**：32 位版本的可执行文件
      - `glew32.dll`：32 位的动态链接库
      - `glewinfo.exe`：用于显示 OpenGL 扩展信息的可执行文件
      - `visualinfo.exe`：用于显示 OpenGL 可视化信息的可执行文件
    - **x64**：64 位版本的可执行文件
      - `glew32.dll`：64 位的动态链接库
      - `glewinfo.exe`：用于显示 OpenGL 扩展信息的可执行文件
      - `visualinfo.exe`：用于显示 OpenGL 可视化信息的可执行文件
- **doc**：存放文档文件
  - `*.html`：各种 HTML 文件，包括文档、安装说明等
  - `*.txt`：各种文本文件，包括许可证、版权等
  - `*.png`：各种图片文件
- **include**：存放头文件
  - **GL**：OpenGL 相关的头文件
    - `eglew.h`：EGL 扩展的头文件
    - `glew.h`：GLEW 核心头文件
    - `glxew.h`：GLX 扩展的头文件
    - `wglew.h`：WGL 扩展的头文件
- **lib**：存放库文件
  - **Release**：发行版本
    - **Win32**：32 位版本的导入库文件（动态链接）
      - `glew32.lib`： 32 位的导入库
      - `glew32s.lib`：32 位的导入库（多线程版本）
    - **x64**：64 位版本的导入库文件（动态链接）
      - `glew32.lib`：64 位的导入库
      - `glew32s.lib`：64 位的导入库（多线程版本）
- `LICENSE.txt`：许可证文件
{% endbox %}

![](glew-files.png){: .shadow }

---

### 下载 freeglut（OpenGL 工具包）

{% box info "freeglut（Free OpenGL Utility Toolkit）" %}
**freeglut** 是一个用于创建和管理 OpenGL 窗口的工具库，它是原始 GLUT（OpenGL Utility Toolkit）的一个免费的开源替代品，提供了更多的功能和跨平台支持。通过使用 freeglut，我们可以更轻松地创建窗口、处理输入事件、管理窗口的位置和大小等操作。
{% endbox %}

{: start="1" }
1. [访问 freeglut 官网](https://freeglut.sourceforge.net)，在 **"Pre-Compiled Packages"** 栏下，点击 **`Martin Payne's Windows binaries (MSVC and MinGW)`** 访问 Martin Payne 的网站（freeglut Windows Development Libraries）

![](freeglut-homepage.png){: .shadow }

---

{: start="2" }
1. 在网站的 **"freeglut 3.0.0 MSVC Package"** 栏下，点击 **`Download freeglut 3.0.0 for MSVC`** 下载适用于 Microsoft Visual C++（MSVC）的二进制文件

> 在此网站下载的 freeglut 版本可能较旧，如需使用新版本可在官网下载源文件自行编译

![](freeglut-devel-page.png){: .shadow }

---

{:start="3"}
1. 将下载的二进制文件压缩包解压至任意路径，例如：`C:\Library`

![](freeglut-folder.png){: .shadow }

---

{% box info "freeglut 动态库（Windows 平台）的文件目录结构" %}
- **bin**：存放可执行文件
  - **x64**：64 位版本的动态链接库文件
    - `freeglut.dll`：64 位的动态链接库
  - `freeglut.dll`：32 位的动态链接库
- **include**：存放头文件
  - **GL**：OpenGL 相关的头文件
    - `freeglut.h`：freeglut 的核心头文件
    - `freeglut_ext.h`：扩展功能的头文件
    - `freeglut_std.h`：标准接口的头文件
    - `glut.h`：OpenGL 辅助库的头文件
- **lib**：存放库文件
  - **x64**：64 位版本的导入库文件（动态链接）
    - `freeglut.lib`：64 位的导入库文件
  - `freeglut.lib`：32 位的导入库文件
- `Copying.txt`：版权和许可证信息
- `Readme.txt`：关于 freeglut 的简要说明和使用方法
{% endbox %}

![](freeglut-files.png){: .shadow }

---

## Visual Studio 环境配置

### 创建 OpenGL 项目 [可选]

#### 新建解决方案

{% box info "解决方案（Solution）" %}
**解决方案**是指在 Visual Studio 中进行软件开发时的顶层容器。一个解决方案可以包含多个项目，用于组织和管理不同的代码模块。解决方案文件的扩展名为 `.sln`。
{% endbox %}

{:start="1"}
1. 打开 Visual Studio，点击主页右侧的 **"创建新项目"**

> 在 Visual Studio 开始页面的 "创建新项目" 实质上会同时新建一个解决方案，该项目位于此解决方案下

![](new-solution-1.png){: .shadow }

---

{:start="2"}
1. 选择 **"C++ > Windows > 控制台"** 中的**`控制台应用`**项目模板（也可以选择**`空项目`**模板）

> `控制台应用`相比`空项目`，区别在于前者包含一个 "Hello World" 示例文件

![](new-solution-2.png){: .shadow }

---

{:start="3"}
1. 为项目命名（例如 "OpenGL"）并选择项目路径（默认即可），点击创建项目

![](new-solution-3.png){: .shadow }

---

{:start="4"}
1. 解决方案（项目）创建完成，可以在同一个解决方案下添加新建/现有项目

![](new-solution-4.png){: .shadow }

---

#### 添加新建项目

{% box info "新建项目" %}
在一个现有的解决方案中可以添加或新建多个项目，这些项目之间可以相互调用，共享资源，实现整个软件系统的开发和管理。项目文件的扩展名根据项目类型不同而有所不同，比如 C++ 项目的文件扩展名是 `.vcxproj`，而 C# 项目的文件扩展名是 `.csproj`。
{% endbox %}

{:start="1"}
1. 打开已有的解决方案（项目），在界面左上角选择 **"文件 > 新建 > 项目"**

![](new-project-1.png){: .shadow }

---

{:start="2"}
1. 在创建新项目界面选择项目模板新建项目即可，新建的项目将共享解决方案全局的配置

![](new-project-2.png){: .shadow }

---

### 配置 GLEW 和 freeglut 环境

{% box info "环境配置" %}
为了确保 Visual Studio 编译器能够正确找到和链接 GLEW 和 freeglut 库（动态库）的头文件和库文件，并使编写的程序能够正确运行，需要分别设置（附加）包含目录、（附加）库目录、（附加）依赖项和系统环境变量。
- **包含目录**：用于指定编译器在编译过程中搜索头文件（.h）时的额外搜索路径，以确保编译时就能正确引用这些库的函数和数据结构。
- **库目录**：用于指定链接器在链接过程中搜索库文件（.lib）时的额外搜索路径，以确保链接时就能正确找到并链接这些库。
- **依赖项**：用于指定链接器在链接过程中需要链接的额外库文件名称，以确保在链接时能够正确地链接所需的库文件。
- **系统环境变量**：用于在操作系统层面（所有解决方案/项目均共享）使程序执行时能够正确地找到所需的动态链接库文件（.dll），以确保程序能够正常运行。
{% endbox %}

{% box warning "两种环境配置方式" %}
以下提供两种环境配置方式，二者选其一即可：
- **项目级环境配置（单项目）**
- **项目属性表配置（跨项目）**

注意：两种配置方法都需要**设置系统环境变量**！
{% endbox %}

{% box danger "务必检查环境配置" %}
如果在编译或运行程序时提示报错（如代码标红线、链接错误、无法解析符号或找不到 .dll 文件等），请检查环境配置的**所有目录项**和**系统环境变量**是否已正确设置！（也可能之前设置的未能保存）
{% endbox %}

---

#### 项目级环境配置（单项目）

{% box info "项目级环境配置" %}
项目级环境配置是指仅将环境配置应用于单个项目，不同项目间不共享，如果新建项目需要重新配置。
{% endbox %}

{:start="1"}
1. 在 **"解决方案资源管理器"** 栏中，右键单击项目名称，并选择 **"属性"** 打开项目属性页

> 注意：打开项目的属性页，而非 `.cpp` 文件的属性页

![](property-open.png){: .shadow }

---

{% box tip "配置与平台" %}
在修改项目属性之前，注意当前选择的所应用的**`配置`**和**`平台`**，建议设置为：
- `配置`：**所有配置**
- `平台`：**x64**
{% endbox %}

{% box warning "区分 64 位和 32 位平台" %}
此处选择的平台，需要与之后选择的不同位数（Win32/x64）程序的库目录（.lib）相对应！
{% endbox %}

![](property-page.png){: .shadow }

---

##### **设置附加包含目录（.h）**

{:start="1"}
1. 在项目属性页 **"配置属性 > C/C++ > 常规"** 中的**`附加包含目录`**右侧选择编辑

> 注意：`C/C++` 选项仅在有 C/C++ 源文件（.c/.cpp）时才能设置，如果没有此选项可以尝试新建源文件

![](additional-include-directories-1.png){: .shadow }

---

{:start="2"}
1. 点击 **"新行"** 图标，新建目录属性并将值设为 GLEW 和 freeglut 的 **`include`** 目录

![](additional-include-directories-2.png){: .shadow }

---

{:start="3"}
1. 设置完成后，如图所示

![](additional-include-directories-3.png){: .shadow }

---

##### **设置附加库目录（.lib）**

{:start="1"}
1. 在项目属性页 **"配置属性 > 链接器 > 常规"** 中的**`附加库目录`**右侧选择编辑

![](additional-library-directories-1.png){: .shadow }

---

{:start="2"}
1. 点击 **"新行"** 图标，新建目录属性并将值设为 GLEW 和 freeglut 的 **`lib`** 目录（区分 32/64 位程序）

{% box info "64 位与 32 位的 lib 目录" %}
对于 **64 位程序（x64）**，**`lib`** 目录设置为：
- `...\glew\lib\Release\x64`
- `...\freeglut\lib\x64`

对于 **32 位程序（Win32）**，**`lib`** 目录设置为：
- `...\glew\lib\Release\Win32`
- `...\freeglut\lib`
{% endbox %}

![](additional-library-directories-2.png){: .shadow }

---

{:start="3"}
1. 设置完成后，如图所示（以 64 位程序为例）

![](additional-library-directories-3.png){: .shadow }
_图中，以 64 位程序为例_

---

##### **设置附加依赖项 [可选]**

{% box tip "此步骤可跳过" %}
这一步骤并不是必要的，编译器会自动查找所需依赖项，可以跳过此设置
{% endbox %}

{:start="1"}
1. 在项目属性页 **"配置属性 > 链接器 > 输入"** 中的**`附加依赖项`**右侧选择编辑

![](additional-dependencies-1.png){: .shadow }

---

{:start="2"}
1. 在其中写入 GLEW 和 freeglut 的动态库文件名称：**`glew32.lib`**、**`freeglut.lib`**，如图所示

{% box danger "注意拼写" %}
如果动态库文件名称拼写有误（如将 freeglut 错写为 freelut ），编译器将报错无法找到 `.lib` 文件
{% endbox %}

![](additional-dependencies-2.png){: .shadow }

---

#### 项目属性表配置（跨项目）

{% box info "共享式项目配置" %}
共享式项目配置是指将环境配置保存至新建属性表文件（.props），使用公共属性表可以在不同解决方案和项目间实现配置共享或重用，甚至在不同设备之间分享。

参考官方文档：[共享或重用 Visual Studio 项目设置](https://learn.microsoft.com/zh-cn/cpp/build/create-reusable-property-configurations?view=msvc-170)
{% endbox %}

---

##### **创建项目属性表**

{:start="1"}
1. 打开已有的解决方案（项目），在界面左上角选择 **"视图 > 属性管理器"**

![](new-property-sheet-1.png){: .shadow }

---

{:start="2"}
1. 在属性管理器页面左上角，点击 **"新建属性表"** 图标，打开添加新项界面

![](new-property-sheet-2.png){: .shadow }

---

{:start="3"}
1. 在添加新项界面选择 **"属性表(.props)"**，并设置属性表名称和保存位置

> 建议将属性表保存至专门用于 OpenGL 项目的文件夹，或是放置桌面备用

![](new-property-sheet-3.png){: .shadow }

---

{:start="4"}
1. 打开属性管理器中的任意配置文件夹，右键单击刚刚创建的属性表，并选择 **"属性"** 打开属性页

![](new-property-sheet-4.png){: .shadow }

---

##### **设置包含目录（.h）**

1. 在项目属性页 **"配置属性 > VC++ 目录"** 中的**`包含目录`**右侧选择编辑

![](include-directories-1.png){: .shadow }

---

{:start="2"}
1. 点击 **"新行"** 图标，新建目录属性并将值设为 GLEW 和 freeglut 的 **`include`** 目录

![](include-directories-2.png){: .shadow }

---

{:start="3"}
1. 设置完成后，如图所示

![](include-directories-3.png){: .shadow }

---

##### **设置库目录（.lib）**

{:start="1"}
1. 在项目属性页 **"配置属性 > VC++ 目录"** 中的**`库目录`**右侧选择编辑

![](library-directories-1.png){: .shadow }

---

{:start="2"}
1. 点击 **"新行"** 图标，新建目录属性并将值设为 GLEW 和 freeglut 的 **`lib`** 目录（区分 32/64 位程序）

{% box info "64 位与 32 位的 lib 目录" %}
对于 **64 位程序（x64）**，**`lib`** 目录设置为：
- `...\glew\lib\Release\x64`
- `...\freeglut\lib\x64`

对于 **32 位程序（Win32）**，**`lib`** 目录设置为：
- `...\glew\lib\Release\Win32`
- `...\freeglut\lib`
{% endbox %}

![](library-directories-2.png){: .shadow }

---

{:start="3"}
1. 设置完成后，如图所示（以 64 位程序为例）

![](library-directories-3.png){: .shadow }
_图中，以 64 位程序为例_

---

##### **设置附加依赖项 [可选]**

{% box tip "此步骤可跳过" %}
这一步骤并不是必要的，编译器会自动查找所需依赖项，可以跳过此设置
{% endbox %}

{:start="1"}
1. 在项目属性页 **"配置属性 > 链接器 > 输入"** 中的**`附加依赖项`**右侧选择编辑

![](additional-dependencies-1.png){: .shadow }

---

{:start="2"}
1. 在其中写入 GLEW 和 freeglut 的动态库文件名称：**`glew32.lib`**、**`freeglut.lib`**，如图所示

{% box danger "注意拼写" %}
如果动态库文件名称拼写有误（如将 freeglut 错写为 freelut ），编译器将报错无法找到 `.lib` 文件
{% endbox %}

![](additional-dependencies-2.png){: .shadow }

---

{% box danger "务必保存" %}
属性表配置完成后，务必点击 **"保存"** 选项进行保存！
{% endbox %}

![](save-property-sheet.png){: .shadow }

---

##### **添加项目属性表 [可选]**

{:start="1"}
1. 打开另一个解决方案的属性管理器页面，点击 **"添加属性表"** 图标

![](add-property-sheet-1.png){: .shadow }

---

{:start="2"}
1. 选择之前已经创建好的项目属性表，打开导入即可

![](add-property-sheet-2.png){: .shadow }

---

{:start="3"}
1. 导入后，在四种配置项中都会添加该属性表

{% box danger "区分 64 位和 32 位配置" %}
四种配置项都会应用该属性表的配置，意味着如果该属性表的导入库文件（.lib）设置为 64 位程序专用，那么在将项目的当前配置切换至构建 x86（32位）程序后，将无法进行编译，需要手动修改！
{% endbox %}

![](add-property-sheet-3.png){: .shadow }

---

#### 设置系统环境变量（.dll）

{% box info "系统环境变量" %}
环境变量是一种存储操作系统和应用程序所需配置信息的机制，这些信息通常以键值对的形式存在。其中，`PATH` 变量定义了系统在哪些目录中寻找依赖库（.dll）、可执行文件（.exe）和其他资源，当试图运行一个程序而未提供完整路径时，系统能够根据 `PATH` 环境变量中列出的目录顺序查找并运行该程序。
{% endbox %}

{:start="1"}
1. 在 Windows 搜索栏搜索 **"环境变量"**，并点击 **"编辑系统环境变量"**，打开系统环境变量配置

![](system-environment-variables-1.png){: .shadow }

---

{:start="2"}
1. 在 **"系统属性 > 高级"** 页面下点击 **"环境变量"**，并双击打开在 **"环境变量 > 系统变量"** 下的 **"Path"** 变量

<table>
<tr>
  <td><img src="system-environment-variables-2.png" style="height:420px" alt="config variables 1"></td>
  <td><img src="system-environment-variables-3.png" style="height:420px" alt="config variables 2"></td>
</tr>
</table>

---

{:start="3"}
1. 在右上方点击 **"新建"** 变量并将值设为 GLEW 和 freeglut 的 **`bin`** 目录（区分 32/64 位程序）

{% box info "64 位与 32 位的 bin 目录" %}
对于 **64 位程序（x64）**，**`bin`** 目录设置为：
- `...\glew\bin\Release\x64`
- `...\freeglut\bin\x64`

对于 **32 位程序（Win32）**，**`bin`** 目录设置为：
- `...\glew\bin\Release\Win32`
- `...\freeglut\bin`
{% endbox %}

{% box danger "保存并重启 Visual Studio" %}
设置系统环境变量后，需要**完全关闭并重启 Visual Studio** 才能生效，重启前务必**全部保存**项目更改！
{% endbox %}

![](system-environment-variables-4.png){: .shadow }
_图中，以 64 位程序为例_

---

## OpenGL 绘图示例

{% box danger "务必检查环境配置" %}
如果在编译或运行程序时提示报错（如代码标红线、链接错误、无法解析符号或找不到 .dll 文件等），请检查环境配置的**所有目录项**和**系统环境变量**是否已正确设置！（也可能之前设置的未能保存）
{% endbox %}

```c++
#include <gl/glut.h>
#include <cmath>

const int n = 20;
const GLfloat R = 0.5f;
const GLfloat Pi = 3.1415926536f;

void myDisplay(void)
{
    int i;
    glClear(GL_COLOR_BUFFER_BIT);
    glBegin(GL_POLYGON);
    for (i = 0; i < n; i++)
    {
        glVertex2f(R * cos(2 * Pi / n * i), R * sin(2 * Pi / n * i));
    }
    glEnd();
    glFlush();
}

int main(int argc, char *argv[])
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_RGB | GLUT_SINGLE);
    glutInitWindowPosition(100, 100);
    glutInitWindowSize(400, 400);
    glutCreateWindow("第一个 OpenGL 程序");
    glutDisplayFunc(&myDisplay);
    glutMainLoop();

    return 0;
}
```

![](opengl-demo.png){: .shadow }
