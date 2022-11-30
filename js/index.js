const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    }
});
const zoomImage = document.querySelectorAll('.img-zoom');


function animateImg(el, scale, duration, elasticity) {
    anime.remove(el);
    anime({
        targets: el,
        scale: scale,
        duration: duration,
        elasticity: elasticity
    });
}

function enterButton(el) {
    animateImg(el, 1.1, 10000, 0)
};

function leaveButton(el) {
    animateImg(el, 1.0, 10000, 0)
};

for (var i = 0; i < zoomImage.length; i++) {
    zoomImage[i].addEventListener('mouseenter', function (e) {
        enterButton(e.target);
    }, false);

    zoomImage[i].addEventListener('mouseleave', function (e) {
        leaveButton(e.target)
    }, false);
}


function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
