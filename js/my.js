var $ = require('jquery');
$(function() { //begin

// TAGGLE MENU
  var toggle=document.getElementById('nav-toggle');
  function showToggle(){
    var resNav=document.getElementById('responsive-nav');
    if(resNav.className==='responsive-nav'){
      resNav.className+=' show';
    }else{
      resNav.className='responsive-nav';
      console.log(resNav.className);

    }
  }
  toggle.addEventListener('click',function(e){
    e.preventDefault();
    showToggle();
  },false);

  // ACTIVE MENU
var myClass='actClass';
var lis= document.querySelectorAll("#responsive-nav a");
for(var i=0;i<lis.length;i++){
  lis[i].addEventListener("click", function(){
   var curentclas=this.className;
   var clk=document.querySelectorAll(".actClass");
   for(var i=0;i<clk.length;i++){
     clk[i].className='';
   }
    this.className=myClass;
   });
}
// PAGE transition   //smooth scrolling
$(document).ready(function() {
  var scrollLink=$('.scroll');

  scrollLink.click( function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    },1000);
  });
});



















});//end
