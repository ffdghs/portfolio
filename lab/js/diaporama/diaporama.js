let timer, currentID;

let diapos = document.querySelectorAll('.diaporama img');

let nbDiapos = diapos.length;

// Initialisation de currendID mais aussi de la propriété css opacity

for (let i = 0; i < nbDiapos; i++) {
    if (diapos[i].classList.contains('visible')) {
        currentID = i; // ID de l'img qui est visible au début
        diapos[i].style.opacity = 1; // L'image est opaque
    }

    else {
        diapos[i].style.opacity = 0;     
    }
}

// Démarrage du diaporama

let diapoTime = 3000;
let fonduTime = 20;

let mainTimer = setInterval(changeDiapo,diapoTime);

// Fonction qui va lancer le fondu sortant de l'image active et activer la prochaine diapo avec fondu entrant

function changeDiapo() {
    timer = setInterval(fonduOut,fonduTime);
    setTimeout(function(){
        diapos[currentID].classList.toggle('visible');
        nextDiapo();
    },fonduTime*11+20)
}

// Fonction qui déplace la classe active vers la diapo suivante et enclanche le fondu entrant

function nextDiapo() {
    currentID++;
    if (currentID == nbDiapos) {
        currentID = 0;
    }
    diapos[currentID].classList.toggle('visible');
    timer2 = setInterval(fonduIn,fonduTime);
}

// Fonctions de fondu

function fonduIn() {
    let elem = diapos[currentID];
    if (elem.style.opacity < 1) {
        // Augmenter l'opacité
        elem.style.opacity = parseFloat(elem.style.opacity) + 0.1;
    }
    else {
        // Stopper le timer
        clearInterval(timer2);
    }
}

function fonduOut() {
    let elem = diapos[currentID];
    if (elem.style.opacity > 0) {
        // Diminuer l'opacité
        elem.style.opacity -= 0.1;
    }
    else {
        // Stopper le timer
        clearInterval(timer);
    }
}

// Mise en pause du diaporama lorsque la souris passe sur une photo et redémarrage du diaporama lorsqu'on l'enlève

let divDiapo = document.querySelector('.diaporama');
let divPrevNext = document.querySelectorAll('.diaporama div')
console.log(divPrevNext);

divDiapo.addEventListener('mouseover', function(){
    clearInterval(mainTimer);
    divPrevNext[0].style.display = "flex";
    divPrevNext[1].style.display = "flex";
})

divDiapo.addEventListener('mouseout', function(){
    mainTimer = setInterval(changeDiapo,diapoTime);
    divPrevNext[0].style.display = "none"
    divPrevNext[1].style.display = "none"
})

divPrevNext[0].addEventListener('click',function(){
    diapos[currentID].classList.toggle('visible');
    if (currentID == 0){
        currentID = nbDiapos-1;
    }
    currentID -= 2;
    nextDiapo();
})

divPrevNext[1].addEventListener('click',function(){
    diapos[currentID].classList.toggle('visible');
    nextDiapo();
})

