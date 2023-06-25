function Color1(){
    var ModoOscuro2=document.getElementById("Oscuro2");
    ModoOscuro2.style.background="white";
}
function Color2(){
    var ModoClaro1=document.getElementById("Oscuro2");
    ModoClaro1.style.background="black";
}


const acordeon = document.getElementsByClassName('contentBx');
for (i = 0; i<acordeon.length; i++){
    acordeon[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}


function commentBox(){
	var name=document.getElementById('name').value;
	var comment=document.getElementById('comment').value;
 
	if(name =="" || comment ==""){
		alert("Se requiere un nombre para comentar!");
	}else{
		var parent=document.createElement('div');
		var el_name=document.createElement('h5');
		var el_message=document.createElement('p');
		var el_line=document.createElement('hr');
		var txt_name=document.createTextNode(name);
		var txt_message=document.createTextNode(comment);
		el_name.appendChild(txt_name);
		el_message.appendChild(txt_message);
		el_line.style.border='1px solid #000';
		parent.appendChild(el_name);
		parent.appendChild(el_line);
		parent.appendChild(el_message);
		parent.setAttribute('class', 'pane');
		document.getElementById('result').appendChild(parent);
 
		document.getElementById('name').value="";
		document.getElementById('comment').value="";
	}
 
}

 
function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
}



const fulImgBox = document.getElementById("fulImgBox"),
	fulImg = document.getElementById("fulImg");
	
	function openFulImg(reference){
		fulImgBox.style.display = "flex";
		fulImg.src = reference
	}
	function closeImg(){
		fulImgBox.style.display = "none";
	}

