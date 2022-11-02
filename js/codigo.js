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
        h3.innerHTML="Presione el cuadro para seleccionar o deseleccionar";
        } comentar
function cargarAyuda(control){
    var h3=document.getElementById("h3ayuda");
    if (control.name=="txtNombre")
        var mensaje="Ingrese su nombre con mayusculas"
    if (control.name=="txtApellido")
        var mensaje="Ingrese su apellido con mayusculas"
    if (control.name=="chkCasado")
        var mensaje="Presione el cuadro para selecciona o deseleccionar"
    h3.innerHTML=mensaje;
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