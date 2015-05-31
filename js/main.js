/**
 *  Animation/style-related
 *
 */
var fac = (function (){
    /**
     *  Reveal object with public
     *  methods to be returned
     *  when the function is invoked
     */
    var reveal = {
        nav_scroll: nav_scroll,
        changeText: changeText
    };
    var navbar_animation = {
        /**
         *  Navbar  
         *
         */
        navbar: function () {
            window.addEventListener('scroll', function(e){
                var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                    navbar = document.getElementById("navbar");
                if (distanceY > 300) {
                    navbar.classList.add("small-nav");
                } else {
                    if(navbar.className.match(/(?:^|\s)small-nav(?!\S)/)) {
                    navbar.classList.remove("small-nav");
                    }
                }
            });
        },
        /**
         *  Dropdown menu  
         *
         */
        nav_dropdown: function () {
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
    };

    function nav_resize() {
        navbar_animation.navbar(); 
        navbar_animation.nav_dropdown();
    }
    /**
     *  Landing page section hight to match window height.
     *
     */    
    function landing_resize() {
        var height = window.innerHeight;
        document.getElementById("section-landing").style.height = height-150 + "px";
    }
    /**
     *  Consistent aspect ration for portfolio images
     *
     */  
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
    /**
     * Changes the text for the client quotes on the landing page
     *
     */
    function changeText(nameText, quoteText){

        var client_name  = document.getElementById('client-name');
        var client_quote = document.getElementById('client-quote');

        client_name.style.opacity = 0;
        client_quote.style.opacity = 0;
        timeout = setTimeout(function(thing) {
            client_name.innerHTML = nameText;
            client_quote.innerHTML = quoteText;
            client_name.style.opacity = 1;
            client_quote.style.opacity = 1;
        }, 1000);
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
    /**
     * Scroll section into view.
     *
     */
    function smoothScroll (eID) {
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
    /**
     *  Get the user to the specific section. Scrolls to section 
     *  if already on the correct page. Navigates directly to content
     *  if navigating between pages.
     *
     *  @param {String} - path to the page where
     *                    where section is
     *  @param {String} - id of the section
     */
    function nav_scroll(page, anchor) {
        if (window.location.pathname != page) {
            location = page+'#'+anchor
        }
        // stop page scrolling before load
        setTimeout(function() {
            smoothScroll(anchor);
        }, 1);
    }
    /**
     *  Returns object with the
     *  public methods
     */
    return reveal;
}());


/**
 *  Contact form
 *  
 */
var contact_form = (function (){
    var reveal = {
        sendMail:sendMail
    };
    /**
     *  Constructs the email for Mandrill
     *  which we will recieve
     */
    function createParams(name, email, message, location) { 
        var params = {
            "message": {
                "from_email":email,
                "to":[{"email":"izaakrogan@googlemail.com"}],
                "subject": name + " from " + location,
                "text": message
            }
        };
        return params;
    };
    /**
     *  TODO
     *  
     */
    m = new mandrill.Mandrill('J23eakjghP54ii1jfviYfg');
     /**
     *  Send params with input value
     *  from contact form to Madrill
     */
    function sendMail() {
        var contactName = document.getElementById("contact-form-name").value;
        var contactEmail = document.getElementById("contact-form-email").value;
        var contactMessage = document.getElementById("contact-form-message").value;
        var pathName = window.location.pathname;
        m.messages.send(createParams(contactName, contactEmail, contactMessage, pathName), function(res) {
            console.log(contactName, contactEmail, contactMessage, pathName);
        }, function(err) {
            console.log(err);
        });
    }
    /**
     *  Returns object with the
     *  public methods
     */
    return reveal;
}());