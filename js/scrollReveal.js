$(document).ready(function (){
    const sr = ScrollReveal({
        distance: '50px',
        duration: 1000
    });
    
    // Reveal nav-items and showcase
    sr.reveal('.navbar-brand', {origin: 'left'});
    sr.reveal('.navbar .nav-item', {origin: 'right', interval: 100});
    sr.reveal('#showcase *', {origin: 'top', delay: 400, interval: 100});
    sr.reveal('#showcase img', {origin: 'right'})
    sr.reveal('#social .nav-item', {delay: 1200, rotate: {z: 180}});
    
    // Reveal About
    sr.reveal('#about img', {origin: 'left'});
    sr.reveal('#about h1, #about-info', {origin: 'top', delay: 200});
    sr.reveal('#about .skillset', {delay: 200});

    // Reveal interests
    sr.reveal('#interests h1', {origin: 'top'});
    sr.reveal('#interests .card', {interval: 200});

    // Reveal get-in-touch
    sr.reveal('#contact h1, #contact p, #contact .btn', {origin: 'top', interval: 100})
});
