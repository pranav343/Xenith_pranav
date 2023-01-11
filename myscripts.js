let starts = document.getElementById('stars');
let xenith = document.getElementById('xenith');
let glaciar = document.getElementById('glaciar');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');


let mountains_behind = document.getElementById('mountains_behind');

window.addEventListener('scroll', function(){
    let value  = window.scrollY;
    starts.style.left = value *0.25 + 'px';
    // xenith.style.top = value *1.05 + 'px';
    mountains_behind.style.top = value *0.5 + 'px';
    glaciar.style.top = value *0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * .5 + 'px';
    btn.style.marginTop = value * 1 + 'px';
    header.style.top = value *0.5 + 'px';







})