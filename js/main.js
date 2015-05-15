
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            navbar = document.querySelector("navbar");
        if (distanceY > 300) {
            document.getElementById("navbar").className += " smaller";
        } else {
            if(document.getElementById("navbar").className.match(/(?:^|\s)smaller(?!\S)/)) {
            document.getElementById("navbar").className = document.getElementById("navbar").className.replace(/(?:^|\s)smaller(?!\S)/g ,'')
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
