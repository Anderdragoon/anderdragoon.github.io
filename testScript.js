document.body.addEventListener('mousedown', function() {
    document.body.classList.add('click-cursor');
  });

  // 当鼠标释放时移除class
  document.body.addEventListener('mouseup', function() {
    document.body.classList.remove('click-cursor');
  });

  // 也可以考虑鼠标离开页面的情况
  document.body.addEventListener('mouseleave', function() {
    document.body.classList.remove('click-cursor');
  });