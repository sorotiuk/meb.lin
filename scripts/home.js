/**
 * Created by admin on 28.04.17.
 */

console.log("start js logic");


$("#myCarousel").on("slide.bs.carousel", function () {
    $( ".hero-title-description" ).animate({
        opacity: 0,
        marginTop: 300,
    }, 400).delay(300);
    $( ".hero-title" ).animate({
        opacity: 0,
        marginLeft: 300,
    }, 600);
})

$("#myCarousel").on("slid.bs.carousel", function () {
    $( ".hero-title" ).animate({
        opacity: 1,
        marginLeft: 0,
    }, 400);
    $( ".hero-title-description" ).animate({
        opacity: 1,
        marginTop: 0,
    }, 600);
})