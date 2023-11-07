document.addEventListener('DOMContentLoaded', (event) => {
    const block = document.getElementById('block');
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const easeFactor = 0.1; // 调整这个值来控制加速度和减速度

    function updatePosition() {
        // 使用线性插值计算方块位置接近鼠标位置的方式
        if(Math.abs(targetX - currentX) > 1 || Math.abs(targetY - currentY) > 1) {
            currentX += (targetX - currentX) * easeFactor;
            currentY += (targetY - currentY) * easeFactor;

            block.style.left = `${currentX}px`;
            block.style.top = `${currentY}px`;
        }

        requestAnimationFrame(updatePosition);
    }

    function mouseMoveHandler(e) {
        // 更新目标位置为鼠标位置
        targetX = e.clientX - block.clientWidth / 2;
        targetY = e.clientY - block.clientHeight / 2;
    }

    // 监听鼠标移动事件
    document.addEventListener('mousemove', mouseMoveHandler);

    // 启动动画循环
    requestAnimationFrame(updatePosition);
});