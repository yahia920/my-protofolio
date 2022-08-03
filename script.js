let navebar = document.querySelector('.navber');

menubar.oneclick = () => {
    navebar.classList.toggle('active');
};

window.onscroll = () => {
    navebar.classList.remove('active');
};

const sr = scrollreval ({
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reval('.home-text',{delay:200, origin: 'top'})
sr.reval('.home-img',{delay:200, origin: 'top'})
sr.reval('.about, .services, .cta, .resume, .contact, copyright',{delay:200, origin: 'top'})