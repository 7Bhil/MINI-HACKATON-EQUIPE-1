document.addEventListener("DOMContentLoaded", () => {
    const h1Text = "Make Your Interior More Minimalistic & Modern";
    const h1Element = document.querySelector("h1 span");
    let h1Index = 0;
    let typedText = ""; // Variable pour accumuler le texte

    function typeTextH1() {
        if (h1Index < h1Text.length) {
            typedText += h1Text[h1Index]; // Ajouter chaque caractère du texte
            h1Element.innerHTML = typedText; // Mettre à jour le contenu de l'élément

            // Vérifier si on a atteint le mot "More" et insérer un <br> juste après
            if (typedText.includes("More") && !typedText.includes("<br>")) {
                typedText += "<br>"; // Ajouter un saut de ligne après "More"
                h1Element.innerHTML = typedText; // Mettre à jour l'élément avec le saut de ligne
            }

            h1Index++;
            setTimeout(typeTextH1, 150); // Ajuste la vitesse ici
        }
    }

    typeTextH1();
});
three = document.querySelectorAll("img")
ul =document.querySelector("ul")
liste = document.querySelectorAll("li")
    
three[0].addEventListener("click", ()=>{
    if(liste[0].style.opacity == 0 ){
    for(i = 0; i<4; i++){
        liste[i].style.opacity = 1;
        ul.style.backgroundColor = "#FFAD42";
    }
    }
    else{
        for(i = 0; i<4; i++){
            liste[i].style.opacity = 0;
            ul.style.backgroundColor = "transparent";
        }
        }

})

nbr = document.getElementById("achat")
add = document.getElementsByClassName("add-btn")
nbr.value = 0
add[0].addEventListener("click", ()=>{
    nbr.value = nbr.value +1
    nbr.innerHTML= nbr.value
})
add[1].addEventListener("click", ()=>{
    nbr.value = nbr.value +1
    nbr.innerHTML= nbr.value
})
add[2].addEventListener("click", ()=>{
    nbr.value = nbr.value +1
    nbr.innerHTML= nbr.value
})
add[3].addEventListener("click", ()=>{
    nbr.value = nbr.value +1
    nbr.innerHTML= nbr.value
})