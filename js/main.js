function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            navbar = document.getElementById("navbar");
        if (distanceY > 300) {
            navbar.className += " small-nav";
        } else {
            if(navbar.className.match(/(?:^|\s)small-nav(?!\S)/)) {
            navbar.className = navbar.className.replace(/(?:^|\s)small-nav(?!\S)/g ,'')
            }
        }
    });
}

function init2() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            elements = document.getElementsByClassName('nav-dd');
        if (distanceY > 300) {
            for (var i=elements.length; i--;) {
                elements[i].classList.add("small-dd");
            }
        } 
        else {
            if(elements[0].className.match(/(?:^|\s)small-dd(?!\S)/)) {

                for (var i=elements.length; i--;) {
                    elements[i].classList.remove("small-dd");
                }

            // elements.className = elements.className.replace(/(?:^|\s)small-dd(?!\S)/g ,'')
            }
        }
    });
}

function removeClass( classname, element ) {
    var cn = element.className;
    var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}

function start() {
    init();init2();

}

window.onload = start;

function resize()	{
    var height = window.innerHeight;
    var imgWidth = document.getElementById("img").offsetWidth;
    document.getElementById("section-landing").style.height = height-150 + "px";
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