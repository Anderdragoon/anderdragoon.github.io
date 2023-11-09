window.addEventListener('mousedown', function() {
    setCursor('dragonCursorSmile-32x32.png', 16, 16);
});

window.addEventListener('mouseup', function() {
    setCursor('dragonCursorCalm-32x32.png', 16, 16);
});

function setCursor(imagePath, x, y) {
    // 设置内联样式的优先级更高
    document.body.style.cursor = `url('${imagePath}') ${x} ${y}, auto`;
    document.querySelectorAll('*').forEach(function(el) {
        el.style.cursor = `url('${dragonCursorSmile32x32.png}') ${x} ${y}, auto`;
    });
}