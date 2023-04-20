var game = document.querySelector(".game");
var pl = document.querySelector(".player");
var polpette = document.querySelector(".polpette");
var bombe = document.querySelector(".bombe");

var playerLeft = parseInt(window.getComputedStyle(pl).getPropertyValue("left"));
var playerBottom = parseInt(window.getComputedStyle(pl).getPropertyValue("bottom"));

var score = 0;
var i = 0;
var j = 0 ; 

function movePgLeft(){
    if(playerLeft > 0 ){
        playerLeft -= 15;
        pl.style.left = playerLeft + 'px';
    }
}

function movePgRight(){
    if(playerLeft < 598){
        playerLeft += 15;
        pl.style.left = playerLeft + 'px';
    }
}


function control(e){
    if(e.key == "ArrowLeft"){
        movePgLeft();
    }

    if(e.key == "ArrowRight"){
        movePgRight();
    }
}




function generateMeatballs(){

    var polpettaBottom = 380;
    var polpettaLeft = Math.floor(Math.random()*678);
    i++;
    //genera div
    var mb=document.createElement('div');
    mb.setAttribute('class', 'mb mb'+i);
    polpette.appendChild(mb);
    
    //per generare l'img
    var img = document.createElement("img"); 
    img.src = "../img/clipart1924778.png"; 
    var src = document.querySelector(".mb"+i); 
    src.appendChild(img);

    //funzione per gestire polpette
   function fallDown(){
        if(polpettaBottom < playerBottom + 130 && polpettaBottom > playerBottom && polpettaLeft > playerLeft - 30 && polpettaLeft < playerLeft + 130){
            score++;
            polpette.removeChild(mb);
            clearInterval(fallInteval);
        }
        polpettaBottom -= 5;
        mb.style.bottom = polpettaBottom + 'px';
        mb.style.left = polpettaLeft + 'px';
       
    }
    var fallInteval = setInterval(fallDown, 30);
    
}

setInterval(generateMeatballs, 2000); 


function generateBomb(){

    var bombBottom = 380;
    var bombLeft = Math.floor(Math.random()*678);
    j++;
    //genera div
    var bomb=document.createElement('div');
    bombe.setAttribute('class', 'bomb bomb'+j);
    bombe.appendChild(bomb);
    
    //per generare l'img
    var img2 = document.createElement("img"); 
    img2.src = "../img/clipart3340074.png"; 
    var src2 = document.querySelector(".bomb"+j); 
    src2.appendChild(img2);

    //funzione per gestire bombe
   function bombFallDown(){
        if(bombBottom < playerBottom + 130 && bombBottom > playerBottom && bombLeft > playerLeft - 30 && bombLeft < playerLeft + 130){
            alert("game over");
        }
        else{
            bombe.removeChild(bomb);
            clearInterval(bombFallIntevall);
        }
        bombBottom -= 5;
        bomb.style.bottom = bombBottom + 'px';
        bomb.style.left = bombLeft + 'px';
       
    }
    var bombFallIntevall = setInterval(bombFallDown, 30);
    
}

setInterval(generateBomb, 3000); 

document.addEventListener("keydown" , control);

