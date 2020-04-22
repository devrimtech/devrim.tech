
var buttonElem = document.querySelector('#finishButton');
var buttonElemBetter = document.getElementsByClassName('finishButton');
var challengeOne = document.getElementById('challenge1');
var challengeTwo = document.getElementById('challenge2');
var challengeThree = document.getElementById('challenge3');
var challenges = document.getElementsByClassName('challenges');
var pointsText = document.getElementById('points');
//var finishButtOne = document.getElementById('finishButtonOne');
//var finishButtonOne = document.getElementById('finishButtonOne');
//var finishButtonTwo = document.getElementById('finishButtonTwo');
//var finishButtonThree = document.getElementById('finishButtonThree');
//var finishButtonFour = document.getElementById('finishButtonFour');
//var finishButtonFive = document.getElementById('finishButtonFive');
var greenPoints = 0;
//url(https://s2.best-wallpaper.net/wallpaper/1920x1080/1610/Nature-forest-trees-pines-fog_1920x1080.jpg) no-repeat center;


function updateClickCount() {
  document.getElementById("clickCount").innerHTML = greenPoints;
}

function move() {
    var id = document.getElementById("challengeprogress");
    var d = new Date();
    var second = d.getSeconds();
    var width = second * 8;
    id.style.width = width + "px";
    var interval = setInterval(change, 125)
    function change(){
        if (width >= 480){
            id.style.width = 480 + "px";
            clearInterval(interval);
            move();
            generateChallenge3();
            timer();
            showAll();
        } 
             timer();
            width += 1;
            if (width > 480){
                width = 480;
            }
            id.style.width = width + "px";
    }
  }

  function timer(){
      var id = document.getElementById("timer");
      var d = new Date();
      var second = 60 - d.getSeconds() + "";
      if (second < 10){
          second = "0" + second;
      }
      document.getElementById("timer").innerHTML = "00:" + second;
  }


function generateChallenge() {

  var myArray = [
    "Challenge 1",
    "Challenge 2",
    "Challenge 3",
    "Challenge 4",
    "Challenge 5",
    "Challenge 6",
    "Challenge 7",
    "Challenge 8",
    "Challenge 9",
    "Challenge 10",
    "Challenge 11",
    "Challenge 12",
    "Challenge 13",
    "Challenge 14",
    "Challenge 15",
    "Challenge 16",
    "Challenge 17",
    "Challenge 18",
    "Challenge 19",
    "Challenge 20",
  ]; 

  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  var randomItem2 = myArray[Math.floor(Math.random()*myArray.length)];
  var randomItem3 = myArray[Math.floor(Math.random()*myArray.length)];
  var randomItem4 = myArray[Math.floor(Math.random()*myArray.length)];
  var randomItem5 = myArray[Math.floor(Math.random()*myArray.length)];
  document.getElementById("challenge1").innerHTML = randomItem;
  document.getElementById("challenge2").innerHTML = randomItem2;
  document.getElementById("challenge3").innerHTML = randomItem3;
  document.getElementById("challenge4").innerHTML = randomItem4;
  document.getElementById("challenge5").innerHTML = randomItem5;
  
}

function generateChallenge3(){
    var myArray = [
        "Avoid single-use products, resort to reusable items.",
        "Make sure you turn off your lights when you leave a room." ,
        "Bike, walk, or carpool your way to your destination." ,
        "Don't waste food (compost or give it to someone in need)." ,
        "Go vegan for one meal." ,
        "Pick up ten pieces of trash." ,
        "Save electricity by using natural lighting." ,
        "Limit your water usage, re-use your water (from handwashing, showering, etc.) to water some plants." ,
        "Support sustainable businesses." ,
        "Inform someone about sustainability and or this website." ,
        "Hang clothes to dry instead of using the dryer." ,
        "Create a detailed shopping list that will avoid excess food and plastic.",
        "Take a cold shower." ,
        "Convince someone to go vegetarian for a day." ,
        "Install energy-efficient appliances." ,
        "Donate or resell 6 unwanted item." ,
        "Volunteer in an organization’s cleaning event." ,
        "Plant something to offset your carbon footprint." ,
        "Avoid buying clothes that were produced from fast fashion (i.e don’t buy “Made in China” products)." ,
        "Boycott products that endanger wildlife."
    ]; 
    
    var d = new Date();
    var seed = (d.getMinutes() * d.getHours());
    while(seed > 19){
        seed = seed - 20;
    }
    if (seed < 1){
        seed = 1;
    }
    document.getElementById("challenge1").innerHTML = myArray[seed++];
     if (seed > 19){
         seed = 1;
     }
    document.getElementById("challenge2").innerHTML = myArray[seed++];
    if (seed > 19){
        seed = 1;
    }
    document.getElementById("challenge3").innerHTML = myArray[seed++];
    if (seed > 19){
        seed = 1;
    }
    document.getElementById("challenge4").innerHTML = myArray[seed++];
    if (seed > 19){
        seed = 1;
    }
    document.getElementById("challenge5").innerHTML = myArray[seed++];

}

function hideOne(){
    document.getElementById("challenge1").innerHTML += " ✓";
    document.getElementById('finishButtonOne').style.visibility = "hidden";
    document.getElementById('challenge1').style.color = "#7befb2";
}

function hideTwo(){
    document.getElementById("challenge2").innerHTML += " ✓";
    document.getElementById('finishButtonTwo').style.visibility = "hidden";
    document.getElementById('challenge2').style.color = "#7befb2";
}

function hideThree(){
    document.getElementById("challenge3").innerHTML += " ✓";
    document.getElementById('finishButtonThree').style.visibility = "hidden";
    document.getElementById('challenge3').style.color = "#7befb2";
}

function hideFour(){
    document.getElementById("challenge4").innerHTML += " ✓";
    document.getElementById('finishButtonFour').style.visibility = 'hidden';
    document.getElementById('challenge4').style.color = "#7befb2";
}

function hideFive(){
    document.getElementById("challenge5").innerHTML += " ✓";
    document.getElementById('finishButtonFive').style.visibility = 'hidden';
    document.getElementById('challenge5').style.color = "#7befb2";
}

function showAll(){
    document.getElementById('finishButtonOne').style.visibility = 'visible';
    document.getElementById('finishButtonTwo').style.visibility = 'visible';
    document.getElementById('finishButtonThree').style.visibility = 'visible';
    document.getElementById('finishButtonFour').style.visibility = 'visible';
    document.getElementById('finishButtonFive').style.visibility = 'visible';
    document.getElementById('challenge1').style.color = "white";
    document.getElementById('challenge2').style.color = "white";
    document.getElementById('challenge3').style.color = "white";
    document.getElementById('challenge4').style.color = "white";
    document.getElementById('challenge5').style.color = "white";
}