var $ = require('jquery');
window.$ = $; // make it global
$(function() { //begin
  // // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Create Cookies

  // create cookie++++++++++++++++++++++++++++++++++++

  function createCookie(name,value,days,path,domain,secure){
    if (days) {
      var date=new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires =date.toGMTString();

    }else {
      var  expires="";
    }
    cookieString = name + "="+ escape(value);
    if (expires) {cookieString+="; expires="+ expires;};
    if (path) {cookieString+="; path="+ escape(path); };
    if (domain) {cookieString+="; domain="+ escape(domain); };
    if (secure) {cookieString+="; secure"; };
    document.cookie=cookieString;
    }


  // get the cookie++++++++++++++++++++++++++++++++++++
  function getCookie(cname){
    var name = cname + "=";
    var kv=document.cookie.split(";");
    for(var id in kv){
      var cookie=kv[id];
      //.split("=");
      // console.log(cookie);
      while (cookie.charAt(0) == ' ') {
              cookie = cookie.substring(1);
          }
          if (cookie.indexOf(name) == 0) {
              return cookie.substring(name.length, cookie.length);
          }
    }
    return "";
  }
  // function check cookie+++++++++++++++++++++++++++++++
  function checkCookie(){
    var user= getCookie("username");
    var location= getCookie("location");
    if (user!="" && location!="") {
      console.log('cookies exist');
      var me= document.getElementById("cookie-main-wrap");
      me.className="dispno";

    }else{
      console.log("we need do create Cookies");
      var elem= document.getElementById("wrap-id");
      elem.className+=" blurMe";


    }

  }
  checkCookie();
  // accept cookies
  var aAgree= document.getElementById("a-agree");
  aAgree.addEventListener('click',function(e){
    e.preventDefault();
    createCookie("username","ionel",1); //create cookie 2
    createCookie("location","USA",10); //create cookie 2
    console.log("cookies created");
    var wrEl= document.getElementById("wrap-id");
    var me= document.getElementById("cookie-main-wrap");
    me.className="dispno";
    wrEl.className="wrapper";
  },false);
//decline cookies
  var aDecline= document.getElementById("a-decline");
  aDecline.addEventListener('click',function(e){
    e.preventDefault();
    var wrEl= document.getElementById("wrap-id");
    var me= document.getElementById("cookie-main-wrap");
    me.className="dispno";
    wrEl.className="wrapper";
  },false);

  // var yy=getCookie();
  // console.log(yy);
  // // ---------------------------------------------------------------Create Cookies



  // TAGGLE MENU
  var toggle = document.getElementById('nav-toggle');

  function showToggle() {
    var resNav = document.getElementById('responsive-nav');
    if (resNav.className === 'responsive-nav') {
      resNav.className += ' show';
    } else {
      resNav.className = 'responsive-nav';
      // console.log(resNav.className);
    }
  }

  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    showToggle();
  }, false);

  // ACTIVE MENU
  var myClass = 'actClass';
  var ddEl = document.getElementById('dropmenu');
  var lis = document.querySelectorAll("#responsive-nav a");
  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
      var curentclas = this.className;
      var clk = document.querySelectorAll("." + myClass);
      for (var i = 0; i < clk.length; i++) {
        clk[i].className = '';
      }
      this.className = myClass;
      // activate the parent in case a child was pressed
      if ((this.id === 'dr1') || (this.id === 'dr2')) {
        ddEl.className = myClass;
      }
    });
  }

  //hide menu after click++++++++++++++++++++++++++++++++++
  function afterClickLink() {
    var resNav = document.getElementById('responsive-nav');
    if (resNav.className.includes('show')) {
      resNav.className = 'responsive-nav';
    }
  }
  var lis = document.querySelectorAll("#responsive-nav a");
  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
      afterClickLink();
    });
  }
  //hide menu after click--------------------------------

  // SLIDE SHOW
  var slideIndex = 1;
  showSlides(slideIndex);
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

  }
  // Auto Slide
  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > x.length) {
      slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(carousel, 8000);
  }

  // activate arrows
  var pr = document.querySelector('.prev');
  var nx = document.querySelector('.next');
  pr.addEventListener('click', function(e) {
    e.preventDefault();
    plusSlides(-1);
  }, false);
  nx.addEventListener('click', function(e) {
    e.preventDefault();
    plusSlides(-1);
  }, false);

  //dots activate
  var dotsAll = document.querySelectorAll(".dot");

  for (var i = 0; i < dotsAll.length; i++) {
    dotsAll[i].addEventListener('click', function() {
      // currentSlide(i+1);
      plusSlides(-1);

    }, false);

  }

  //For footer Year
  var y = document.getElementById('year');
  var data = new Date();
  var year = data.getFullYear();
  y.textContent = year;



  // new approach with history Page trsdiction AJAX
  function loadContent(url) {
    $('#main').load(url + ' #contMain' , function() {
      if (url.includes("contact.html")) {
        $("body").trigger("contactLoaded");
      }
    }).hide().fadeIn('slow');
    // call gogle map when accesing contact page

  };
  $('#responsive-nav a,.getbutt a,.s-solar-electric a').on('click', function(e) {
    e.preventDefault();
    var href = this.href;
    var $this = $(this);
    loadContent(href);
    history.pushState('', $this.text, href);
  });


  window.onpopstate = function() {
    var path = location.pathname;
    loadContent(path);
    var page = path.substring(location.pathname.lastIndexOf('/') + 1);
  };
  ///++++++++++++++++++++++++++++++++++++++++++++++++++++++ top arrow
  var $window = $(window);
  var $slideAd = $('#go-top');
  var endZone = $('.footer-section').offset().top - $window.height() - 500;
  $window.on('scroll', function() {
    if (endZone < $window.scrollTop()) {
      $slideAd.animate({
        'right': '-5px'
      }, 250);
    } else {
      $slideAd.stop(true).animate({
        'right': '-95px'
      }, 250);
    }

  });
  //smooth scrolling
  var $slideLink = $('#go-top a');
  $slideLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $('#call').offset().top

    }, 1000);

  });

  // -------------------------------------------------------- top arrow
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++send an Email  Subscribe
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  var butSend = document.getElementById('subsend');
  butSend.addEventListener('click', function(e) {
    e.preventDefault();
    var ajax = {
      send: function() {
        var uName = $(".form-footer input[name=name]").val();
        var uEmail = $(".form-footer input[name=email]").val();
        var uComment = "Just a comment";
        var textErrorForm = "Form is not completed ! \n"
        var notForm = document.createElement("p");
        var neText = document.createTextNode(textErrorForm);
        notForm.appendChild(neText);
        notForm.className = 'notFormId';
        if (uName == "" || uEmail == "") {
          // alert("Form is not completed");
          butSend.parentElement.appendChild(notForm);
        } //end if
        else if (uName !== "" && (validateEmail(uEmail))) {
          //remove child
          var listPF = document.querySelectorAll(".notFormId");
          for (var i = 0; i < listPF.length; i++) {
            butSend.parentElement.removeChild(listPF[i]);
          }
          //
          ajax.SetText("Sending...");
          $.post("php/sendemail.php", {
            name: uName,
            email: uEmail,
            comment: uComment
          }, function(data) {
            if (data.includes("true")) {
              ajax.SetText("Sent !");
              butSend.style.backgroundColor = "#0054A6";
              butSend.style.color = "#fff";
              $(".form-footer input[name=name]").val("");
              $(".form-footer input[name=email]").val("");

            } else {
              ajax.SetText("Subscribe");
            }
          }); //end post
        } else {
          textErrorForm += "Email is not Valid !"
          neText.textContent=textErrorForm;
          butSend.parentElement.appendChild(notForm);
          // console.log(textErrorForm);
        } //end else
      },
      SetText: function(text) {
        butSend.textContent = text;
      }
    } //end ajax
    ajax.send();
    var a = $("button[type=submit]").val();
  }, false);
  //------------------------------------------------send email
  // ++++++++++++++++++++++++++++++++++++++++ validate the form input
  function CheckIfISEmpty(item, formName) {
    function createNotofication(textforError) {
      var atrname = item.getAttribute("name"); // get the name
      var s1 = atrname.substring(0, 1).toUpperCase();
      atrname = s1 + atrname.substring(1);
      var neP = document.createElement("p");
      var neText = document.createTextNode(atrname + textforError);
      // console.log(neText);
      neP.appendChild(neText);
      neP.className = "validate-me";
      neP.id = 'tempo';
      item.parentElement.appendChild(neP);
    };

    function deleteExistingNotif() {
      var existingPara = document.getElementById("tempo");
      if (existingPara) {
        existingPara.parentNode.removeChild(existingPara); //remove the child created
      }
    };
    //Validation Form
    function validationForm() {
      var atrname = item.getAttribute("name"); // get the name
      // console.log(atrname);
      var x = document.forms[formName][atrname].value
      if (x == "") {
        var hasP = item.parentElement.childNodes;
        // Check the field has already a p tag
        for (var i = 0; i < hasP.length; i++) {
          if (hasP[i].nodeName.toUpperCase() == 'P') {
            (hasP[i]).parentNode.removeChild(hasP[i]); //remove the p tag
          }
        }
        createNotofication(" field is required !");
      } else {
        deleteExistingNotif();
        // ++++++++++++++++++++++++++++++++++++++++++validate email

        if (atrname == 'email') {
          var emailValue = $(item).val();
          if (validateEmail(emailValue)) {
            deleteExistingNotif();
          } else {
            createNotofication(" format is not correct !");
          }
        }
      }
    } // End of ValidationForm
    // fire the event
    item.addEventListener('blur', function() {
      validationForm();
    }, false);
  } // end of function CheckIfISEmpty
  //  Create a list with all items the we need to be affected by this validation
  var listOfRequired = ['text', 'email'];
  // apply validation for all items
  for (var i = 0; i < listOfRequired.length; i++) {
    var item = document.querySelector('.field input[type=' + listOfRequired[i] + ']');
    if (item) {
      CheckIfISEmpty(item, 'sendSubs');
    }
  }
//-------------------------------------------------------------- validate the form input


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++form contact us send emailValue
$("body").on("contactLoaded", function(){
var butSendContact = document.getElementById('sendContact');
// console.log(butSendContact);
butSendContact.addEventListener('click', function(e) {
  e.preventDefault();
  var ajax = {
    send: function() {
      var uName = $(".cont-form  input[name=name]").val();
      var uTel = $(".cont-form  input[name=tel]").val();
      var uEmail = $(".cont-form  input[name=email]").val();
      var uComment = $(".cont-form  textarea").val();
      var textErrorForm = "Form is not completed ! \n";
      var notForm = document.createElement("p");
      var neText = document.createTextNode(textErrorForm);
      notForm.appendChild(neText);
      notForm.className = 'contactNotifDiv';
      // notForm.className = "validate-me";

      if (uName == "" || uEmail == "" || uTel== ""  ||uComment== "" ) {
        // alert("Form is not completed");
        butSendContact.parentElement.appendChild(notForm);
      } //end if
      else if (uName !== "" && uTel!== "" && uComment!== "" &&(validateEmail(uEmail))) {
        //remove child
        var listPF = document.querySelectorAll(".contactNotifDiv");
        for (var i = 0; i < listPF.length; i++) {
          butSendContact.parentElement.removeChild(listPF[i]);
        }
        //
        ajax.SetText("Sending...");
        $.post("php/contact.php", {
          name: uName,
          tel:uTel,
          email: uEmail,
          message: uComment
        }, function(data) {
          if (data.includes("true")) {
            ajax.SetText("Sent !");
            butSendContact.style.backgroundColor = "#0054A6";
            butSendContact.style.color = "#fff";

            $(".cont-form  input[name=name]").val("");
            $(".cont-form  input[name=tel]").val("");
            $(".cont-form  input[name=email]").val("");
            $(".cont-form  textarea").val("");

          } else {
            ajax.SetText("Subscribe");
          }
        }); //end post
      } else {
        textErrorForm += "Email is not Valid !"
        neText.textContent=textErrorForm;
        butSendContact.parentElement.appendChild(notForm);
        // console.log(textErrorForm);
      } //end else
    },
    SetText: function(text) {
      butSendContact.textContent = text;
    }
  } //end ajax
  ajax.send();
  // var a = $("button[type=submit]").val();
}, false);

});
//-----------------------------------------------------------form contact us send email



}); //end jquery

// Add google map on contact page
// var gMapsLoaded = false;
$("body").on("contactLoaded", function() {
  $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA4We3lNk83xzwvGqJ80eeHPfhjT-Jr6Yc&callback=myMap", function() {});
  window.myMap = function() {
    var mapCanvas = document.getElementById("c-map");
    if (mapCanvas) {
      var myCenter = new google.maps.LatLng(51.887053, -8.530565);
      var mapOptions = {
        center: myCenter,
        zoom: 16,
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
        mapTypeId: google.maps.MapTypeId.roadmap,
        styles: [

          {
            "elementType": "geometry",
            "stylers": [{
              "color": "#ebe3cd"
            }]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#523735"
            }]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#f5f1e6"
            }]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#c9b2a6"
            }]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#dcd2be"
            }]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#ae9e90"
            }]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dfd2ae"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dfd2ae"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#93817c"
            }]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#a5b076"
            }]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#447530"
            }]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f1e6"
            }]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
              "color": "#fdfcf8"
            }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f8c967"
            }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#e9bc62"
            }]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [{
              "color": "#e98d58"
            }]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#db8555"
            }]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#806b63"
            }]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dfd2ae"
            }]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#8f7d77"
            }]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#ebe3cd"
            }]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dfd2ae"
            }]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#b9d3c2"
            }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#92998d"
            }]
          }
        ]
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);
      var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
      });
      marker.setMap(map);
      var infowindow = new google.maps.InfoWindow({
        content: "SOLAQUA",
      });
      infowindow.open(map, marker);
    }
  }
});
