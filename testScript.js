// 当用户向下滚动100px时，显示按钮
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log("滚动事件触发"); // 用于调试
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("topBtn").style.display = "block";
    } else {
      document.getElementById("topBtn").style.display = "none";
    }
  }

// 当用户点击按钮时，返回页面顶部
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

function scrollToImage(imageId) {
    var element = document.getElementById(imageId);
    if(element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}