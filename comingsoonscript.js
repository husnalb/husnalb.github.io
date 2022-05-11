$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // Notify me button
    $('form p#incomplete-label').on('click', function(e) {
        if ($(this).closest('form').hasClass('closed')) {
            $(this).closest('form').removeClass('closed').addClass('open').setTimeout(function() {
                $('form').find('input[type="email"]').focus();
            }, 1000);
    
        }
    });
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        $('form').addClass('complete').setTimeout(function() {
            $('form').find('input[type="email"]').val('');
        }, 200);;
    });
    
    var testEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    $('input#email').bind('input propertychange', function() {
        if (testEmail.test(jQuery(this).val())) {
            $('form').removeClass('invalid').addClass('valid');
        } else {
            $('form').addClass('invalid').removeClass('valid');
        }
    });
});
