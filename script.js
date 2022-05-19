'use strict';
// // console.log(
// //   (document.querySelector('.message').textContent = 'Correct Number....')
// // );
// // document.querySelector('.number').textContent = 13;
// // document.querySelector('.score').textContent = 10;
// //==>document.querySelector() is a function which selects the class and .textContent is used to change the text content present in that class
// let secretnumber = Math.trunc(Math.random() * 20);
// //math.random generates a random number. math.random()*20 means the random value shpuld be upto 20. math.trunc is used to remove decimal numbers
// let score = 20;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number Entered';
//   } else if (guess === secretnumber) {
//     document.querySelector('.message').textContent =
//       'You Have Entered a Correct Number';
//     document.querySelector('.highscore').textContent = score;
//     document.querySelector('.number').textContent = secretnumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//   } else if (guess > secretnumber) {
//     document.querySelector('.message').textContent = 'Lower Number Please!';
//     score = score - 1;
//     document.querySelector('.score').textContent = score;
//   } else if (guess < secretnumber) {
//     document.querySelector('.message').textContent = 'Higher Number Please!';
//     score = score - 1;
//     document.querySelector('.score').textContent = score;
//   }
//   if (score <= 0) {
//     document.querySelector('.message').textContent = 'You Have Lost The Game';
//   }
// });
// document.querySelector('.again').addEventListener('click', function () {
//   document.querySelector('.guess').value = '';
//   document.querySelector('.score').textContent = '20';
//   document.querySelector('.message').textContent = 'Start Guessing....';
//   document.querySelector('body').style.backgroundColor = '#000';
//   secretnumber = Math.trunc(Math.random() * 20);
//   document.querySelector('.number').textContent = '?';
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(document.querySelector(".message").textContent="correct number");//textConetent for viewing and changing text
//.value to view and set values which can be changable
let secretnumber=Math.trunc(Math.random()*20+1);
console.log(secretnumber);
let score=20;
let highscore=Number(document.querySelector(".highscore").textContent);

document.querySelector(".number").value=secretnumber;
document.querySelector(".check").addEventListener("click",function(){
  const guess=document.querySelector(".guess").value;
  if(guess==0){
    document.querySelector(".message").textContent="No number entered!";
  }
  else if(guess==secretnumber){
    document.querySelector(".message").textContent="You Have Guessed Right";
    document.querySelector("body").style.backgroundColor="#63b347"
    document.querySelector(".number").textContent=secretnumber;
    // document.querySelector('.highscore').textContent = score;
    if(score>highscore){
    highscore=score;
    document.querySelector('.highscore').textContent = highscore;

    }



  }
  else if(guess>secretnumber){
    document.querySelector(".message").textContent="Enter Lower Number";
    if(score>0){

      score--;
      document.querySelector(".score").textContent=score;
    }
    else{
    document.querySelector(".message").textContent="You Lost";

    }

  }
  else if(guess<secretnumber){
    document.querySelector(".message").textContent="Enter Higher Number";
    if(score>0){

      score--;
      document.querySelector(".score").textContent=score;
    }
    else{
    document.querySelector(".message").textContent="You Lost";

    }
  }
})
document.querySelector(".again").addEventListener("click",function(){
  secretnumber=Math.trunc(Math.random()*20+1);
  document.querySelector(".number").textContent="?";
  document.querySelector(".guess").value="";
  document.querySelector(".message").textContent="Start guessing..."
  document.querySelector("body").style.backgroundColor="#222";
  score=document.querySelector(".score").textContent=20;


  // const highscore=Number(document.querySelector(".highscore").textContent);
  // if(score>highscore){
  //   document.querySelector(".highscore").textContent=score;
  // }
  // else{
  //   document.querySelector(".highscore").textContent=highscore;

  // }
})