var score = 0;
let getal1;

function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}

getal1 = showRandomNumber1();

function geefAntwoord(){
    if(getal1 >> getal2)
        { document.body.style.backgroundColor="green"
            }else{document.body.style.backgroundColor="red"}
}