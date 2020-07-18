$(document).ready(function() {
    $('.nav-menu-icon').bind('click',function(event){
        $('nav > ul > li').slideToggle(10);
    });

    $(window).resize(function(){  
        if($(window).width() > 805) {  
            $('nav > ul > li, .social-icons').removeAttr('style');  
        }  
    });  
  });