const modal_btn = document.querySelector('.modal_btn');
const modal_back = document.querySelector('.modal_back');
const close_btn = document.querySelector('.close_btn');

modal_btn.addEventListener('click',function(){
    modal_back.classList.add('open_modal');
    modal_back.style.transtion = '0.3s';
})
close_btn.addEventListener('click',function(){
    modal_back.classList.remove('open_modal');
    modal_back.style.transtion = '0.3s';
})