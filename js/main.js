//TODO: Refactor
//Priorities landing resize?

(function (){
  function toggleHandler(toggle) {
    var iconplease = document.getElementById("cmn-toggle-switch");
    (iconplease.classList.contains("active") === true) ? iconplease.classList.remove("active") : iconplease.classList.add("active");
  }

  var dropdown      = document.querySelectorAll('.dropdownToggle');
  var dropdownArray = Array.prototype.slice.call(dropdown,0);

  dropdownArray.forEach(function (dropdown){
    var button = dropdown.querySelector('a[data-toggle="dropdown"]');
    var menu   = dropdown.querySelector('.nav-settings-dropdown') || dropdown.querySelector('.dropdown-menu');

    var wait = false;

    window.onclick = function (event){
      wait = !wait;
      if(menu.hasClass('show') && wait){
        menu.classList.remove('show');
        menu.classList.add('hide');
        toggleHandler();
      }
    };

    button.onclick = function(event) {
      wait = true;
      if(!menu.hasClass('show')) {
        menu.classList.add('show');
        menu.classList.remove('hide');
        toggleHandler();
      }else{
        menu.classList.remove('show');
        menu.classList.add('hide');
        toggleHandler();
      };
    };

    window.onscroll=function(){
      wait = !wait;
      if(menu.hasClass('show') && wait){
        menu.classList.remove('show');
        menu.classList.add('hide');
        toggleHandler();
      }
    };
  });

  Element.prototype.hasClass = function(className) {
    var a = this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
    return a;
  };
}());

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
        // changeText: changeText
    };
    var navbar_animation = {
        /**
         *  Resize navbar menu on load
         *
         */
        nav_resize: function () {
          var distanceY = window.pageYOffset || document.documentElement.scrollTop;
          var navbar = document.getElementById("navbar");
          var icon = document.getElementById("cmn-toggle-switch");
          var navTablet = document.getElementById("nav-dd-tablet");
          if (distanceY > 300) {
            navbar.classList.add("small-nav");
            navTablet.classList.add("small-dd-tabet");
            icon.classList.add("small-icon");
          } else {
            if(navbar.className.match(/(?:^|\s)small-nav(?!\S)/)) {
            navbar.classList.remove("small-nav");
            navTablet.classList.remove("small-dd-tabet");
            icon.classList.remove("small-icon");
            }
          }
        },
        /**
         *  Resize navbar menu on scroll
         *
         */
        nav_resize_scroll: function () {
          window.addEventListener('scroll', function(){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            var navbar = document.getElementById("navbar");
            var icon = document.getElementById("cmn-toggle-switch");
            var navTablet = document.getElementById("nav-dd-tablet");
            if (distanceY > 300) {
                navbar.classList.add("small-nav");
                navTablet.classList.add("small-dd-tabet");
                icon.classList.add("small-icon");
            } else {
              if(navbar.className.match(/(?:^|\s)small-nav(?!\S)/)) {
                navbar.classList.remove("small-nav");
                navTablet.classList.remove("small-dd-tabet");
                icon.classList.remove("small-icon");
              }
            }
          });
        },
        /**
         *  Resize dropdown menu on load
         *
         */
        dropdown_resize: function () {
          var distanceY = window.pageYOffset || document.documentElement.scrollTop;
          var elements = document.getElementsByClassName('nav-dd');
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
        },
         /**
         *  Resize dropdown menu on scroll
         *
         */
        dropdown_resize_scroll: function () {
          window.addEventListener('scroll', function(e){
              var distanceY = window.pageYOffset || document.documentElement.scrollTop;
              var elements = document.getElementsByClassName('nav-dd');
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
      navbar_animation.nav_resize();
      navbar_animation.nav_resize_scroll();
      navbar_animation.dropdown_resize();
      navbar_animation.dropdown_resize_scroll();
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
        if (window.location.pathname == '/agency/') {
            img_resize();
            window.onresize = function() {
                img_resize();
            };
        }
    }

    window.onload = function() {
        nav_resize();
        home_resize();
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
        if(anchor) {
          if (window.location.pathname != page) {
              location = page+'#'+anchor
          }
          // stop page scrolling before load
          setTimeout(function() {
              smoothScroll(anchor);
          }, 1);
        }
        if(!anchor) {
          if (window.location.pathname != page) {
              location = page+'#'
          }
        }
      }
    /**
     *  Returns object with the
     *  public methods
     */
    return reveal;
}());

/**
 *  New contact form functionality with Heroku
 *
 */
var contact_form = (function (){

    var reveal = {
      sendMail:sendEmail
    };

    function sendEmail (){

      var postData = getParams();

      var apiEmail = "http://founderscoders.herokuapp.com/email?body=" + JSON.stringify(postData);

      $.ajax({
        type: 'GET',
        url: apiEmail,
        dataType: 'jsonp',
        success: function(json) {
          console.dir(json);
          window.alert("Message sent");
        },
        error: function(e) {
          console.log(e);
          window.alert("Message sent");
        }
      });
  	}

    function getParams() {

      return {
        contactName: document.getElementById("contact-form-name").value,
        address:     document.getElementById("contact-form-email").value,
        message:     document.getElementById("contact-form-message").value
      }
    }
    /**
     *  Returns object with the
     *  public methods
     */
    return reveal;
}());

$(document).ready(function(){
  var img = new Image()
  var location
  if (window.location.pathname == '/programme/') {
    img.src = '/assets/academy.jpg';
    location = '#programme-landing-image'
  } else {
    img.src = '/assets/fac-teamwork.jpg';
    location = '#section-landing-image'
  }
  img.onload = function() {
      $(location).css('background-image', 'url('+img.src+')');
      setTimeout(function() {
        $(location).css('filter', 'none');
      }, 1);
  };
});
