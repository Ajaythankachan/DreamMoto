// $(document).ready(function () {

//     var curPage = 1;
//     var numOfPages = $(".skw-page").length;
//     var animTime = 1000;
//     var scrolling = false;
//     var pgPrefix = ".skw-page-";

//     function pagination() {
//         scrolling = true;

//         $(pgPrefix + curPage).removeClass("inactive").addClass("active");
//         $(pgPrefix + (curPage - 1)).addClass("inactive");
//         $(pgPrefix + (curPage + 1)).removeClass("active");

//         setTimeout(function () {
//             scrolling = false;
//         }, animTime);
//     };

//     function navigateUp() {
//         if (curPage === 1) return;
//         curPage--;
//         pagination();
//     };

//     function navigateDown() {
//         if (curPage === numOfPages) return;
//         curPage++;
//         pagination();
//     };

//     $(document).on("mousewheel DOMMouseScroll", function (e) {
//         if (scrolling) return;
//         if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
//             navigateUp();
//         } else {
//             navigateDown();
//         }
//     });

//     $(document).on("keydown", function (e) {
//         if (scrolling) return;
//         if (e.which === 38) {
//             navigateUp();
//         } else if (e.which === 40) {
//             navigateDown();
//         }
//     });

// });


/*----------  Menu sticky ----------*/

var windows = $(window);
var screenSize = windows.width();
var sticky = $('.header-sticky');
// var stickyAbsolute = $('.header-sticky--absolute');
var $html = $('html');
var $body = $('body');


windows.on('scroll', function () {
    passive: false;
    console.log("keeriyo");
    var scroll = windows.scrollTop();
    var headerHeight = sticky.height();
    var headerHeightAbsolute = stickyAbsolute.height();

    if (screenSize >= 992) {
        if (scroll < headerHeight) {
            sticky.removeClass('is-sticky');
        } else {
            sticky.addClass('is-sticky');
        }

        if (scroll < headerHeightAbsolute) {
            stickyAbsolute.removeClass('is-sticky--absolute');
        } else {
            stickyAbsolute.addClass('is-sticky--absolute');
        }
    }



    //code for scroll top

    if (scroll >= 400) {
        $('#scroll-top').fadeIn();
    } else {
        $('#scroll-top').fadeOut();
    }

});
let homeNav = document.getElementById('home-nav');
let aboutNav = document.getElementById('about-nav');
let productNav = document.getElementById('product-nav');
let productDetailsNav = document.getElementById('product-details-nav');
let contactNav = document.getElementById('contact-nav');


// Navigation click 
function homeClick() {
    let bannerSec = document.getElementById('banner-sec');
    bannerSec.classList.add('active');
}
homeNav.addEventListener("click", homeClick);
// about 
function aboutClick() {
    let aboutSec = document.getElementById('about');
    aboutSec.classList.add('active');
}
aboutNav.addEventListener("click", aboutClick);
// product
function productClick() {
    let productSec = document.getElementById('product');
    productSec.classList.add('active');
}
productNav.addEventListener("click", productClick);

$("body").hasClass("intro")