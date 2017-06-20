;(function () {

    'use strict';

    var firstval = 0;
    parent = document.querySelector('.testimonial');

    function forwardOne () {

        if (parent.style.left === '-5500px') {
            // restart();
        } else {
            firstval += 25;
            parent.style.left = "-" + firstval + "px";
            if (!(firstval % 550)) {
                return;
            }
            setTimeout(forwardOne, 20);
        }
    }

    function backOne () {
        if(firstval != 0) firstval -= 25;
        parent.style.left = "-" + firstval + "px";
        if (!(firstval % 550)) {
            return;
        }
        setTimeout(backOne, 20);
    }

    // function restart () {
    //
    //     if (parent.style.left === '0px') {
    //         firstval = 0;
    //         return;
    //     } else {
    //         firstval -= 55;
    //         parent.style.left = "-" + firstval + "px";
    //         setTimeout(restart, 20);
    //     }
    // }

    document.querySelector('.icon-right-open-big').addEventListener('click', forwardOne);
    document.querySelector('.icon-left-open-big').addEventListener('click', backOne);
}());
