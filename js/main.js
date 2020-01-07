jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 48
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });
});

var last_option=null;
function show_more(option) {
    if(option!=last_option){
        var elt=document.getElementsByName("more")[option-1];
        elt.style="height:400px;opacity: 1.0;";
        elt.src="./subpages/more_"+["convictions","parcours","ecosysteme"][option-1]+".html";
        last_option=option;
    } else {
        option=2;
        last_option=0;
    }

    for(var i=0;i<1;i++){
        if(i!=option-1)
            document.getElementsByName("more")[i].style="height:0px;opacity:0.0;"
    }
}

