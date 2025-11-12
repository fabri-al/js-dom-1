
const bottone = document.getElementById("lamp"); //creo una variabile bottone alla quale assegno l'id del bottone creato nell'html
const image = document.getElementById("white-lamp"); //creo un'altra variabile alla quale stavolta assegno 
//l'id dell'immagine creata nell'html

let lampadinaOn = false; //creo una variabile booleana che imposto su false

bottone.addEventListener("click", function () { //collego l'evento al bottone

   //creo una condizione che verifica se la variabile è false  
   if (lampadinaOn) { //se è false
      image.src = "img/white_lamp.png"; //prende questa immagine
      bottone.innerText = "accendi" // e cambia il testo del bottone in "accendi"
      lampadinaOn = false; //imposto la variabile a false
   }

   //altrimenti
   else {
      image.src = "img/yellow_lamp.png"; //prende quest'altra immagine
      bottone.innerText = "spegni" //e cambia il testo del bottone in "spegni"
      lampadinaOn = true; //imposto la variabile a true
   }

}
)   
