

let audio  = new Audio("hover.mp3");
audio.play()
let button = document.querySelector("button"); 
button.onmouseover = mo
button.onclick = essai
let x = Math.floor(Math.random() * 10);  
let nbrEssai = 0 
console.log(x)
function verifMsg(input,r){
    if (r==input){
        return "Message : Bravo";
    }else if (input>r ){
        return "Message : Superieur "
    }else{
        return  "Message : Inferieur"
    }

}
function essai(){ 
    nbrEssai ++
    let input = document.querySelector("input")
    let valeurInput = parseInt(input.value)
    let resultat = verifMsg(valeurInput,x)
    document.querySelector("span").innerHTML = resultat
    document.querySelector("#score").innerHTML = nbrEssai
    console.log(typeof(valeurInput))
}

function mo(){
    console.log("hover")
    audio.play()
} 
//console.log(verif(5,4))