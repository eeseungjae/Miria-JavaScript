const syasin_btn = document.querySelector('#section2 .btn');
const miria_photo = document.getElementById('miria_photo');

syasin_btn.addEventListener('click',function(){
    let randomNumber = Math.floor(Math.random() * 5)+1; //みりあ番号設定
    let paddedNumber = randomNumber.toString().padStart(2,'0');
    //example randomNumber is 5, paddedNumber will 05. buchinda 0 dz?

    console.log('paddedNumber = ' + paddedNumber);
    const randomPhoto = 'images/miria'+paddedNumber+'.jpg';
    miria_photo.style.opacity = '0';
    miria_photo.style.transition = '0.3s';

    setTimeout(function(){
    miria_photo.src = randomPhoto;
    miria_photo.style.opacity = '1';
    miria_photo.style.transition = '0.3s';
    },300);


});