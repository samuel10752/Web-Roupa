const LinkInterno = document.querySelector('[data-scroll="suave"] a[href^="#"]');

function Scrolltop(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    
    const topo = document.querySelector(href);

    topo.scrollIntoView({
        behavior: 'smooth',
        block:'start',
    })

}


LinkInterno.addEventListener('click', Scrolltop);