$(document).ready(function() {

// var sliderWidth = $(".slider").width();
// var slideWidth = $(".slide").width();
var indexSlide;
var countSlides = $(".news-slide").length;
var countIndex;
var countVisibleSlides;
var countSlidesOnRow;
var lastVisibleIndex;

var prewBtn = $(".prew");
var nextBtn = $(".next");

var indexVisibleSlide = countVisibleSlides;

var leftPosition = 0;

var slidersHeight = [];

var resizeWindowDone = false;

// var sliderWidth = document.getElementsByClassName("slider")[0].offsetWidth;
// var slideWidth = document.getElementsByClassName("slide")[0].offsetWidth;
var positionSlides;

// 

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

// 

// var sliderBox;
// var thumbnailBox;
// var prewBtn;
// var nextBtn;



// function slideShow(sliderBox,thumbnailBox,prewBtn,nextBtn) {


getWidthSliders();


var countSlResize = Math.round( parseInt( $(".news-slider").css("width") ) / parseInt( $(".news-slide").css("width") ) );


$(window).resize(function() {

    var secondBodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    if(bodyWidth != secondBodyWidth) {

        clearInterval(setPosition);

        var setPosition = setTimeout(function() {

        var visibleSlOnResize = Math.round( parseInt( $(".row").css("width") ) / parseInt( $(".news-slide").css("width") ) );

        console.log(visibleSlOnResize +"   "+ countSlResize);    

        var forCicklum = 0;    

        if( visibleSlOnResize == 1 ) {

            var indexVisible = $(".news-slide:visible").first().index();

            $(".news-slide").css({"display":"none"});

            $(".news-slide:eq("+ indexVisible +")").css({"display":"block"});

        }

        if (countSlResize != visibleSlOnResize) {

            var indexVisible = $(".news-slide:visible").first().index();

            $(".news-slide").css({"display":"none"});

            forCicklum = visibleSlOnResize - 1;

            for (countSlResize = indexVisible; countSlResize <= (indexVisible + visibleSlOnResize - 1); countSlResize++) {

                $(".news-slide:eq("+ countSlResize +")").css({"display":"block"});

            }

        }

             console.log(visibleSlOnResize +"   "+ countSlResize);



        }, 100);


      

        if(countVisibleSlides > 1) {

            var firstStep =  $(".news-slide:visible").first().index();
            var lastStep =  $(".news-slide:visible").last().index();

        } else {
            var lastStep =  1;
        }

        for(countIndex = firstStep; countIndex <= $(".news-slide").length - 1; countIndex++) {

            // $(".news-slide:eq("+ countIndex +")").text(countIndex + 1);

            slidersHeight.push($(".news-slide:eq("+ countIndex +")").outerHeight(true));

        }

        maxHeightOfSliders = Math.max.apply(null, slidersHeight);

        $(".news-slider").height(maxHeightOfSliders);


        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    }

});


    prewBtn.click(function() {

        var firstVisibleIndex =  $(".news-slide:visible").first().index();

        var lastPrewVisibleSl = firstVisibleIndex - 1;
        var firstPrewVisibleSl = firstVisibleIndex - countVisibleSlides;

        console.log(firstVisibleIndex +"  "+firstPrewVisibleSl);

        $(".news-slide").css({"display":"none"});
        
        for (countSlidesOnRow = firstPrewVisibleSl ; countSlidesOnRow <= lastPrewVisibleSl; countSlidesOnRow++) {

            $(".news-slide:eq("+ countSlidesOnRow +")").stop().fadeIn(500);

        }

    });


    nextBtn.click(function() {

        countVisibleSlides = Math.round( parseInt( $(".news-slider").css("width") ) / parseInt( $(".news-slide").css("width") ) );

        lastVisibleIndex =  $(".news-slide:visible").last().index();

        if(lastVisibleIndex == $(".news-slide").length - 1) {

            lastVisibleIndex = -1;

            console.log(lastVisibleIndex);

        }

        $(".news-slide").css({"display":"none"});

        for (countSlidesOnRow = lastVisibleIndex + 1; countSlidesOnRow <= countVisibleSlides + lastVisibleIndex; countSlidesOnRow++) {

            $(".news-slide:eq("+ countSlidesOnRow +")").stop().fadeIn(500);

        }

        // lastVisibleIndex =  $(".news-slide:visible").last().index();

    });





    function getWidthSliders() {

       
        countVisibleSlides = Math.round( parseInt( $(".news-slider").css("width") ) / parseInt( $(".news-slide").css("width") ) );

        for(countIndex = 0; countIndex <= $(".news-slide").length - 1; countIndex++) {

            // $(".news-slide:eq("+ countIndex +")").text(countIndex + 1);

            slidersHeight.push($(".news-slide:eq("+ countIndex +")").outerHeight(true));

        }

        console.log(countVisibleSlides);


        maxHeightOfSliders = Math.max.apply(null, slidersHeight);

        $(".news-slider").height(maxHeightOfSliders);
        
            leftPosition = -1;

            countSlidesOnRow = 0;

            for (countSlidesOnRow = 0; countSlidesOnRow <= countVisibleSlides - 1; countSlidesOnRow++) {

                leftPosition++;

                $(".news-slide:eq("+ countSlidesOnRow +")").css({"display":"block"});

            }
            
            leftPosition = 0;

    }


// }


});