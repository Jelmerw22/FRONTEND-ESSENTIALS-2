strNaam = prompt("Hoe heet je?");
boolNaamKlopt = confirm( "Heet je echt " + strNaam + "?");

if(boolNaamKlopt == true){
    alert("Welkom!");
}else{
    strNaam = prompt("Nog een keer; Hoe heet je?");
    boolNaamKlopt = confirm( "Heet je echt " + strNaam + "?");
        if(boolNaamKlopt == true){
            alert("Deze keer wel? Welkom!")
        }else{
            alert("Alsnog Welkom!")
        }
}