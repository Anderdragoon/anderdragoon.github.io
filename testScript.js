document.addEventListener('DOMContentLoaded', (event) => {
    const block = document.getElementById('block');
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const easeFactor = 0.1; // 调整这个值来控制加速度和减速度

    function updatePosition() {
        // 计算差异
        const dx = targetX - currentX;
        const dy = targetY - currentY;

        // 根据差异计算下一个位置
        currentX += dx * easeFactor;
        currentY += dy * easeFactor;

        // 更新方块的位置
        block.style.left = `${currentX}px`;
        block.style.top = `${currentY}px`;

        // 递归调用下一帧的更新
        requestAnimationFrame(updatePosition);
    }

    function mouseMoveHandler(e) {
        // 更新目标位置为鼠标位置
        targetX = e.clientX - block.clientWidth / 2;
        targetY = e.clientY - block.clientHeight / 2;
    }

    // 启动动画循环
    requestAnimationFrame(updatePosition);

    // 监听鼠标移动事件
    document.addEventListener('mousemove', mouseMoveHandler);
});