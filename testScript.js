document.addEventListener('DOMContentLoaded', (event) => {
    const block = document.getElementById('block');
    let posX = 0;
    let posY = 0;
    let targetX = 0; // 目标位置X
    let targetY = 0; // 目标位置Y
    let moving = false; // 是否正在移动

    // 加速度和减速度
    const acceleration = 0.5;
    const deceleration = 0.5;

    // 动画循环函数
    function animate() {
        // 只有当方块的目标位置与当前位置不同时，才执行移动逻辑
        if (moving) {
            // 计算方块到目标位置的距离
            const distX = targetX - posX;
            const distY = targetY - posY;

            // 根据距离计算速度
            const speedX = distX * acceleration;
            const speedY = distY * acceleration;

            // 更新位置
            posX += speedX;
            posY += speedY;

            // 将位置应用到元素
            block.style.left = `${posX}px`;
            block.style.top = `${posY}px`;

            // 当方块足够靠近目标位置时，停止动画
            if (Math.abs(distX) < 1 && Math.abs(distY) < 1) {
                moving = false;
                posX = targetX; // 对位置进行微调，确保与目标位置对齐
                posY = targetY; // 对位置进行微调，确保与目标位置对齐
                block.style.left = `${posX}px`;
                block.style.top = `${posY}px`;
            }

            // 请求下一帧动画
            requestAnimationFrame(animate);
        }
    }

    // 监听鼠标点击事件
    document.addEventListener('mousedown', (e) => {
        // 更新目标位置
        targetX = e.clientX - block.clientWidth / 2;
        targetY = e.clientY - block.clientHeight / 2;
        moving = true; // 开始移动

        // 开始动画循环
        requestAnimationFrame(animate);
    });
});