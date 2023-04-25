const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const restart = document.querySelector('.restart')

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const cloudsPosition = clouds.offsetLeft;
   

    if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;


        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './IMGS/morte.png';
        mario.style.width = '100px';
        mario.style.marginLeft = '50px';
        mario.style.animation = 'death-animation 4s linear';
        mario.style.bottom = '100%';
        
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        clearInterval(loop)
        restart.style.display = 'flex'
    }
}, 10);

document.addEventListener('keydown', jump);
function recarregarAPagina(){
    window.location.reload();
} 
function sairAPagina(){
window.history.back()
}
