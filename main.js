var image = document.querySelector(".main-event .eventImage");
var isImage1 = true;

setInterval(function() {
    if (isImage1) {
        image.style.backgroundImage = 'url(img/beauty/b3.avif)';
    } else {
        image.style.backgroundImage = 'url(img/beauty/b2.avif)';
    }
    isImage1 = !isImage1;
}, 2000);
