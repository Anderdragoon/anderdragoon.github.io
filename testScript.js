// 为所有元素添加mousedown事件监听器
window.addEventListener('mousedown', function() {
    // 添加click-cursor类到所有元素
    document.querySelectorAll('*').forEach(function(el) {
        el.classList.add('click-cursor');
    });
});

// 为所有元素添加mouseup事件监听器
window.addEventListener('mouseup', function() {
    // 移除所有元素的click-cursor类
    document.querySelectorAll('*').forEach(function(el) {
        el.classList.remove('click-cursor');
    });
});

// 当鼠标离开窗口时移除click-cursor类
window.addEventListener('mouseleave', function() {
    document.querySelectorAll('*').forEach(function(el) {
        el.classList.remove('click-cursor');
    });
});