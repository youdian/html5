function init() {
    var slider = document.getElementById("slider");
    var items = document.getElementsByTagName("img");
    var size = items.length;
    var sliding = setInterval(switcher, 3000);
    var now=0;
    function switcher () {
        if (now == size - 1) {
            now=0;
        } else{
            now++;
        }
        var width = items[0].width;//缩放浏览器时宽度会变化，所以写在这里
        console.log("now=" + now);
        slider.style.left = -width*now + "px";
        console.log("slider left=" + slider.style.left);
    };
};

window.onload= init;