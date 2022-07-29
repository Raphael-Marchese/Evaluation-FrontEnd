'use strict'

// Faire défiler la background image

/* Récupérer une liste d'image 
Stocker le noeud vers la bg image 
boucler sur toutes les images en effectuant un changement de source
Timer le changement*/

let background = document.querySelector('.backgroundCar');

setInterval(changeBackground, 15000);

let i = 0;

function changeBackground(){
    i++;
    if (i== 5){
        i = 1;
    }
    background.style.backgroundImage = `url(./bg${i}.jpeg)`;
    console.log(background.style.backgroundImage);
}






