var helloWorld = document.getElementsByClassName("banner-slider");


$(helloWorld, '.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

console.log('helloWorld')