function scrollToImage(imageId) {
    var element = document.getElementById(imageId);
    if(element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}

// 当用户点击按钮时，滚动到页面顶部
document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0; // 对于Safari
    document.documentElement.scrollTop = 0; // 对于Chrome, Firefox, IE和Opera
  };

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 设置画布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// 粒子对象构造函数
function Particle(x, y, size, color, velocity, life) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.velocity = velocity;
    this.life = life;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    };

    this.update = function() {
        this.life--; // 减少生命周期
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
    };
}

// 监听鼠标移动事件
window.addEventListener('mousemove', function(event) {
    // 每次移动时生成新的粒子
    const particle = new Particle(event.x, event.y, 6, 'white', {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
    }, 120); // 假设帧率约为60fps，生命周期设置为120相当于2秒
    particles.push(particle);
});

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 更新和绘制所有粒子
    particles.forEach((particle, index) => {
        if (particle.life <= 0) {
            particles.splice(index, 1);
        } else {
            particle.update();
        }
    });
}

animate();