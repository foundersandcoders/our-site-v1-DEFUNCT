
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            navbar = document.getElementById("navbar");
        if (distanceY > 300) {
            navbar.className += " smaller";
        } else {
            if(navbar.className.match(/(?:^|\s)smaller(?!\S)/)) {
            navbar.className = navbar.className.replace(/(?:^|\s)smaller(?!\S)/g ,'')
            }
        }
    });
}
window.onload = init();

function resize()	{
    var height = window.innerHeight;
    document.getElementById("panel-1").style.height = height-150 + "px";
}
resize();
window.onresize = function() {
    resize();
};
