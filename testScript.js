// 为整个页面添加mousedown事件监听器
window.addEventListener('mousedown', function() {
    document.documentElement.classList.add('click-cursor');
});

// 为整个页面添加mouseup事件监听器
window.addEventListener('mouseup', function() {
    document.documentElement.classList.remove('click-cursor');
});

// 当鼠标离开窗口时移除click-cursor类
window.addEventListener('mouseleave', function() {
    document.documentElement.classList.remove('click-cursor');
});