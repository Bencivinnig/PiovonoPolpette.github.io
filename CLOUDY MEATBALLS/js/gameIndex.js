var game = document.querySelector(".game");
var pl = document.querySelector(".player");
var polpo = document.querySelector(".polpetta");

var playerLeft = parseInt(window.getComputedStyle(pl).getPropertyValue("left"));
var playerBottom = parseInt(window.getComputedStyle(pl).getPropertyValue("bottom"));


function movePgLeft(){
    if(playerLeft > 0 ){
        playerLeft -= 15;
        pl.style.left = playerLeft + 'px';
    }
}

function movePgRight(){
    if(playerLeft < 410 ){
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
    var polpettaBottom = 410;
    var polpettaLeft  = Math.floor(Math.random()*728);
    var mb = document.createElement('div');

    mb.setAttribute("class", "polpetta");
    polpo.appendChild(polpetta);

        function FallDown(){
            polpettaBottom = -5 ;
            polpetta.style.bottom = polpettaBottom + 'px';
            polpetta.style.left = polpettaLeft + 'px';
        }
    setInterval(FallDown , 20);
    setTimeout(generateMeatballs , 2000);
    mb.style.bottom = polpettaBottom + 'px';
    mb.style.left = polpettaLeft + 'px';

}

generateMeatballs();

document.addEventListener("keydown" , control);

