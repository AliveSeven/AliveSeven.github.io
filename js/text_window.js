// 创建弹窗元素
function createPopup() {
    // 创建弹窗容器
    const popup = document.createElement("div");
    popup.id = "popup";
    
    // 创建标题
    const title = document.createElement("h1");
    title.textContent = "提醒！！";
    
    // 创建内容容器
    const contentContainer = document.createElement("div");
    contentContainer.id = "popup-content";
    
    // 创建内容
    const content = document.createElement("p");
    content.innerHTML = "欢迎您访问本博客！目前博客已经迁移到LINK -  <a href='https://aliveseven.top' target='_blank' style='color:#49b1f5;text-decoration:underline;font-weight:500;'>AliveSeven.top</a>，欢迎浏览和留言！";
    
    // 将内容添加到容器
    contentContainer.appendChild(content);
    
    // 创建关闭按钮
    const closeButton = document.createElement("button");
    closeButton.id = "close";
    closeButton.textContent = "×";
    closeButton.title = "关闭";
    
    // 组装弹窗
    popup.appendChild(title);
    popup.appendChild(contentContainer);
    popup.appendChild(closeButton);
    
    // 添加到页面
    document.body.appendChild(popup);
    
    return {
        popup: popup,
        closeButton: closeButton
    };
}

// 显示弹窗
function showPopup(popup) {
    // 设置初始状态
    popup.style.opacity = "0";
    popup.style.transform = "translateY(-20px)";
    
    // 显示弹窗
    setTimeout(() => {
        popup.style.opacity = "1";
        popup.style.transform = "translateY(0)";
        popup.classList.add("slide-in");
    }, 200);
}

// 隐藏弹窗
function hidePopup(popup) {
    popup.style.opacity = "0";
    popup.style.transform = "translateY(-20px)";
    
    // 移除动画效果
    popup.classList.remove("slide-in");
}

// 页面加载完成后初始化弹窗
window.addEventListener('DOMContentLoaded', () => {
    const { popup, closeButton } = createPopup();
    
    // 设置关闭按钮事件
    closeButton.addEventListener('click', () => {
        hidePopup(popup);
    });
    
    // 显示弹窗（延迟1秒显示，让页面先加载完）
    setTimeout(() => {
        showPopup(popup);
    }, 200);
    
    // 可以通过以下方式再次显示弹窗
    window.showPopupAgain = () => {
        showPopup(popup);
    };
});