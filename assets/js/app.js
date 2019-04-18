//Import Jquery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//Image zoom
var modal = document.getElementById('myModal');

var img = $('.myImg');
var modalImg = $("#img01");
$('.myImg').click(function () {
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
});

//Close Button
$(".close").click(function () {
    modal.style.display = "none";
});

//Logo rotation
// $(document).onload(function () {
//     var bodyHeight = $("body").height() - $(window).height();
//     window.onscroll = function () {

//         //Determine the amount to rotate by
//         var deg = -window.scrollY * (360 / bodyHeight)/2500;

//         $("#logo").css({
//             "transform": "rotate(" + deg + "deg)",
//         });

//     };
// });

window.onload = function () {
    var bodyHeight = $("body").height() - $(window).height();
    window.onscroll = function () {
        $("#logo").css({
            "transform": "rotate(" + deg + "deg)",
        })
        var deg = -window.scrollY * (360 / bodyHeight);
        $("#logo").css({
            "transform": "rotate(" + deg + "deg)",
        });
    };
};