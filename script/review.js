const review = [
    {
        id: 1,
        name: "マーチング☆メロディーズみりあ",
        image: "./images/SD/SDmiria01.jpg",
        text:
        "LMBGのメンバー。黄色のコーデが超お似合い。この衣装でハイファイ☆デイズを歌った。"
    },
    {
        id: 2,
        name: "リトルマイシンデレラみりあ",
        image: "./images/SD/SDmiria02.jpg",
        text:
        "U149アニメのオープニングソングで着た衣装。ドレスみたいで超可愛いすぎるけど。"
    },
    {
        id: 3,
        name: "トゥインクル・フューチャーみりあ",
        image: "./images/SD/SDmiria03.jpg",
        text:
        "アニメ最終回に出た衣装。今も見たら感動の涙で漢江作る。"
    },
    {
        id: 4,
        name: "パーティータイム・ゴールドみりあ",
        image: "./images/SD/SDmiria04.jpg",
        text:
        "デレステVRゲームが出た時のイベント衣装。この衣装はフィギュアにもある。"
    }
]; //reviewページで表示する情報を二次元配列で作る。

const img = document.getElementById('miria_sd_photo');
const name = document.getElementById('miria_name');
const info = document.getElementById('miria_info');

const btn_left = document.querySelector(".btn_left");
const btn_right = document.querySelector(".btn_right");
const btn_random = document.querySelector(".btn_random");

//初めて表示されるページ設定
let currentItem = 0; //配列の最初

//要素呼び出し
window.addEventListener("DOMContentLoaded",function(){
   showPerson(currentItem);
}); //currentItemの設定によって表示されるページが変わる。

//ボタンで内容が変わるfunction
function showPerson(person){ // 配列0,1,2
    const item = review[person];
    img.src = item.image;
    name.textContent = item.name;
    info.textContent = item.text;
}
//次の人
btn_right.addEventListener('click',function(){
    currentItem++;
    if(currentItem > review.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
    
});
btn_left.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = review.length - 1;
    }
    showPerson(currentItem);
});
btn_random.addEventListener('click', function(){
    currentItem = Math.floor(Math.random()*review.length);
    console.log(currentItem);
    showPerson(currentItem);
});