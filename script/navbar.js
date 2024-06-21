const navbarhouse = document.querySelector(".nav-bar-house");
const links = document.querySelector(".links");
const section1 = document.getElementById("section1");

navbarhouse.addEventListener("click",function(){
    console.log(links.classList.contains("links"));
    links.classList.toggle('show-links');
    section1.classList.toggle('length');
    links.style.transition = '0.5s';
    section1.style.transition = 'margin-top 0.5s';
    section1.style.marginTop = '310px';

    if(!section1.classList.contains('length')){
        section1.style.transition = 'margin-top 0.5s';
        section1.style.marginTop = '180px';
    }
});