
   const bottone = document.getElementById("lamp");
    const image = document.getElementById("white-lamp");

    let lampadinaOn = false;

bottone.addEventListener("click", function () {

 if (lampadinaOn) {
    image.src = "img/white_lamp.png";
    bottone.innerText = "accendi"
 }

else  {
    image.src = "img/yellow_lamp.png";
     bottone.innerText = "spegni"
}

lampadinaOn = !lampadinaOn;

}
)   
