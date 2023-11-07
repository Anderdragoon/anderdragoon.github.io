document.addEventListener('DOMContentLoaded', (event) => {
    const block = document.getElementById('block');
    let posX = 0;
    let posY = 0;

    function followMouse(e) {
        // 获取鼠标位置
        posX = e.clientX - block.clientWidth / 2;
        posY = e.clientY - block.clientHeight / 2;

        // 更新方块位置
        block.style.left = `${posX}px`;
        block.style.top = `${posY}px`;
    }

    // 监听鼠标移动事件，并更新方块位置
    document.addEventListener('mousemove', followMouse);
});