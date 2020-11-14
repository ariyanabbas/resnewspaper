
$(document).ready(function(){
    var height = $('#header-fixe').height();
$ (window).scroll(function(){
    if($(this).scrollTop() > height){
        $('#header-fixe') .addClass('fixed');

    }
    else{
        $('#header-fixe') .removeClass('fixed')
    }
});


  $(".menu-toogle-btn").click(function(){
    $(".dropdown-memu ").toggleClass("toogle-btn");
  });



});
