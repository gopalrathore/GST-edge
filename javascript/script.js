$(document).ready(function () {

  $( function() {
    $( ".datepicker" ).datepicker();
  } );

  $('.note').click(function(e){
    e.preventDefault();
    $(this).parent().siblings('.window-popup').show(300);
  });

  $('.button-popup-close').click(function(e){
    e.preventDefault();
    console.log("clicked");
    $('.window-popup').hide(300);
  });

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!

  var yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd;
  }
  if(mm<10){
      mm='0'+mm;
  }
  var today = dd+'/'+mm+'/'+yyyy;
  document.getElementById("sign-date").value = today;

  $('input').on('input', function(){
  $(this).siblings('span').addClass('float-label');
  });

  $( "input" ).keyup(function(e) {
    if(e.target.value.length<1){
    $(this).siblings('span').removeClass('float-label');
    }
  });


  // Smooth scroll down effect
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});
