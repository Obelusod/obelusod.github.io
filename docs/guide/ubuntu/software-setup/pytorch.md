---
title: PyTorch
---

??? example "NVIDIA 显卡驱动、CUDA、PyTorch 和 Python 的版本兼容性要求"

    ![](../../../assets/images/guide/compatibility-matrix-1.png)
    
    ![](../../../assets/images/guide/compatibility-matrix-2.png)
    
    <table><thead>
      <tr>
        <th>PyTorch</th>
        <th>CUDA</th>
        <th>CUDNN</th>
        <th>Python</th>
      </tr></thead>
    <tbody>
      <tr>
        <td>2.6</td>
        <td>11.8, 12.4, 12.6</td>
        <td rowspan="3">~ 9.1.0.70</td>
        <td rowspan="2">&gt;=3.9, &lt;=3.13</td>
      </tr>
      <tr>
        <td>2.5</td>
        <td rowspan="2">11.8, 12.1, 12.4</td>
      </tr>
      <tr>
        <td>2.4</td>
        <td rowspan="3">&gt;=3.8, &lt;=3.12</td>
      </tr>
      <tr>
        <td>2.3</td>
        <td rowspan="3">11.8, 12.1</td>
        <td rowspan="3">~ 8.7.0.84</td>
      </tr>
      <tr>
        <td>2.2</td>
      </tr>
      <tr>
        <td>2.1</td>
        <td rowspan="2">&gt;= 3.8, &lt;=3.11</td>
      </tr>
      <tr>
        <td>2.0</td>
        <td>11.7, 11.8</td>
        <td>~ 8.5.0.96</td>
      </tr>
      <tr>
        <td>1.13</td>
        <td>11.6, 11.7</td>
        <td rowspan="2">~ 8.3.2.44</td>
        <td rowspan="2">&gt;= 3.7, &lt;=3.10</td>
      </tr>
      <tr>
        <td>1.12</td>
        <td>11.3, 11.6</td>
      </tr>
    </tbody>
    </table>

    详见：[CUDA Toolkit Major Component Versions](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html#cuda-toolkit-major-component-versions)
    和 [Releasing PyTorch | Release Compatibility Matrix](https://github.com/pytorch/pytorch/blob/main/RELEASE.md#release-compatibility-matrix)

---

## 安装 PyTorch [^1]

!!! info "CPU 版本 和 GPU 版本"

    PyTorch 提供了 CPU 版和 GPU 版，其中 GPU 支持 CUDA（NVIDA）和 ROCm（AMD）两种，为了充分发挥 PyTorch
    的并行加速优势，并处理大规模数据和复杂模型，通常推荐安装 GPU 版本。本篇主要以 CUDA 版本为例。

!!! warning "正确的 CUDA 版本安装"

    对于 PyTorch CUDA，需要 NVIDIA 显卡驱动、CUDA 和 cuDNN 库的支持，并且根据每个 PyTorch
    版本兼容性的不同，通常需要适配特定的依赖版本，因此**强烈推荐使用 Python 虚拟环境（如 Anaconda）和包管理器进行安装，避免环境冲突或混乱**。
    
    使用包管理器直接安装 PyTorch 而不指定特定版本（如 `pip install pytorch`），将会默认安装最新的 PyTorch
    版本及较新的 CUDA 和 cuDNN 版本，往往容易遇到兼容性问题（如版本不匹配/无法找到 CUDA 设备），因此**务必根据官方提供的各个版本的完整安装命令进行安装**。

    !!! danger ""

        在虚拟环境下，使用包管理器（`conda` 或 `pip`）安装 PyTorch 时，会自动安装所依赖版本的 CUDA 和
        cuDNN（作为 Python 软件包，如 `cudatoolkit`），并与系统环境变量定义的 CUDA 和 cuDNN 版本相隔离，PyTorch
        会优先调用虚拟环境中的 CUDA 和 cuDNN。

        **即只要在虚拟环境中正确安装 PyTorch，无论系统中是否安装过任何版本的 CUDA 和 cuDNN，都不会造成兼容性问题。**

??? note annotate "从 PyTorch 2.6 开始不再提供官方 Conda 包"

    出于维护成本与用户使用情况考虑，从 PyTorch 2.6 版本开始，官方 Anaconda 频道（`-c pytorch`）不再提供 Conda 包。
    作为替代方案，可以考虑迁移至第三方的 `conda-forge` 频道 (1)，或使用 Pip 安装 PyTorch。

    详见：[[Announcement] Deprecating PyTorch’s official Anaconda channel](https://github.com/pytorch/pytorch/issues/138506)

1. 参考：[Transitioning from defaults | conda-forge | community-driven packaging for conda](https://conda-forge.org/docs/user/transitioning_from_defaults/)

??? example "PyTorch 安装命令（CUDA）"

    以下仅提供部分较新的主要版本的 PyTorch 安装命令，其他所有版本请参阅：[Previous PyTorch Versions | PyTorch](https://pytorch.org/get-started/previous-versions/)

    ??? quote "PyTorch v2.6.0 | CUDA 11.8, 12.4, 12.6 | Python 3.9 - 3.13"
    
        ```bash title=""
        # CUDA 11.8
        pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
        # CUDA 12.4
        pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124
        # CUDA 12.6
        pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126
        ```
    
    ??? quote "PyTorch v2.5.1 | CUDA 11.8, 12.1, 12.4 | Python 3.9 - 3.12"
    
        ```bash title=""
        # CUDA 11.8
        conda install pytorch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1  pytorch-cuda=11.8 -c pytorch -c nvidia
        # CUDA 12.1
        conda install pytorch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 pytorch-cuda=12.1 -c pytorch -c nvidia
        # CUDA 12.4
        conda install pytorch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 pytorch-cuda=12.4 -c pytorch -c nvidia
        ```
    
        ```bash title=""
        # CUDA 11.8
        pip install torch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 --index-url https://download.pytorch.org/whl/cu118
        # CUDA 12.1
        pip install torch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 --index-url https://download.pytorch.org/whl/cu121
        # CUDA 12.4
        pip install torch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 --index-url https://download.pytorch.org/whl/cu124
        ```
    
    ??? quote "PyTorch v2.4.1 | CUDA 11.8, 12.1, 12.4 | Python 3.9 - 3.12"
    
        ```bash title=""
        # CUDA 11.8
        conda install pytorch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1  pytorch-cuda=11.8 -c pytorch -c nvidia
        # CUDA 12.1
        conda install pytorch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1 pytorch-cuda=12.1 -c pytorch -c nvidia
        # CUDA 12.4
        conda install pytorch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1 pytorch-cuda=12.4 -c pytorch -c nvidia
        ```
        
        ```bash title=""
        # CUDA 11.8
        pip install torch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1 --index-url https://download.pytorch.org/whl/cu118
        # CUDA 12.1
        pip install torch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1 --index-url https://download.pytorch.org/whl/cu121
        # CUDA 12.4
        pip install torch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1 --index-url https://download.pytorch.org/whl/cu124
        ```
    
    ??? quote "PyTorch v2.3.1 | CUDA 11.8, 12.1 | Python 3.8 - 3.12"
    
        ```bash title=""
        # CUDA 11.8
        conda install pytorch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 pytorch-cuda=11.8 -c pytorch -c nvidia
        # CUDA 12.1
        conda install pytorch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 pytorch-cuda=12.1 -c pytorch -c nvidia
        ```
        
        ```bash title=""
        # CUDA 11.8
        pip install torch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 --index-url https://download.pytorch.org/whl/cu118
        # CUDA 12.1
        pip install torch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 --index-url https://download.pytorch.org/whl/cu121
        ```
    
    ??? quote "PyTorch v2.2.2 | CUDA 11.8, 12.1 | Python 3.8 - 3.12"
    
        ```bash title=""
        # CUDA 11.8
        conda install pytorch==2.2.2 torchvision==0.17.2 torchaudio==2.2.2 pytorch-cuda=11.8 -c pytorch -c nvidia
        # CUDA 12.1
        conda install pytorch==2.2.2 torchvision==0.17.2 torchaudio==2.2.2 pytorch-cuda=12.1 -c pytorch -c nvidia
        ```
        
        ```bash title=""
        # CUDA 11.8
        pip install torch==2.2.2 torchvision==0.17.2 torchaudio==2.2.2 --index-url https://download.pytorch.org/whl/cu118
        # CUDA 12.1
        pip install torch==2.2.2 torchvision==0.17.2 torchaudio==2.2.2 --index-url https://download.pytorch.org/whl/cu121
        ```
    
    ??? quote "PyTorch v2.1.2 | CUDA 11.8, 12.1 | Python 3.8 - 3.11"
    
        ```bash title=""
        # CUDA 11.8
        conda install pytorch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2 pytorch-cuda=11.8 -c pytorch -c nvidia
        # CUDA 12.1
        conda install pytorch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2 pytorch-cuda=12.1 -c pytorch -c nvidia
        ```
        
        ```bash title=""
        # CUDA 11.8
        pip install torch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2 --index-url https://download.pytorch.org/whl/cu118
        # CUDA 12.1
        pip install torch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2 --index-url https://download.pytorch.org/whl/cu121
        ```
    
    ??? quote "PyTorch v2.0.1 | CUDA 11.7, 11.8 | Python 3.8 - 3.11"
    
        ```bash title=""
        # CUDA 11.7
        conda install pytorch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2 pytorch-cuda=11.7 -c pytorch -c nvidia
        # CUDA 11.8
        conda install pytorch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2 pytorch-cuda=11.8 -c pytorch -c nvidia
        ```
        
        ```bash title=""
        # CUDA 11.7
        pip install torch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2
        # CUDA 11.8
        pip install torch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2 --index-url https://download.pytorch.org/whl/cu118
        ```
    
    ??? quote "PyTorch v1.13.1 | CUDA 11.6, 11.7 | Python 3.7 - 3.10"
    
        ```bash title=""
        # CUDA 11.6
        conda install pytorch==1.13.1 torchvision==0.14.1 torchaudio==0.13.1 pytorch-cuda=11.6 -c pytorch -c nvidia
        # CUDA 11.7
        conda install pytorch==1.13.1 torchvision==0.14.1 torchaudio==0.13.1 pytorch-cuda=11.7 -c pytorch -c nvidia
        ```
        
        ```bash title=""
        # CUDA 11.6
        pip install torch==1.13.1+cu116 torchvision==0.14.1+cu116 torchaudio==0.13.1 --extra-index-url https://download.pytorch.org/whl/cu116
        # CUDA 11.7
        pip install torch==1.13.1+cu117 torchvision==0.14.1+cu117 torchaudio==0.13.1 --extra-index-url https://download.pytorch.org/whl/cu117
        ```
    
    ??? quote "PyTorch v1.12.1 | CUDA 11.3, 11.6 | Python 3.7 - 3.10"
    
        ```bash title=""
        # CUDA 11.3
        conda install pytorch==1.12.1 torchvision==0.13.1 torchaudio==0.12.1 cudatoolkit=11.3 -c pytorch
        # CUDA 11.6
        conda install pytorch==1.12.1 torchvision==0.13.1 torchaudio==0.12.1 cudatoolkit=11.6 -c pytorch -c conda-forge
        ```
        
        ```bash title=""
        # CUDA 11.3
        pip install torch==1.12.1+cu113 torchvision==0.13.1+cu113 torchaudio==0.12.1 --extra-index-url https://download.pytorch.org/whl/cu113
        # CUDA 11.6
        pip install torch==1.12.1+cu116 torchvision==0.13.1+cu116 torchaudio==0.12.1 --extra-index-url https://download.pytorch.org/whl/cu116
        ```


---

## 验证 PyTorch

执行下列命令，启动 Python 解释器（或编写 Python 脚本）

```bash
python
```

---

在解释器中输入下列代码，验证 PyTorch 是否安装成功

```python
import torch
torch.cuda.is_available()  # 如果输出 True，则说明 CUDA 可用
```


[^1]: [Start Locally | PyTorch](https://pytorch.org/get-started/locally/)
