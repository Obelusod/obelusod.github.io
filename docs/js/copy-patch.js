// 参考自：https://github.com/opensafely/documentation/pull/1461

/**
 * 获取不包含提示符和输出内容的文本
 * @param {string} targetSelector - 目标元素的选择器
 * @returns {string} 处理后的纯文本内容
 */
function getTextWithoutPromptAndOutput(targetSelector) {
    // 获取目标元素
    const targetElement = document.querySelector(targetSelector);
    if (!targetElement) return '';

    // 需要排除的CSS类名（Pygments语法高亮中的提示符和输出类）
    const excludedClasses = ["gp", "go"];  // gp: Generic Prompt, go: Generic Output

    /**
     * 递归处理DOM节点
     * @param {Node} node - 当前处理的节点
     * @returns {string} 处理后的节点文本
     */
    function processNode(node) {
        // 如果是文本节点，直接返回内容
        if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent;
        }

        // 如果是元素节点且包含需要排除的类，则跳过
        if (node.nodeType === Node.ELEMENT_NODE &&
            excludedClasses.some(className => node.classList.contains(className))) {
            return '';
        }

        // 递归处理所有子节点
        let text = '';
        for (const child of node.childNodes) {
            text += processNode(child);
        }
        return text;
    }

    return processNode(targetElement).trim();
}

/**
 * 修改所有代码复制按钮的行为，排除提示符和输出内容
 */
function patchCopyCodeButtons() {
    // 选择所有以代码元素为目标的复制按钮
    document.querySelectorAll('button.md-clipboard[data-clipboard-target]').forEach(btn => {
        const targetSelector = btn.dataset.clipboardTarget;
        const originalText = getTextWithoutPromptAndOutput(targetSelector);

        // 只有当获取到有效文本时才更新（避免破坏原有功能）
        if (originalText) {
            btn.dataset.clipboardText = originalText;
        }
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', patchCopyCodeButtons);

// 监听 DOM 变化以处理动态加载的内容（如标签页或异步加载的区块）
new MutationObserver(patchCopyCodeButtons).observe(document.body, {
    childList: true,  // 观察子节点的添加/删除
    subtree: true     // 观察所有后代节点
});
