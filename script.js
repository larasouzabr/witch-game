const witch = document.querySelector('.witch');
const fire  = document.querySelector('.fire');
const over  = document.querySelector('.gameOver');
const count = document.querySelector("#count");
const background = document.querySelector('.background');

let pont = 0; 
const jump = () => {
    witch.classList.add('jump');

    setTimeout(() => {
     witch.classList.remove('jump');
    },2000);

}
const counter = setInterval(() => {
    pont++;
    count.innerHTML = pont;
},800);

const loop = setInterval(() =>{
  const firePosition = fire.offsetLeft;
  const witchPosition = +window.getComputedStyle(witch).bottom.replace('px','');

 if(firePosition<= 60 && firePosition > 0 && witchPosition < 50 ){
    console.log(witchPosition)
    console.log(firePosition)

    fire.style.animation = 'none';
    fire.style.left = `${firePosition}px`;
    witch.style.animation = 'none';
    witch.style.bottom = `${witchPosition}px`;
    clearInterval(counter);
    clearInterval(loop);
    over.src = './image/game-over.png';
 }
},10);

document.addEventListener('keydown', (e) => {
    if(e.keyCode === 32){
        jump();
    }
});

document.addEventListener('click',jump);
