(function() {
    'use strict';
    console.log('reading js');

    var myForm = document.querySelector('#myform');
    var madlib = document.querySelector('#madlib');


    document.addEventListener('keydown', function(event) {
        if(event.key === 'Escape'){
            document.getElementById('container1').className = 'blueContainer showing';
            document.getElementById('titleName').className = 'showing';
            document.getElementById('container2').className = "hidden";
        }
    });



    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        document.getElementById('container1').className = 'blueContainer hidden';
        document.getElementById('titleName').className = 'hidden';
        document.getElementById('container2').className = 'blueContainer showing';
   


        var noun1 = document.querySelector('#q1').value;
        var noun2 = document.querySelector('#q2').value;
        var noun3 = document.querySelector('#q3').value;
        var noun4 = document.querySelector('#q4').value;
        var noun5 = document.querySelector('#q5').value;
        var noun6 = document.querySelector('#q6').value;
        var noun7 = document.querySelector('#q7').value;


        // noun1.style.color = "blue";

        var formData = document.querySelectorAll("input[type=text]");



        for (var eachField of formData){
            eachField.value = "";
        }
        
        var myText;
        if (noun1 && noun2 && noun3 && noun4 && noun5 && noun6 && noun7){

            myText = `As a ${noun1}, you are bound to tackle many challenges that will help you achieve your goals. When life is moving, it is completely okay to be ${noun6} for anything. There will always be days when you will feel ${noun2}. Like ${noun3}, you will endure great growth and blossom into a beautiful being.

            Today, look for something ${noun4} and give it to a ${noun5}. This person will enjoy your companionship and will perhaps thank you for being in their life. Eat something sweet like ${noun7}, and rest easy for the next day. Today is your day, and your future will shine even brighter tomorrow`;

            document.getElementById('container2').append(myText);
            // document.getElementById('container2').innerHTML = myText;
        }
        else{
            myText = "Please complete the form so I can make your Mad Lib!"

        }

        // madlib.innerHTML = myText;

    
        // let myP = document.querySelector('#cheese');
        // myP.innerHTML = "I really love <b>cheese</b>"
    });

   

})();