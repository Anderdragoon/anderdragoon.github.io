document.addEventListener('DOMContentLoaded', (event) => {
    const block = document.getElementById('block');
    let posX = 0;
    let posY = 0;
    const speed = 0.1; // 控制加速度
    let isMoving = false;
    let destinationX = 0;
    let destinationY = 0;
    let velocityX = 0;
    let velocityY = 0;

    function moveBlockTo(e) {
        if (e.button === 2) { // 鼠标右键
            e.preventDefault(); // 防止出现上下文菜单
            destinationX = e.clientX - block.offsetWidth / 2;
            destinationY = e.clientY - block.offsetHeight / 2;
            isMoving = true;
        }
    }

    function animateMove() {
        if (isMoving) {
            // 计算剩余距离
            let distX = destinationX - posX;
            let distY = destinationY - posY;
            // 根据距离更新速度，模拟加速度
            velocityX += distX * speed;
            velocityY += distY * speed;

            // 模拟减速度，当方块接近目标点时减慢速度
            velocityX *= 0.9;
            velocityY *= 0.9;

            // 当方块非常接近目标点时，停止动画
            if (Math.abs(distX) < 1 && Math.abs(distY) < 1 && Math.abs(velocityX) < 0.1 && Math.abs(velocityY) < 0.1) {
                posX = destinationX;
                posY = destinationY;
                isMoving = false;
            } else {
                // 更新位置
                posX += velocityX;
                posY += velocityY;
            }

            // 应用新位置
            block.style.left = `${posX}px`;
            block.style.top = `${posY}px`;

            // 如果方块仍在移动，继续动画
            if (isMoving) {
                requestAnimationFrame(animateMove);
            }
        }
    }

    // 监听鼠标点击事件
    document.addEventListener('mousedown', moveBlockTo);

    // 防止右键菜单弹出
    block.addEventListener('contextmenu', e => e.preventDefault());

    // 开始动画
    requestAnimationFrame(animateMove);
});