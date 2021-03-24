$(function () {
    // su khac nhau giua var let const

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: `<div class="prevButton">3/3</div>`,
        nextArrow: `<div class="nextButton">2/3</div>`,
    });

    $('.client-avatar').slick({
        centerMode: true,
        arrows: false,
        centerPadding: '60px',
        slidesToShow: 5,
        infinite: true,
        autoplay: false,
        speed: 500,
        asNavFor: '.client-information, .client-name',
        swipe: true,
        focusOnSelect: true,
    });
    $('.client-information').slick({
        asNavFor: '.client-avatar, .client-name',
        arrows: false,
        swipe: true,
    });
    $('.client-name').slick({
        asNavFor: '.client-information, .client-avatar',
        arrows: false,
        swipe: true,
    });
    
    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        responsive: [{
            breakpoint: 991,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });

    $('.post-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 300,
        swipe: true,
        responsive: [{
            breakpoint: 991,
            settings:{
                slidesToShow: 2,
                slidesToScroll:1,
            }
        }]
    });

// ================CUSTOMIZE================

    $(".slider").on("beforeChange", function () {
        let indexActive = $(".banner .slider .slick-active").attr("data-slick-index");
        // $(".banner .slider .prevButton").text(indexActive -1);
        indexActive = parseInt(indexActive, 10) + 1;

        let lengthSlick = $(".banner .slider .slick-slide").length;
        console.log("slide so "+ indexActive);
        if (indexActive == lengthSlick) {
            $(".banner .slider .nextButton").text(1 + "/3");
            // console.log(indexActive);
            $(".banner .slider .prevButton").text(indexActive - 1 +"/3");

        } else if (indexActive == 1) {
            $(".banner .slider .prevButton").text(lengthSlick  +"/3");
            $(".banner .slider .nextButton").text(indexActive + 1  +"/3");

        } else {
            $(".banner .slider .nextButton").text(indexActive + 1  +"/3");
            $(".banner .slider .prevButton").text(indexActive - 1  +"/3");
        }
        
    });
})

// $(".collection div").hover(
//     function () {
//       $('.collection div i').addClass('show-plus-icon');
//     }, 
//     function () {
//       $('.collection div i').removeClass('show-plus-icon');
//     }
//     );
    $(document).ready(function(){
        $(".collection .div-1").hover(
            function(){
                $(".collection .div-1 .icon-1").toggleClass('show-plus-icon');
                $('.collection .div-1 img').toggleClass('up-scale');
            }
        );
        $(".collection .div-2").hover(
            function(){
                $(".collection .div-2 .icon-2").toggleClass('show-plus-icon');
                $('.collection .div-2 img').toggleClass('up-scale');
            }
        );
        $(".collection .div-3").hover(
            function(){
                $(".collection .div-3 .icon-3").toggleClass('show-plus-icon');
                $('.collection .div-3 img').toggleClass('up-scale');
            }
        );
        $(".collection .div-4").hover(
            function(){
                $(".collection .div-4 .icon-4").toggleClass('show-plus-icon');
                $('.collection .div-4 img').toggleClass('up-scale');
            }
        );
    });

    $(document).ready(function(){
        $('.team-slider .linkedin').hover(function(){
            $('.team-slider .linkedin i').toggleClass('change-color-icon');
        });
        $('.team-slider .facebook').hover(function(){
            $('.team-slider .facebook i').toggleClass('change-color-icon');
        });
        $('.team-slider .twitter').hover(function(){
            $('.team-slider .twitter i').toggleClass('change-color-icon');
        });
    });