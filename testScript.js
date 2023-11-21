function scrollToImage(imageId) {
    var element = document.getElementById(imageId);
    if(element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}

function adjustSidebar() {
    var topLeft = document.querySelector('.top-left');
    var sidebar = document.querySelector('.sidebar');
    var height = topLeft.offsetHeight; // 获取top-left的高度
    sidebar.style.top = height + 'px'; // 设置sidebar的top为top-left的高度
}

window.onload = adjustSidebar; // 页面加载时调整
window.onresize = adjustSidebar; // 窗口大小改变时调整

// 当用户点击按钮时，滚动到页面顶部
document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0; // 对于Safari
    document.documentElement.scrollTop = 0; // 对于Chrome, Firefox, IE和Opera
  };