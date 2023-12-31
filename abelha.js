let des = document.getElementById('des').getContext('2d')

let bg = new Bg(0,0,500,700, 'assets/bg.png')
let bg2 = new Bg(0,-700,500,700, 'assets/bg.png')
let flor = new Flor(0,0,50,50, 'assets/flower1.png')
let bee = new Bee(200,500,100,100,'assets/bee1.png')
let spider = new Spider(100,100,100,100,'assets/spider1.png')
let texto_pontos = new Texto()
let texto_vidas = new Texto()
let val_pts = new Texto()
let val_vidas = new Texto()

let texto_game_over = new Texto()
let jogar = true

const som1 = new Audio('assets/sounds/bee.wav')
const som2 = new Audio('assets/sounds/funk.m4a')
const som3 = new Audio('assets/sounds/game_over.wav')
const som4 = new Audio('assets/sounds/spider.mp3')
const som5 = new Audio('assets/sounds/flower.mp3')
som1.volume = 1.0
som1.loop = true
som2.volume = 1.0
som3.volume = 1.0
som4.volume = 1.0
som5.volume = 1.0

// let spider2 = new Obj(0,0,100,100,'darkorchid')

document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        // console.log('pressionado a tecla "a" ')
        bee.dir -= 5
    }else if(event.key === 'd'){
        // console.log('pressionado a tecla "d" ')
        bee.dir += 5
    }
    else if(event.key === 'w'){
        console.log('Pressionando a tecla "w"')
        bee.dir2 -= 5
    }else if(event.key === 's'){
        console.log('Pressionando a tecla "s"')
        bee.dir2 += 5
    }

})
document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        // console.log('soltou a tecla "a" ')
        bee.dir = 0
    }else if(event.key === 'd'){
        // console.log('soltou a tecla "d" ')
        bee.dir = 0
    }
    else if(event.key === 'w'){
        // console.log('Pressionando a tecla "w"')
        bee.dir2 = 0
    }else if(event.key === 's'){
        // console.log('Pressionando a tecla "s"')
        bee.dir2 = 0
    }
})

function game_over(){
    if(bee.vidas <= 0){
        jogar = false
        som3.play()
        som2.pause()
        som1.pause()

    }
}

function colisao(){
    if(bee.colid(spider)){
        spider.recomeca()
        bee.vidas -=1
        som4.play()
    }
    if(bee.colid(flor)){
        flor.recomeca()
        bee.pts +=1
        som5.play()
    }
}

function desenha(){
    bg.desenha_obj()
    bg2.desenha_obj()
    if(jogar){        
        bee.desenha_obj()
        spider.desenha_obj()
        flor.desenha_obj()
        texto_pontos.des_texto('Pontos: ',326,40, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,40, 'green','30px Times')
        val_pts.des_texto(bee.pts,420,40, 'white','30px Times')
        val_vidas.des_texto(bee.vidas,120,40, 'white','30px Times')
    }else{
        texto_game_over.des_texto('Game Over',128,350, 'green','50px Times')
    }
}

function atualiza(){
    bg.move(3,700,0)
    bg2.move(3,0,-700)
    if(jogar){
        bee.move()
        bee.anim('bee')
        spider.move()
        spider.anim('spider')
        flor.move()
        flor.anim('florwer')
        colisao()
        game_over()
    }
    
}

function main(){
    des.clearRect(0,0,500,700)
    atualiza()
    desenha()

}


setInterval(main,10)


// problemas do homen moderno: