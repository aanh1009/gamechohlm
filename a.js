 let secretNumber = Math.trunc(Math.random() * 20) + 1;
 var score = 20;
 let highscore = 0;
 var max=0;
function play(){
  var x = document.querySelector(".guess").value;
  
  if (x==secretNumber) {
    highscore = score;
    document.querySelector(".message").textContent="Correct";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor ="green";
  }
  else 
{
  score -=1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor ="#222";
  if(x>secretNumber){
  document.querySelector(".message").textContent="Lower";}
  else{
  document.querySelector(".message").textContent="Higher";
  }
}
  if(highscore>max){max=highscore;}
  document.querySelector('.highscore').textContent=max;
}
document.querySelector(".again").addEventListener
  ('click',function(){
    document.querySelector("body").style.backgroundColor ="#222";
    document.querySelector(".guess").value = "";
    document.querySelector(".message").textContent="Start guessing";
    score=20;
    document.querySelector(".score").textContent = score;
  })