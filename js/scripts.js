$(document).ready(function() {

// $("body").css({"padding-top": $(".head-section").height() + "px"});


    // var oddThumbnail = document.getElementsByClassName("testimonial-txt")[1];

    // oddThumbnail.styleText = "background:rgba(158, 137, 112, .8); margin:30px 0 0 -20px";
                       
    $(".testimonial-txt:odd").css({"background": "rgba(158, 137, 112, .8)",
                                    "margin":"30px 0 0 -20px"
                                });

    // document.getElementsByClassName("testimonial-txt")[1].styleText = "border-top: 35px solid rgba(0, 0, 0, .8)";

    // getComputedStyle($(".testimonial-txt:odd"), ':after').border = "35px solid rgba(158, 137, 112, .8)";

    // $(".testimonial-txt:odd").css({"border-top": "35px solid rgba(158, 137, 112, .8)"});

    var pseudo = document.querySelector(".testimonial-txt");
    result = getComputedStyle(pseudo,":after").content;

    console.log(result +"   "+getComputedStyle(pseudo,":after"));

    // var obj = getComputedStyle(pseudo,":after");

    // obj.style.borderTop = "35px solid rgba(158, 137, 112, .8)";








// Show or hide ".scroll-to-top" button 
	function getScrollToTopBtn() {

		if ($(window).scrollTop() > $('.head-section').height() ) {

        	$('.scroll-to-top').fadeIn();

        } else {

            $('.scroll-to-top').fadeOut();

        }

	}

 
    // $('.scroll-to-top').click(function () {

    //     $('body,html').animate({

    //         scrollTop: 0

    //     }, 1000);

    //     return false;

    // });

});