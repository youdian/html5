function init() {
    var slider = document.getElementById("slider");
    var now=0;
    var items = document.getElementsByTagName("img");
    var size = items.length;
    setInterval(function() {
        if (now == size - 1) {
            now=0;
        } else{
            now++;
        }
        console.log("now=" + now);
        slider.style.left = -100*now + "px";
        console.log("slider left=" + slider.style.left);
    }, 3000);
};
window.onload= init;