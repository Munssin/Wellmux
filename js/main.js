$('body').css('overflow-x', 'hidden');

$("#1, #m1").click(function() {
    $('html, body').animate({
        scrollTop: $("#features").offset().top
    }, 2000);
});

// $('#toggle').click(function () {
//     $(this).toggleClass('active');
//     $('#overlay').toggleClass('open');
//     // $('body').css('overflow-y', 'hidden');
// });
//
// $('.search').click(function () {
//   $('.dis_sea').css('display', 'block');
// });

$('.apple').click(function () {
  $('.apple').css('display', 'none');
  $('.andr').css('display', 'none');
  $('.wind').css('display', 'none');
  $('.downl').css('display', 'block');
})
$('.andr').click(function () {
  $('.apple').css('display', 'none');
  $('.andr').css('display', 'none');
  $('.wind').css('display', 'none');
  $('.downl').css('display', 'block');
})
$('.wind').click(function () {
  $('.apple').css('display', 'none');
  $('.andr').css('display', 'none');
  $('.wind').css('display', 'none');
  $('.downl').css('display', 'block');
})

function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
