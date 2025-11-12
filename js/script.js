

const bottone = document.getElementById("lamp"); //creo una variabile bottone alla quale assegno l'id del bottone creato nell'html
const image = document.getElementById("white-lamp"); //creo un'altra variabile alla quale stavolta assegno l'id dell'immagine creata nell'html

bottone.addEventListener ("click", function () {  //collego l'evento al bottone
image.src = "img/yellow_lamp.png";  //prendo l'immagine dal percorso

})

