function init() {
    var slider = $("#slider");
    var now=0;
    var items = $("img");
    var size = items.length;
    setInterval(function() {
        if (now == size - 1) {
            now=0;
        } else{
            now++;
        }
        console.log("now=" + now);
        slider.animate({"left":-100*now + "px"}, 500);
//        slider.style.left = -100*now + "px";
//        console.log("slider left=" + slider.style.left);
    }, 3000);
};
window.onload= init;