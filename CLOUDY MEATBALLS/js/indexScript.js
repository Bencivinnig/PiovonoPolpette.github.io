$(document).ready(function(){
    setInterval(function(){
      $('.puls').toggleClass('pulsate');
    }, 1000);

    $("#question").onclick(pagina);
  });


function pagina(){
    $("#popup").toggleClass("open");
}