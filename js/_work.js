function navres() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            navbar2 = document.getElementById("navbar2");
        if (distanceY > 300) {
            navbar2.className += " smaller2";
        } else {
            if(navbar2.className.match(/(?:^|\s)smaller2(?!\S)/)) {
            navbar2.className = navbar2.className.replace(/(?:^|\s)smaller2(?!\S)/g ,'')
            }
        }
    });
}

function start() {
    navres();
}

window.onload = start;