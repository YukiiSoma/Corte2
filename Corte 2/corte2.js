// alert("Hola");
document.write("Escuela Artes y Letras");
console.log("Martes 13");
let nombre="Juan David";
document.getElementById("cuadro1").innerHTML=nombre;
let name=prompt("Escriba su nombre");
let age=prompt("Escriba su edad");
let edad=Number(age)+10;
let edad2=Number(age)-5;
let edad3=Number(age)*3;
let edad4=Number(age)/2;
let par=Number(age)%2;
if(par==0){
    if(age>=22){
        alert("Hola "+name+", Su edad en 10 años sera "+edad+ ", Su edad hace 5 años era "+edad2+ ", El triple de su edad es "+edad3+ " y la mitad de su edad es "+edad4+ ", ademas su edad es PAR"+" y su edad es igual o mayor que 22");
    }
    else{
        alert("Hola "+name+", Su edad en 10 años sera "+edad+ ", Su edad hace 5 años era "+edad2+ ", El triple de su edad es "+edad3+ " y la mitad de su edad es "+edad4+ ", ademas su edad es PAR"+" y su edad es menor que 22");
    }}
else{
    if(age>=22){
        alert("Hola "+name+", Su edad en 10 años sera "+edad+ ", Su edad hace 5 años era "+edad2+ ", El triple de su edad es "+edad3+ " y la mitad de su edad es "+edad4+ ", ademas su edad es IMPAR"+" y su edad es igual o mayor que 22");
    }
    else{
    alert("Hola "+name+", Su edad en 10 años sera "+edad+ ", Su edad hace 5 años era "+edad2+ ", El triple de su edad es "+edad3+ " y la mitad de su edad es "+edad4+ ", ademas su edad es IMPAR"+" y su edad es menor que 22");
}}

