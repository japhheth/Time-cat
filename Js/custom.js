
// Jquerry for home.html
$(document).ready(function(){
    $("#about").click(function(){
        $("#home").html('<h1 class="font">About</h1>' +
        '<p>We are driven by the high purpose of elimination of a manual check-in procedures in your company by members, which they find tasking.</p>');
        $(".side-nav").children().removeClass('active');
        $(this).addClass('active');
    });
    
    $("#whyUs").click(function(){
        $("#home").html('<h1 class="font">Why us</h1>'+
        '<li>Faster</li>'+
        '<li>Accurate</li>'+
        '<li>Just 2 clicks</li>'+
        '<li>Speed</li>');
        $(".side-nav").children().removeClass('active');
        $(this).addClass('active');
    });
    
    $("#hello").click(function(){
        $("#home").html('<h1 class="font">Contact us</h1>'+
        '<input type="email" placeholder="Your email"><br>'  +
        '<textarea rows="4" col="30" placeholder="Your message"></textarea><br>' +
        '<button class="btn">Done</button>');
        $(".side-nav").children().removeClass('active');
        $(this).addClass('active');
    });
    
    $('#toggle').click(function(){
        $(".hide").toggle('slide');
    });
    
    // Jquerry for the sign in page
    $('#click').click(function(){
        $(".hide").toggle('slide');
    });

    // JQuerry for the sign up page
    $('#clickMe').click(function(){
        $(".hide").toggle('slide');
    });
    
});

