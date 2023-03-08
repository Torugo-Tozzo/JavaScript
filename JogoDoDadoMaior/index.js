var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;

function mudaDado(numero, dado){
    document.querySelector("img.img"+dado).setAttribute("src","images/dice"+numero+".png"); 
}

mudaDado(randNum1,1);
mudaDado(randNum2,2);

function confereWin(){
if(randNum1 === randNum2){
    document.querySelector("h1").innerText = "Draw";
}else if(randNum1 > randNum2){
    document.querySelector("h1").innerText = "🥊 Player1 won!";
}else
    document.querySelector("h1").innerText = "Player2 won! 🥊";
}

confereWin();