const anyThing = document.querySelectorAll(".menuItem");
const oneE1 = document.querySelector('.active') 
const tired = document.createElement("h2");
const bodyselecto = document.querySelector("body");


const menuClicked = (curE1) => {
    for(let i = 0; i < anyThing.length; i++) {
        anyThing[i].classList.remove('active')
    }
    curE1.classList.add('active');
}

bodyselecto.appendChild(tired);
tired.innerHTML = "we can be going home";