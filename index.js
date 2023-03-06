/* quando o mario pular, a gente acrescenta
a classe jump na classe do mario, e depois tira */
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const gameover = document.querySelector('.gameover')
const points = document.querySelector('.points')

let executed = false

const jump = () => {
    mario.classList.add('jump') /* adicionar classe
    na query mario */

    setTimeout(() => {
        mario.classList.remove('jump');
        executed = false
    }, 750);
}

let count = 0
const loop = setInterval(() => { /* função de executar a cada tempo definido */
/* verificação se o mario perdeu */


    const pipePosititon = pipe.offsetLeft; /* posição
    esquerda do pipe */

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    /* serve para pegar qualquer estilo definido na classe mario
    aqui serve para pegar a distância do pé do mário, o bottom da div
    */ 

    /* o + na frente serve para forçar a conversão de string para número */

    count = count + 0.01
    points.innerHTML = count.toFixed(2)
    executed = true

    if (pipePosititon <= 120 && pipePosititon > 0 && marioPosition < 105) { /* quando bater no mario */
        pipe.style.animation = 'none'; /* parar animação */
        pipe.style.left = `${pipePosititon}px`; /* manter a pipe
        na posição que bateu */
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = '/images/gameover.webp';
        mario.style.width = '105px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)

        gameover.style.display = 'block'
    } 

}, 10) /* intervalo de execução do pipePosition,
verificar se mario perdeu o jogo */



document.addEventListener('keydown', jump)
/* com o evento de pressionar qualquer tecla,
a função jump irá ser executada */
