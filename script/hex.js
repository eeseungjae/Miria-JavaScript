// 背景色設定
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A",
            "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const btn_rollback = document.querySelector('.btn-rollback');

btn.addEventListener('click',function(){
let hexColor = '#';
for(let i = 0; i<6; i++){
    hexColor += hex[getRandomNumber()]; //ヘッサコート6文字設定
}
console.log('hexColor code = '+ hexColor);
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
document.body.style.transition = 'background-color 0.5s';
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

btn_rollback.addEventListener('click',function(){
    color.textContent = '#f1f5e8';
    document.body.style.backgroundColor = '#f1f5e8';
});