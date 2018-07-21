
//Welcome to the Crystal Game!

var userscore = 0;

var comscore = 0;

var wins = 0;

var losses = 0;

var value1 = 0;
var value2 = 0;
var value3 = 0;
var value4 = 0;
var value5 = 0;
var value6 = 0;

function randomscore() {
comscore = Math.floor(Math.random() * 100) + 20;
console.log(comscore);

};

randomscore();


function displaycomscore() {
    var facts =
        "<h3>Target Score</h3>" +
        "<h3>" + comscore + "</h3>";
        document.querySelector("#comscore").innerHTML = facts;
    }

displaycomscore();

function displayuserscore() {
    var facts =
    "<h3> User Score </h3>" +
    "<h3>" + userscore + "</h3>";
    document.querySelector("#userscore").innerHTML = facts;
}

displayuserscore();

function winlosscount() {
    var winslosses =
    "<h3>Wins: " + wins + "  Losses: " + losses + "</h3>";
    document.querySelector("#winloss").innerHTML = winslosses;
}

winlosscount();


function assignvalues() {

    value1 =  Math.floor(Math.random() * 10) + 1;
    console.log(value1);

    value2 = Math.floor(Math.random() * 9) + 1;
    console.log(value2);

    value3 = Math.floor(Math.random() * 14) + 1;
    console.log(value3);

    value4 = Math.floor(Math.random() * 7) + 1;
    console.log(value4);

    value5 = Math.floor(Math.random() * 17) + 1;
    console.log(value5);

    value6 = Math.floor(Math.random() * 20) + 1;
    console.log(value6);
    

}

assignvalues();

document.getElementById('bluecrystal').onclick = function(e){
    userscore = userscore + value1;
    console.log(userscore);
    displayuserscore();
  }

  document.getElementById('greencrystal').onclick = function(e){
    userscore = userscore + value2;
    console.log(userscore);
    displayuserscore();
  }
  document.getElementById('purplecrystal').onclick = function(e){
    userscore = userscore + value3;
    console.log(userscore);
    displayuserscore();
  }
  document.getElementById('redcrystal').onclick = function(e){
    userscore = userscore + value4;
    console.log(userscore);
    displayuserscore();
  }
  document.getElementById('clearcrystal').onclick = function(e){
    userscore = userscore + value5;
    console.log(userscore);
    displayuserscore();
  }
  document.getElementById('goldcrystal').onclick = function(e){
    userscore = userscore + value6;
    console.log(userscore);
    displayuserscore();
  }


document.onclick = function(e) {
    
    if (userscore === comscore) {
        alert ("CONGRATS YOU'RE A WINNER!!! I bet you think you're soooo smart huh?");
        wins ++;
        winlosscount();
        alert("Press OK to try again");
        randomscore();
        displaycomscore();
        userscore = 0;
        displayuserscore();
        assignvalues();
        }
    

    else if (userscore > comscore) {
    alert("You Lose! Didn't you learn anything in school??");
    losses ++;
    winlosscount();
    alert("Press OK to try again");
    randomscore();
    displaycomscore();
    userscore = 0;
    displayuserscore();
    assignvalues();
        }
}









console.log(value1);
console.log(value6);