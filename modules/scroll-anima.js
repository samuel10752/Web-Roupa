const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadewindow = window.innerHeight * 4.8;

function animarScroll() {

    const topoitem = scrollAnima.getBoundingClientRect().top;

    const itemvisivel = topoitem - metadewindow < 0;

    if(itemvisivel){
        scrollAnima.classList.add('show-button');
    } else {
        scrollAnima.classList.remove('show-button');
    }

}

window.addEventListener('scroll', animarScroll);