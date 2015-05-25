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

function start() {
    init();
}

window.onload = start;

function resize()	{
    var height = window.innerHeight;
    var imgWidth = document.getElementById("img").offsetWidth;
    document.getElementById("panel-1").style.height = height-150 + "px";
    var elements = document.getElementsByClassName('im');
    for (var i=elements.length; i--;) {
        elements[i].style.height = imgWidth*0.66 + "px";
    }
}
resize();
window.onresize = function() {
    resize();
};

function changeText(one, two){
    document.getElementById('client-name').style.opacity = 0;
    document.getElementById('client-quote').style.opacity = 0;
    timeout = setTimeout(function(thing) {
        document.getElementById("client-name").innerHTML = one;
        document.getElementById('client-quote').innerHTML = two;
        document.getElementById('client-name').style.opacity = 1;
        document.getElementById('client-quote').style.opacity = 1;
    }, 1000);    
}