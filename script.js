const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav = document.getElementById('navbar');



// if my navbar is opend or no >>

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}


