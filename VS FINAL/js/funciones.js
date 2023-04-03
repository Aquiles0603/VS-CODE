function Color1(){
    var ModoOscuro2=document.getElementById("Oscuro2");
    ModoOscuro2.style.background="white";
}
function Color2(){
    var ModoClaro1=document.getElementById("Oscuro2");
    ModoClaro1.style.background="black";
}

const allStars = document.querySelectorAll('.star');
let current_rating = document.querySelector('.current-rating');
allStars.forEach((star, i) =>{
    star.onclick = function(){
        let current_star_level = i + 1;
        current_rating.innerText = `${current_star_level}of 5`;

        allStars.forEach((star,j)=>{
            if( current_star_level >= j+1)
            {
                star.innerHTML = '&#9733';
                
            }else{
                star.innerHTML = '&#9734';
            }
            5 >= 1,2,3,4,5
        })
    }
})

const acordeon = document.getElementsByClassName('contentBx');
for (i = 0; i<acordeon.length; i++){
    acordeon[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}