function validar(){
    let checkboxp=document.getElementById("p").checked;
    console.log(checkboxp);
    let checkboxq=document.getElementById("q").checked;
    console.log(checkboxq);
    let resultado="<br>"+"p AND q es: "+(checkboxp&&checkboxq)+"<br>"+"p OR q es: "+(checkboxp||checkboxq)+"<br>"+"La negacion de p es: "+(!checkboxp)+"<br>"+"La negacion de q es: "+(!checkboxq) ;
    document.getElementById("mensaje").innerHTML=resultado;
}