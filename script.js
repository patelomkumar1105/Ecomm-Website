// Script for navigation bar

let ham = document.querySelector("#ham");
let nav = document.querySelector("#nav");
let cls = document.querySelector("#close");


if(ham){
    ham.addEventListener("click", function(){
        nav.classList.add("active");
        cls.classList.add("xactive");
    })
}


    cls.addEventListener("click", function(event){
        event.preventDefault();
        nav.classList.remove("active");
        cls.classList.remove("cactive");
    })

/* Img Change*/

let mi = document.querySelector("#img");
let smi = document.querySelectorAll(".smallimg");

            
smi[0].addEventListener("click", function(){
    mi.src = smi[0].src; 
})

smi[1].addEventListener("click", function(){
    mi.src = smi[1].src; 
})

smi[2].addEventListener("click", function(){
    mi.src = smi[2].src; 
})

smi[3].addEventListener("click", function(){
    mi.src = smi[3].src; 
})


/*img clickable*/




