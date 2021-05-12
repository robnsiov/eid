let _ = document;
let toogle = _.querySelector('.toggle');
let menu = _.querySelector('.menu')
let stars = _.querySelector('.stars');
let moon = _.querySelector('.moon');
let rock = _.querySelector('.rock');
let mosque = _.querySelector('.mosque');
let text = _.querySelector('.text');
let header = _.getElementsByTagName('header');
toogle.addEventListener('click', ()=>{
    menu.classList.toggle('check');
    toogle.classList.toggle('change')
})

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    stars.style.top = value * 0.05 + '%';
    moon.style.bottom = value * -0.5 + 'px';
    rock.style.bottom = value * -0.75 + 'px';
    mosque.style.bottom = value * -0.15 + 'px';
    text.style.right = -100 + value * 0.5 + '%';
})

