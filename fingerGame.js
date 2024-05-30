let thumb = document.getElementById('thumb')

let index = document.getElementById('index')

let middle = document.getElementById('middle')

let ring = document.getElementById('ring')

let pinky = document.getElementById('pinky')

let good = document.getElementById('win')

let bad = document.getElementById('lose')

let text = document.getElementById('text')


const game ={
  win:0,
  lose:0
}




thumb.addEventListener('click', function() {
  let computer= Math.floor(Math.random() * 100) +1;
  
  if (computer < 20) {
  computer ="Thumb finger"
}else if(computer >= 20 && computer < 40) {
  computer = "Index finger"
} else if (computer >= 40 && computer < 60){
  computer= "Middle finger"
} else if(computer >= 60 && computer < 80){
  computer = "Ring finger"
}else if(computer >= 80 && computer <=100){
  computer = "Pinky finger"
  
}
  
  
  
  
  
  if(computer === "Thumb finger"){
  text.innerHTML=("You picked thumb finger, computer picked thumb finger. You lose!")
}else if (computer === "Index finger"){
  text.innerHTML=("You picked thumb finger, computer picked index finger. You win!")
  
}else if (computer === "Middle finger"){
  text.innerHTML=("You picked thumb finger, computer picked middle finger. You win!")
}else if (computer === "Ring finger") {
  text.innerHTML=("You picked thumb finger, computer picked ring finger. You win!")
  }else if (computer === "Pinky finger") {
  text.innerHTML=("You picked thumb finger, computer picked pinky finger. You win!")

}
if (computer=="Thumb finger" ){
  game.lose =game.lose +1;
  lose.innerHTML= "Losses: " + game.lose
}else{
  game.win =game.win +1;
  win.innerHTML = "Wins: " + game.win
}






})




index.addEventListener('click', function() {
    let computer=Math.floor(Math.random() * 100) + 1;
  if (computer < 20) {
  computer = "Thumb finger"
} else if(computer >= 20 && computer < 40) {
  computer = "Index finger"
} else if (computer >= 40 && computer < 60){
  computer= "Middle finger"
} else if(computer >= 60 && computer < 80){
  computer = "Ring finger"
}else if(computer >= 80 && computer <=100){
  computer = "Pinky finger"
  
}
  
  
  
  if(computer === "Thumb finger"){
  text.innerHTML=("You picked index finger, computer picked thumb finger. You win!")
}else if (computer === "Index finger"){
  text.innerHTML=("You picked index finger, computer picked index finger. You lose!")
  
}else if (computer === "Middle finger"){
  text.innerHTML=("You picked index finger, computer picked middle finger. You win!")
}else if (computer === "Ring finger") {
  text.innerHTML=("You picked index finger, computer picked ring finger. You win!")
  }else if (computer === "Pinky finger") {
  text.innerHTML=("You picked index finger, computer picked pinky finger. You win!")
}


if (computer=="Index finger" ){
  game.lose =game.lose +1;
  lose.innerHTML= "Losses: " + game.lose
}else{
  game.win =game.win +1;
  win.innerHTML = "Wins: " + game.win
}

})



middle.addEventListener('click', function() {
    let computer= Math.floor(Math.random() *100) +1;
  if (computer < 20) {
  computer = "Thumb finger"
} else if(computer >= 20 && computer < 40) {
  computer = "Index finger"
} else if (computer >= 40 && computer < 60){
  computer= "Middle finger"
} else if(computer >= 60 && computer < 80){
  computer = "Ring finger"
}else if(computer >= 80 && computer <=100){
  computer = "Pinky finger"
  
}
  
  
  
  if(computer === "Thumb finger"){
  text.innerHTML=("You picked middle finger, computer picked thumb finger. You win!")
}else if (computer === "Index finger"){
  text.innerHTML=("You picked middle finger, computer picked index finger. You win!")
  
}else if (computer === "Middle finger"){
  text.innerHTML=("You picked middle finger, computer picked middle finger. You lose!")
}else if (computer === "Ring finger") {
  text.innerHTML=("You picked middle finger, computer picked ring finger. You win!")
  }else if (computer === "Pinky finger") {
  text.innerHTML=("You picked middle finger, computer picked pinky finger. You win!")

}


if (computer=="Middle finger" ){
  game.lose =game.lose +1;
  lose.innerHTML= "Losses: " + game.lose
}else{
  game.win =game.win +1;
  win.innerHTML = "Wins: " + game.win
}

})



 ring.addEventListener('click', function() {
    let computer= Math.floor(Math.random() * 100) +1;
  if (computer < 20) {
  computer = "Thumb finger"
} else if(computer >= 20 && computer < 40) {
  computer = "Index finger"
} else if (computer >= 40 && computer < 60){
  computer= "Middle finger"
} else if(computer >= 60 && computer < 80){
  computer = "Ring finger"
}else if(computer >= 80 && computer <=100){
  computer = "Pinky finger"
  
}
  
  
  
  if(computer === "Thumb finger"){
  text.innerHTML=("You picked ring finger, computer picked thumb finger. You win!")
}else if (computer === "Index finger"){
  text.innerHTML=("You picked ring finger, computer picked index finger. You win!")
  
}else if (computer === "Middle finger"){
  text.innerHTML=("You picked ring finger, computer picked middle finger. You win!")
}else if (computer === "Ring finger") {
  text.innerHTML=("You picked ring finger, computer picked ring finger. You lose!")
  }else if (computer === "Pinky finger") {
  text.innerHTML=("You picked ring finger, computer picked pinky finger. You win!")

}

if (computer=="Ring finger" ){
  game.lose =game.lose +1;
  lose.innerHTML= "Losses: " + game.lose
}else{
  game.win =game.win +1;
  win.innerHTML = "Wins: " + game.win
}



})



pinky.addEventListener('click', function() {
    let computer= Math.floor(Math.random() * 100) + 1;
  if (computer < 20) {
  computer = "Thumb finger"
} else if(computer >= 20 && computer < 40) {
  computer = "Index finger"
} else if (computer >= 40 && computer < 60){
  computer= "Middle finger"
} else if(computer >= 60 && computer < 80){
  computer = "Ring finger"
}else if(computer >= 80 && computer <=100){
  computer = "Pinky finger"
  
}
  
  
  
  if(computer === "Thumb finger"){
  text.innerHTML=("You picked pinky finger, computer picked thumb finger. You win!")
}else if (computer === "Index finger"){
  text.innerHTML=("You picked pinky finger, computer picked index finger. You win!")
  
}else if (computer === "Middle finger"){
  text.innerHTML=("You picked pinky finger, computer picked middle finger. You win!")
}else if (computer === "Ring finger") {
  text.innerHTML=("You picked pinky finger, computer picked ring finger. You win!")
  }else if (computer === "Pinky finger") {
  text.innerHTML=("You picked pinky finger, computer picked pinky finger. You lose!")

}

if (computer=="Pinky finger" ){
  game.lose =game.lose +1;
  lose.innerHTML= "Losses: " + game.lose
}else{
  game.win =game.win +1;
  win.innerHTML = "Wins: " + game.win
}

})


