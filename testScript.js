function scrollToImage(imageId) {
    var element = document.getElementById(imageId);
    if(element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}

// 当用户滚动一定距离时显示按钮
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backToTop").style.display = "block";
    } else {
      document.getElementById("backToTop").style.display = "none";
    }
  }
  
  // 当用户点击按钮时，滚动到页面顶部
  document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0; // 对于Safari
    document.documentElement.scrollTop = 0; // 对于Chrome, Firefox, IE和Opera
  };