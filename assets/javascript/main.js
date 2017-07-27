 $(document).ready(function(){
  setTimeout(function(){
        $("#preloader").fadeOut(2000);
        $("#container").css("overflow-y","scroll");
    },2000);
        new WOW().init();
       var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
   
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
     
     $('.jq').LineProgressbar({

  percentage: 90 ,
         duration: 60000,
  fillBackgroundColor: 'red',
         width:'80',

  backgroundColor: '#EEEEEE',

  radius: '0px',

  height: '10px',

  width: '100%'

});
   
     $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 60000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


      

 
    });
