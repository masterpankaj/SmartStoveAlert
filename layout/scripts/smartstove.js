(function () {
    emailjs.init("user_XrzzeQbqALn19D64MH8O9");
})();

var myform = $("form#checkOutForm");

myform.submit(function (event) {
    event.preventDefault();

    var params = myform.serializeArray().reduce(function (obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});

    // Change to your service ID, or keep using the default service
    var service_id = "default_service";
    var template_id = "smartstove";
   
    myform.find("button").text("Processing...");
    emailjs.send(service_id, template_id, params)
        .then(function () {
            //alert("Sent!");
            myform.find("button").text("Next : Proceed Billing Information");
            /***************************************************************************/
            var hidden = $('.hidden');

            if (hidden.hasClass('visible')) {
                hidden.animate({ "left": "-1000px" }, 1).removeClass('visible');
            } else {
                hidden.animate({ "left": "200px" }, "slow").addClass('visible');
                $('#checkoutcontent').hide();
                $('.modal-content').height(200);
            }
            /***************************************************************************/
        }, function (err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            myform.find("button").text("Next : Proceed Billing Information");
        });
    return false;
});

var subscribeForm = $("form#subscribe");

subscribeForm.submit(function (event) {
    event.preventDefault();

    var params = subscribeForm.serializeArray().reduce(function (obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});

    // Change to your service ID, or keep using the default service
    var service_id = "default_service";
    var template_id = "subscribe";

    subscribeForm.find("button").text("Processing...");
    emailjs.send(service_id, template_id, params)
        .then(function () {
            //alert("Sent!");
            subscribeForm.find("button").text("Subscribe");

        }, function (err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            subscribeForm.find("button").text("Next : Proceed Billing Information");
        });
    return false;
});


$(document).ready(function () {

    $('#buynow').click(function () {

        $('#checkoutcontent').show();
        var hidden = $('.hidden');

        $('.modal-content').removeAttr("style");

        if (hidden.hasClass('visible')) {
            hidden.animate({ "left": "-1000px" }, 1).removeClass('visible');
        }
    });

    /************************************************/
    $("#gallery").unitegallery();
});

// Get the modal
var modal = document.getElementById('myModal');


// Get the button that opens the modal
var btn = document.getElementById("buynow");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {

    //modal.style.display = "block";
    $("#myModal").delay(200).fadeIn();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'fade',
    grabCursor: true,
    touchRatio: 5,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

