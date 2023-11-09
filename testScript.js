window.addEventListener('mousedown', function() {
    document.body.classList.add('click-cursor');
});

window.addEventListener('mouseup', function() {
    document.body.classList.remove('click-cursor');
});

window.addEventListener('mouseleave', function() {
    document.body.classList.remove('click-cursor');
});