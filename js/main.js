
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            navbar = document.getElementById("navbar");
            // portfolio = document.getElementById("portfolio");
        if (distanceY > 300) {
            navbar.className += " smaller";
            // portfolio.className += " animate";
        } else {
            if(navbar.className.match(/(?:^|\s)smaller(?!\S)/)) {
            navbar.className = navbar.className.replace(/(?:^|\s)smaller(?!\S)/g ,'')
            }
        }
    });
}

// function animate() {
//     window.addEventListener('scroll', function(e) {
//         var distanceY = window.pageYOffset || document.documentElement.scrollTop,
//             portfolio = document.getElementById("portfolio");
//         if (distanceY > 300) {
//             portfolio.className += " animate"
//         }
//     })
// }

function shiftheader() {
    var land = document.getElementsByClassName('land');
    for (var i=land.length; i--;) {
        land[i].className += " no-margin";
    }
    // var elements = document.getElementsByClassName('land');
    // for (var i=elements.length; i--;) {
    //     elements[i].style.margin = 0;
    // } 
    // document.getElementById("myAnchor").setAttribute("href", "http://www.w3schools.com");
    // document.getElementById("land").style.margin = 0;
    // document.getElementById("land2").style.margin-top = 0;
}

window.onload = init();

function resize()	{
    var height = window.innerHeight;
    var imgWidth = document.getElementById("img").offsetWidth;
    document.getElementById("panel-1").style.height = height-150 + "px";
    var elements = document.getElementsByClassName('im');
    for (var i=elements.length; i--;) {
        elements[i].style.height = imgWidth + "px";
    }

    // document.getElementById("image-one").style.height = imgWidth*1.3 + "px";
    // document.getElementById("image-two").style.height = imgWidth*1.3 + "px";
    // document.getElementById("image-three").style.height = imgWidth*1.3 + "px";

    // document.querySelectorAll('image').style.height = imgWidth*1.3 + "px";
    // document.getElementsByClassName('imagetest').style.height = imgWidth*1.3 + "px";
    // document.getElementById("image-container-one").style.height = imgWidth*3/2 + "px";
    // document.getElementById("image-container-one").style.height = imgWidth*3/2 + "px";
}
resize();
window.onresize = function() {
    resize();
};
