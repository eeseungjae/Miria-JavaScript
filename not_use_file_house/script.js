const colors = ["red","orange","yellow","green","blue","indigo","violet"];

//ボタンと背景の色を関数として作っておく
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

//ボタンのイベントを作る
btn.addEventListener('click',function(){
    console.log('color change');

    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    //randomNumberは色を配列に入れて、そのデータを取る
    //後でgetRandomNumber functionを作る
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
//決められた色の中でランダムで1つを出す機能
