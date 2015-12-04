$(document).ready(function() {

// $("body").css({"padding-top": $(".head-section").height() + "px"});


    // var oddThumbnail = document.getElementsByClassName("testimonial-txt")[1];

    // oddThumbnail.styleText = "background:rgba(158, 137, 112, .8); margin:30px 0 0 -20px";
    
// 

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

//

$(".top-triangle").css({"border-left":$(".main-navigation").width() + 20 + "px solid transparent"});

$(".left-triangle").css({"border-top":$(".main-navigation").outerHeight(true) + "px solid #507323"});

$(".right-triangle").css({"border-top": ( $(".main-navigation").outerHeight(true)) + "px solid #507323"});

$(".quote-triangle:odd").css({"border-top": "35px solid rgba(158, 137, 112, .8)"});


$(window).resize( function() {

    $(".top-triangle").css({"border-left":$(".main-navigation").width() + 20 + "px solid transparent"});
    $(".left-triangle").css({"border-top":$(".main-navigation").outerHeight(true) + "px solid #507323"});

    $(".right-triangle").css({"border-top": ( $(".main-navigation").outerHeight(true)) + "px solid #507323"});

    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    if(bodyWidth >= 768) {

    $(".testimonial-txt:odd").css({"margin":"30px 0 0 -20px"});
    } else {

        $(".testimonial-txt:odd").css({"background": "rgba(158, 137, 112, .8)",
                                        "margin":"0"
                                    });
    }


    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // if( bodyWidth <= 768 ) {

    //     // $("</div><div>").insertAfter($(".testimonial-sl:even"));
    //     // $("<li>").insertBefore($(".testimonial-sl:odd"));

    //     var ul = document.body.children[0];

    //     var li5 = ul.children[2];

    //     var evItem = document.getElementsByClassName("testimonial-sl")[1];

    //     evItem .insertAdjacentHTML("beforeBegin", "</li>");


    // }





});







    if(bodyWidth >= 768) {

        $(".testimonial-txt:odd").css({"background": "rgba(158, 137, 112, .8)",
                                        "margin":"30px 0 0 -20px"
                                    });

    } else {

        $(".testimonial-txt:odd").css({"background": "rgba(158, 137, 112, .8)",
                                        "margin":"0"
                                    });

    }



    // document.getElementsByClassName("testimonial-txt")[1].styleText = "border-top: 35px solid rgba(0, 0, 0, .8)";

    // getComputedStyle($(".testimonial-txt:odd"), ':after').border = "35px solid rgba(158, 137, 112, .8)";

    // $(".testimonial-txt:odd").css({"border-top": "35px solid rgba(158, 137, 112, .8)"});

    // var pseudo = document.querySelector(".testimonial-txt");
    // result = getComputedStyle(pseudo,":after").content;

    // console.log(result +"   "+getComputedStyle(pseudo,":after"));

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


            $(".navigationg-news-slider .prew").click(function() {

                $(".news_slider .flex-nav-prev .flex-prev").click();

            });

            $(".navigationg-news-slider .next").click(function() {

                $(".news_slider .flex-nav-next .flex-next").click();

            });



});