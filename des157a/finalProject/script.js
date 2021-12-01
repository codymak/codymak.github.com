(function() {

    'use strict';
    console.log('reading js');

    var pageTop;
    var bodyTag = document.querySelector('body');
    window.addEventListener('scroll', function() {
        pageTop = window.pageYOffset;

        switch (true) {
            case pageTop < 750:
                bodyTag.className = "one";
                break;
            case pageTop < 2200:
                bodyTag.className = "two";
                break;
            case pageTop < 4500:
                bodyTag.className = "three";
                break;
            case pageTop < 6000:
                bodyTag.className = "four";
                break;
            default:
                bodyTag.className = "five"

        }

    });

    const sections = document.querySelectorAll('section');
    // var myBody= document.getElementById('thisBody');

    document.querySelector('#circle1').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[1].className = "overlay showing";

        // document.myBody.classList.add("bodyFreeze")
        topFunction();

    });

    document.querySelector('#circle2').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[2].className = "overlay showing";
        topFunction();
    });

    document.querySelector('#circle3').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[3].className = "overlay showing";
        topFunction();
    });

    document.querySelector('#circle4').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[4].className = "overlay showing";
        topFunction();
    });

    document.querySelector('#circle5').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[5].className = "overlay showing";
        topFunction();
    });




    // from glenda: you had the query selector looking for an id but you had defined leave as a class in the html
    document.querySelector('#leave1').addEventListener('click', function() {
        console.log('clicking button');
        sections[0].className = "showing";
        sections[1].className = "overlay hidden";

    });
    document.querySelector('#leave2').addEventListener('click', function() {
        console.log('clicking button');
        sections[0].className = "showing";
        sections[2].className = "overlay hidden";

    });
    document.querySelector('#leave3').addEventListener('click', function() {
        console.log('clicking button');
        sections[0].className = "showing";
        sections[3].className = "overlay hidden";

    });
    document.querySelector('#leave4').addEventListener('click', function() {
        console.log('clicking button');
        sections[0].className = "showing";
        sections[4].className = "overlay hidden";

    });
    document.querySelector('#leave5').addEventListener('click', function() {
        console.log('clicking button');
        sections[0].className = "showing";
        sections[5].className = "overlay hidden";

    });

    function topFunction() {
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

    // grab the element with id="leave", for example <div id="leave"></div>
    // document.getElementById('leave')
    // document.querySelector('#leave')

    window.addEventListener('load', function () {

        //define variables needed
        const posts = document.querySelectorAll('#allButtons div');
        let postTops = [];
        let pageTop;
        let counter = 1;
        let prevCounter = 1;
        let doneResizing;
    
        //see below for what this function does
        resetPagePosition();
    
        /* Everything in this event handler runs everytime the window 
        is scrolled just a little bit. Be careful about preformance */
        window.addEventListener('scroll', function () {
            pageTop = window.pageYOffset + 100;
            // console.log(pageTop);
    
            // if the user is scrolling down the page...
            if (pageTop > postTops[counter]) {
                counter++;
                console.log(`scrolling down ${counter}`);
            }
            // if the user is down the page and scrolling up
            else if (counter > 1 && pageTop < postTops[counter - 1]) {
                counter--;
                console.log(`scrolling up ${counter}`);
            }
    
            // when the section changes...
            if (counter != prevCounter) {
                // changes the class name on the image, which activates animation...
                document.querySelector('#circles').className = 'sect' + counter;
                prevCounter = counter;
            }
    
        }); // end window scroll function
    
        // this event handler fires while the window is being resized
        window.addEventListener('resize', function () {
    
            clearTimeout(doneResizing);
            // this runs after the window has stopped being resized...
            doneResizing = setTimeout(function () {
    
                resetPagePosition();
    
            }, 300);
        });
    
        // this function resets variables, which may have changed based on resizing
        function resetPagePosition() {
            postTops = [];
            posts.forEach(function (post) {
                postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
            });
    
            const pagePosition = window.pageYOffset + 100;
            counter = 0;
    
            postTops.forEach(function (post) { if (pagePosition > post) { counter++; } });
    
        }
    
    }); // end window load function


})();