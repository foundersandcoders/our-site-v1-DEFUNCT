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

function go(x) {
    var pos = document.getElementById(x).getBoundingClientRect();
    window.scroll(0, pos.top);
}

function sc(){
    var element = document.getElementById("portfolio");
    element.scrollIntoView();
}


function currentYPosition() {
    if (self.pageYOffset) return self.pageYOffset;
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}

function nav_scroll(page, anchor) {
    if (window.location.pathname != page) {
        location = page+'#'+anchor
    }
    //Stop page scrolling before load
    setTimeout(function() {
    smoothScroll(anchor);
    }, 1);
    console.log(window.location.pathname);
}

//alternatively location = page + special: anchor
//onload smoothScroll(anchor)
