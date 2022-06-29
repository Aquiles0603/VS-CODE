function cargarAyudaNombre(){
var h3=document.getElementById("h3ayuda");
h3.innerHTML="Ingrese su nombre con mayusculas ";
}
function cargarAyudaApellido(){
    var h3=document.getElementById("h3ayuda");
    h3.innerHTML="Ingrese su apellido con mayusculas";
    }
function cargarAyudaEstadoCivil(){
        var h3=document.getElementById("h3ayuda");
        h3.innerHTML="Seleccione su Estado Civil";
        }
function preguntarNombreyApellido() {
var nombre=prompt("Ingrese su nombre:");
var apellido=prompt("Ingrese su apellido:");
alert ("Hola Mundo Bienvenido "+nombre+" "+apellido)
alert(`Hola tu nombre es ${nombre} y tu apellido es ${apellido}`);
}
function ponermayusculas(){
    var datospersonales=document.getElementById("datos");
    datospersonales.innerHTML="DATOS PERSONALES";
    datospersonales.style.background="white";
}
function ColorUno(){
    var ModoOscuro=document.getElementById("Oscuro");
    ModoOscuro.style.background="grey";
}
function ColorDos(){
    var ModoClaro=document.getElementById("Oscuro");
    ModoClaro.style.background="white";
}