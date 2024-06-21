let count = 0; //初期値。valueに変動あるからlet。

const value = document.querySelector('#counter_value');
const btns = document.querySelectorAll('#section3 .btn');

btns.forEach(function(btn){ //btns要素の中のbtnを一個ずつ表示
    console.log(btn); //btnの目録が出る。
    btn.addEventListener('click',function(e){
        console.log(e.currentTarget.classList); //btn down, btn reset, btn upが登場
        
        const styles = e.currentTarget.classList; //counter_valueの変更のため変数化
        if(styles.contains("down")){
            console.log(styles.contains);
            count-=10;
        }else if(styles.contains("up")){
            console.log(styles.contains);
            count+=10;
        }else{
            console.log(styles.contains);
            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        }
        else if(count < 0){
            value.style.color = "red";
        }
        else{
            value.style.color = "black";
        }
        value.textContent = count;
    });

});