function kalkulal(){
    //Űrlapadatok
    const szelesseg=document.getElementById('szelesseg').value
    const magassag=document.getElementById('magassag').value;
    const papir=document.getElementById('papirtipus').value;
    //Számítások
    let terulet=Math.round((szelesseg*magassag)/10000);    
    let koltseg=terulet*papir;
    //Megjelenítés
    document.getElementById('valasz').style.visibility = "visible";
}
//Megjelenítés

document.getElementById('terulet').innerHTML = terulet;
document.getElementById('valasz').style.visibility = "visible";
document.getElementById('papir').innerHTML = papir;
document.getElementById('koltseg').innerHTML = koltseg;
document.getElementById('valasz').style.backgroundColor = "green";