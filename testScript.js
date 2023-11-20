function scrollToImage(imageId) {
    var element = document.getElementById(imageId);
    if(element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}

// 当用户点击按钮时，滚动到页面顶部
document.getElementById("backToTop").onclick = function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};