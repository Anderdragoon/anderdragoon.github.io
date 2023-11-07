document.addEventListener('DOMContentLoaded', (event) => {
    const block = document.getElementById('block');
    let posX = 0;
    let posY = 0;
    const speed = 5; // 每次移动的像素

    function moveBlock(e) {
        switch(e.key) {
            case 'ArrowUp': // 向上移动
                posY -= speed;
                break;
            case 'ArrowDown': // 向下移动
                posY += speed;
                break;
            case 'ArrowLeft': // 向左移动
                posX -= speed;
                break;
            case 'ArrowRight': // 向右移动
                posX += speed;
                break;
        }

        // 更新方块的位置
        block.style.top = `${posY}px`;
        block.style.left = `${posX}px`;
    }

    // 监听键盘按键事件
    document.addEventListener('keydown', moveBlock);
});