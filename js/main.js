function nav1() {
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

function nav2() {
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
            }
        }
    });
}

function nav_resize() {
    nav1(); 
    nav2();
}

function landing_resize() {
    var height = window.innerHeight;
    document.getElementById("section-landing").style.height = height-150 + "px";
}

function img_resize()	{
    var imgWidth = document.getElementById("img").offsetWidth;
    var elements = document.getElementsByClassName('im');
    for (var i=elements.length; i--;) {
        elements[i].style.height = imgWidth*0.66 + "px";
    }
}

function home_resize() {
    if (window.location.pathname == '/') {
        landing_resize();
        window.onresize = function() {
            img_resize();
        };
    }
}

window.onload = function() {
    nav_resize();
    home_resize();
}

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
