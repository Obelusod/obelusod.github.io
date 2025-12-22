---
title: PyTorch
---

{%
    include-markdown "share/cuda.md"
    start="<!-- cuda-driver-compatibility-start -->"
    end="<!-- cuda-driver-compatibility-end -->"
%}

---

## 安装 PyTorch [^1]

!!! info "区分 CPU 与 GPU 版本"

    PyTorch 提供了 CPU 版和 GPU 版，其中 GPU 分别支持 CUDA（NVIDIA）和 ROCm（AMD），为了充分发挥 PyTorch
    的并行加速优势，并处理大规模数据和复杂模型，通常推荐安装 GPU 版本。本篇主要以 CUDA 版本为例。

???+ warning "如何正确安装 CUDA 版本"

    对于 PyTorch CUDA，需要 NVIDIA 显卡驱动、CUDA 和 cuDNN 库的支持，并且根据每个 PyTorch
    版本兼容性的不同，通常需要适配特定版本的依赖，因此**强烈推荐使用 Python 虚拟环境（如 Anaconda）和包管理器进行安装，避免环境冲突或混乱**。
    
    如果使用包管理器直接安装 PyTorch 而不指定版本（如 `pip install pytorch`），将会默认安装最新的 PyTorch
    版本及较新的 CUDA 和 cuDNN 版本，往往容易遇到兼容性问题（如版本不匹配/无法找到 CUDA
    设备），**务必根据官方提供的各个版本的完整安装命令（指定版本号）进行安装！**

    !!! danger ""

        在虚拟环境下，使用包管理器（`conda` 或 `pip`）安装 PyTorch 时，会自动安装所依赖版本的 CUDA 和
        cuDNN（作为 Python 软件包，如 `nvidia-cuda-runtime`），并与系统环境变量定义的 CUDA 和 cuDNN 版本相隔离，PyTorch
        会优先调用虚拟环境中的 CUDA 和 cuDNN。

        **即只要在虚拟环境中正确安装 PyTorch，无论系统中是否安装过任何版本的 CUDA 和 cuDNN，都不会造成兼容性问题。**

???+ example "PyTorch 安装命令（CUDA）"

    以下仅列出部分较新的主要版本的 PyTorch 安装命令，其他所有版本请参阅：[PyTorch](https://pytorch.org)
    和 [Previous PyTorch Versions | PyTorch](https://pytorch.org/get-started/previous-versions/)

    !!! warning ""

        如果要更换原有的 PyTorch 版本，务必[完全卸载 PyTorch](#卸载-pytorch) 后，再使用命令安装新版本！

    ??? note annotate "官方频道不再提供 Conda 包"
    
        出于维护成本与用户使用情况考虑，从 PyTorch 2.6 版本开始，官方 Anaconda 频道（`-c pytorch`）不再提供
        Conda 包。作为替代方案，可以考虑迁移至由社区维护的 `conda-forge` 频道 (1)，或使用 Pip 安装 PyTorch。

        详见：[[Announcement] Deprecating PyTorch’s official Anaconda channel](https://github.com/pytorch/pytorch/issues/138506)

    1. 参考：[Transitioning from defaults | conda-forge | community-driven packaging for conda](https://conda-forge.org/docs/user/transitioning_from_defaults/)

    ??? tip "从国内镜像源下载（Pip）"

        `pip` 安装命令使用 `--index-url` 选项来区分不同 CUDA 版本的 PyTorch，默认参数指定从官方源获取，如果下载失败或速度较慢可以更换为国内镜像源。

        > 将 `--index-url` 参数中的 `https://download.pytorch.org/whl` 替换为镜像源，版本路径（如 `/cu118`）不变
    
        |  推荐镜像站                | PyTorch 镜像源（Wheel）                       |
        |:--------------------------:|-----------------------------------------------|
        | 南京大学镜像站（nju）      | `https://mirrors.nju.edu.cn/pytorch/whl`      |
        | 阿里云镜像站（aliyun）     | `https://mirrors.aliyun.com/pytorch-wheels`   |

    ???+ quote "PyTorch v2.9.1 | CUDA 12.6, 12.8, 13.0 | Python 3.10 - 3.14"
    
        === "CUDA 12.6"

            ``` console
            $ pip install torch==2.9.1 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126
            ```

        === "CUDA 12.8"

            ``` console
            $ pip install torch==2.9.1 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu128
            ```

        === "CUDA 13.0"

            ``` console
            $ pip install torch==2.9.1 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu130
            ```

    ??? quote "PyTorch v2.8.0 | CUDA 12.6, 12.8, 12.9 | Python 3.9 - 3.13"
    
        === "CUDA 12.6"

            ``` console
            $ pip install torch==2.8.0 torchvision==0.23.0 torchaudio==2.8.0 --index-url https://download.pytorch.org/whl/cu126
            ```

        === "CUDA 12.8"

            ``` console
            $ pip install torch==2.8.0 torchvision==0.23.0 torchaudio==2.8.0 --index-url https://download.pytorch.org/whl/cu128
            ```

        === "CUDA 12.9"

            ``` console
            $ pip install torch==2.8.0 torchvision==0.23.0 torchaudio==2.8.0 --index-url https://download.pytorch.org/whl/cu129
            ```

    ??? quote "PyTorch v2.7.1 | CUDA 11.8, 12.6, 12.8 | Python 3.9 - 3.13"
    
        === "CUDA 11.8"

            ``` console
            $ pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu118
            ```

        === "CUDA 12.6"

            ``` console
            $ pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu126
            ```

        === "CUDA 12.8"

            ``` console
            $ pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128
            ```

    ??? quote "PyTorch v2.6.0 | CUDA 11.8, 12.4, 12.6 | Python 3.9 - 3.13"
    
        === "CUDA 11.8"

            ``` console
            $ pip install torch==2.6.0 torchvision==0.21.0 torchaudio==2.6.0 --index-url https://download.pytorch.org/whl/cu118
            ```

        === "CUDA 12.4"

            ``` console
            $ pip install torch==2.6.0 torchvision==0.21.0 torchaudio==2.6.0 --index-url https://download.pytorch.org/whl/cu124
            ```

        === "CUDA 12.6"

            ``` console
            $ pip install torch==2.6.0 torchvision==0.21.0 torchaudio==2.6.0 --index-url https://download.pytorch.org/whl/cu126
            ```
    
    ??? quote "PyTorch v2.5.1 | CUDA 11.8, 12.1, 12.4 | Python 3.9 - 3.12"
    
        === "CUDA 11.8"

            ``` console
            $ conda install pytorch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 pytorch-cuda=11.8 -c pytorch -c nvidia

            $ pip install torch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 --index-url https://download.pytorch.org/whl/cu118
            ```

        === "CUDA 12.1"

            ``` console
            $ conda install pytorch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 pytorch-cuda=12.1 -c pytorch -c nvidia

            $ pip install torch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 --index-url https://download.pytorch.org/whl/cu121
            ```

        === "CUDA 12.4"

            ``` console
            $ conda install pytorch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 pytorch-cuda=12.4 -c pytorch -c nvidia

            $ pip install torch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 --index-url https://download.pytorch.org/whl/cu124
            ```
    
    ??? quote "PyTorch v2.4.1 | CUDA 11.8, 12.1, 12.4 | Python 3.9 - 3.12"

        === "CUDA 11.8"
    
            ``` console
            $ conda install pytorch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1 pytorch-cuda=11.8 -c pytorch -c nvidia

            $ pip install torch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1 --index-url https://download.pytorch.org/whl/cu118
            ```

        === "CUDA 12.1"
    
            ``` console
            $ conda install pytorch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1 pytorch-cuda=12.1 -c pytorch -c nvidia

            $ pip install torch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1 --index-url https://download.pytorch.org/whl/cu121
            ```

        === "CUDA 12.4"
    
            ``` console
            $ conda install pytorch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1 pytorch-cuda=12.4 -c pytorch -c nvidia

            $ pip install torch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1 --index-url https://download.pytorch.org/whl/cu124
            ```
    
    ??? quote "PyTorch v2.3.1 | CUDA 11.8, 12.1 | Python 3.8 - 3.12"

        === "CUDA 11.8"
    
            ``` console
            $ conda install pytorch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 pytorch-cuda=11.8 -c pytorch -c nvidia

            $ pip install torch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 --index-url https://download.pytorch.org/whl/cu118
            ```
        
        === "CUDA 12.1"
    
            ``` console
            $ conda install pytorch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 pytorch-cuda=12.1 -c pytorch -c nvidia

            $ pip install torch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 --index-url https://download.pytorch.org/whl/cu121
            ```
    
    ??? quote "PyTorch v2.2.2 | CUDA 11.8, 12.1 | Python 3.8 - 3.12"

        === "CUDA 11.8"
    
            ``` console
            $ conda install pytorch==2.2.2 torchvision==0.17.2 torchaudio==2.2.2 pytorch-cuda=11.8 -c pytorch -c nvidia
    
            $ pip install torch==2.2.2 torchvision==0.17.2 torchaudio==2.2.2 --index-url https://download.pytorch.org/whl/cu118
            ```
    
        === "CUDA 12.1"
    
            ``` console
            $ conda install pytorch==2.2.2 torchvision==0.17.2 torchaudio==2.2.2 pytorch-cuda=12.1 -c pytorch -c nvidia
    
            $ pip install torch==2.2.2 torchvision==0.17.2 torchaudio==2.2.2 --index-url https://download.pytorch.org/whl/cu121
            ```
    
    ??? quote "PyTorch v2.1.2 | CUDA 11.8, 12.1 | Python 3.8 - 3.11"

        === "CUDA 11.8"
    
            ``` console
            $ conda install pytorch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2 pytorch-cuda=11.8 -c pytorch -c nvidia
    
            $ pip install torch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2 --index-url https://download.pytorch.org/whl/cu118
            ```

        === "CUDA 12.1"

            ``` console
            $ conda install pytorch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2 pytorch-cuda=12.1 -c pytorch -c nvidia
    
            $ pip install torch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2 --index-url https://download.pytorch.org/whl/cu121
            ```
    
    ??? quote "PyTorch v2.0.1 | CUDA 11.7, 11.8 | Python 3.8 - 3.11"

        === "CUDA 11.7"
    
            ``` console
            $ conda install pytorch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2 pytorch-cuda=11.7 -c pytorch -c nvidia
    
            $ pip install torch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2
            ```

        === "CUDA 11.8"
    
            ``` console
            $ conda install pytorch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2 pytorch-cuda=11.8 -c pytorch -c nvidia
    
            $ pip install torch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2 --index-url https://download.pytorch.org/whl/cu118
            ```
    
    ??? quote "PyTorch v1.13.1 | CUDA 11.6, 11.7 | Python 3.7 - 3.10"

        === "CUDA 11.6"
    
            ``` console
            $ conda install pytorch==1.13.1 torchvision==0.14.1 torchaudio==0.13.1 pytorch-cuda=11.6 -c pytorch -c nvidia

            $ pip install torch==1.13.1+cu116 torchvision==0.14.1+cu116 torchaudio==0.13.1 --extra-index-url https://download.pytorch.org/whl/cu116
            ```
    
        === "CUDA 11.7"
    
            ``` console
            $ conda install pytorch==1.13.1 torchvision==0.14.1 torchaudio==0.13.1 pytorch-cuda=11.7 -c pytorch -c nvidia

            $ pip install torch==1.13.1+cu117 torchvision==0.14.1+cu117 torchaudio==0.13.1 --extra-index-url https://download.pytorch.org/whl/cu117
            ```
    
    ??? quote "PyTorch v1.12.1 | CUDA 11.3, 11.6 | Python 3.7 - 3.10"

        === "CUDA 11.3"
    
            ``` console
            $ conda install pytorch==1.12.1 torchvision==0.13.1 torchaudio==0.12.1 cudatoolkit=11.3 -c pytorch

            $ pip install torch==1.12.1+cu113 torchvision==0.13.1+cu113 torchaudio==0.12.1 --extra-index-url https://download.pytorch.org/whl/cu113
            ```
    
        === "CUDA 11.6"
    
            ``` console
            $ conda install pytorch==1.12.1 torchvision==0.13.1 torchaudio==0.12.1 cudatoolkit=11.6 -c pytorch -c conda-forge

            $ pip install torch==1.12.1+cu116 torchvision==0.13.1+cu116 torchaudio==0.12.1 --extra-index-url https://download.pytorch.org/whl/cu116
            ```

---

## 验证 PyTorch

执行下列命令（或编写 Python 脚本），验证 PyTorch 是否安装成功

``` console
$ python -c "import torch; print(torch.cuda.is_available())"  # 如果输出为 True，说明 CUDA 可用
```

---

## 卸载 PyTorch

!!! tip "完全卸载 PyTorch"

    无论之前是使用 `pip` 还是 `conda` 安装，建议同时执行两者的卸载命令，以确保完全清除 PyTorch 及其依赖。

=== "Pip"

    ``` console
    $ pip uninstall torch torchvision torchaudio
    $ pip cache purge  # （可选）删除所有缓存
    ```

=== "Conda"

    ``` console
    $ conda remove pytorch torchvision torchaudio
    $ conda clean --all  # （可选）删除所有缓存
    ```

[^1]: [Start Locally | PyTorch](https://pytorch.org/get-started/locally/)
