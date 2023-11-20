function scrollToImage(imageId) {
    var element = document.getElementById(imageId);
    if(element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}

// 当用户向下滚动100px时，显示按钮
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// 当用户点击按钮时，返回页面顶部
function topFunction() {
  document.body.scrollTop = 0; // 对于Safari
  document.documentElement.scrollTop = 0; // 对于Chrome, Firefox, IE和Opera
}