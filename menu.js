var xAngle = 0,
    yAngle = 0;
document.addEventListener('keydown', function(e) {

    switch (e.keyCode) {

        case 37: // left
            yAngle -= 90;
            break;

        case 38: // up
            xAngle += 90;
            break;

        case 39: // right
            yAngle += 90;
            break;

        case 40: // down
            xAngle -= 90;
            break;
    };
    $('.pageOrigin').css('webkitTransform', "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
    $('.pageOrigin').css('-moz-transform', "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
}, false);

$(document).ready(function() {

    $('.primaryPage a').on('click', function() {
        console.log('hit');
        yAngle -= 90;
        $('.pageOrigin').css('webkitTransform', "scale(0.8)");
        $('.pageOrigin').css('-moz-transform', "scale(0.8)");

        setTimeout(function() {
            $('.pageOrigin').css('webkitTransform', "scale(0.8) rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
            $('.pageOrigin').css('-moz-transform', "scale(0.8) rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
        }, 1000);

        setTimeout(function() {
            $('.pageOrigin').css('webkitTransform', "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
            $('.pageOrigin').css('-moz-transform', "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
        }, 2000);
    });

    $('.secondaryPage a').on('click', function() {
        yAngle += 90;
        $('.pageOrigin').css('webkitTransform', "scale(0.8) rotateY(-90deg)");
        $('.pageOrigin').css('-moz-transform', "scale(0.8) rotateY(-90deg)");

        setTimeout(function() {
            $('.pageOrigin').css('webkitTransform', "scale(0.8) rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
            $('.pageOrigin').css('-moz-transform', "scale(0.8) rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
        }, 1000);

        setTimeout(function() {
            $('.pageOrigin').css('webkitTransform', "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
            $('.pageOrigin').css('-moz-transform', "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
        }, 2000);
    });
});