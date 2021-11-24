(function() {

    'use strict';
    console.log('reading js');

    var pageTop;
    var bodyTag = document.querySelector('body');
    window.addEventListener('scroll', function() {
        pageTop = window.pageYOffset;

        switch (true) {
            case pageTop < 500:
                bodyTag.className = "one";
                break;
            case pageTop < 1000:
                bodyTag.className = "two";
                break;
            case pageTop < 1500:
                bodyTag.className = "three";
                break;
            case pageTop < 2000:
                bodyTag.className = "four";
                break;
            default:
                bodyTag.className = "five"

        }

    });

    const sections = document.querySelectorAll('section');


    document.querySelector('#circle1').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[1].className = "overlay showing";
    });

    document.querySelector('#circle2').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[2].className = "overlay showing";
    });

    document.querySelector('#circle3').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[3].className = "overlay showing";
    });

    document.querySelector('#circle4').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[4].className = "overlay showing";
    });

    document.querySelector('#circle5').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[5].className = "overlay showing";
    });




    // from glenda: you had the query selector looking for an id but you had defined leave as a class in the html
    document.querySelector('#leave1').addEventListener('click', function() {
        console.log('clicking button');
        sections[0].className = "show";
        sections[1].className = "overlay hidden";

    });
    document.querySelector('#leave2').addEventListener('click', function() {
        console.log('clicking button');
        sections[0].className = "show";
        sections[2].className = "overlay hidden";

    });
    document.querySelector('#leave3').addEventListener('click', function() {
        console.log('clicking button');
        sections[0].className = "show";
        sections[3].className = "overlay hidden";

    });
    document.querySelector('#leave4').addEventListener('click', function() {
        console.log('clicking button');
        sections[0].className = "show";
        sections[4].className = "overlay hidden";

    });
    document.querySelector('#leave5').addEventListener('click', function() {
        console.log('clicking button');
        sections[0].className = "show";
        sections[5].className = "overlay hidden";

    });

    // grab the element with id="leave", for example <div id="leave"></div>
    // document.getElementById('leave')
    // document.querySelector('#leave')



})();