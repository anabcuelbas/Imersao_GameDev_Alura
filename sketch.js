let imagemInicial

let imagemCenario1
let imagemCenario2
let imagemCenario3
let imagemCenario4
let imagemCenario5
let imagemCenario6
let imagemCenario7
let imagemCenario8
let imagemCenario9
let imagemCenario10

let imagemPersonagem
let imagemInimigo
let imagemGameOver
let cenario
let personagem
let somDoJogo
let somDoPulo

let count = 0

const matrizPersonagem = [
  [0, 0], [220, 0], [440, 0], [660, 0],
  [0, 270], [220, 270], [440, 270], [660, 270],
  [0, 540], [220, 540], [440, 540], [660, 540],
  [0, 810], [220, 810], [440, 810], [660, 810],
]

const matrizGotinha = [
  [0, 0], [104, 0], [208, 0], [312, 0],
  [0, 104], [104, 104], [208, 104], [312, 104],
  [0, 208], [104, 208], [208, 208], [312, 208],
  [0, 312], [104, 312], [208, 312], [312, 312],
  [0, 418], [104, 418], [208, 418], [312, 418],
  [0, 522], [104, 522], [208, 522], [312, 522],
  [0, 626], [104, 626], [208, 626], [312, 626],
]

function preload() {
  imagemInicial = loadImage('imagens/assets/telaInicial.png')

  imagemCenario1 = loadImage('imagens/cenario/01_Mist.png')
  imagemCenario2 = loadImage('imagens/cenario/02_Bushes.png')
  imagemCenario3 = loadImage('imagens/cenario/03_Particles.png')
  imagemCenario4 = loadImage('imagens/cenario/04_Forest.png')
  imagemCenario5 = loadImage('imagens/cenario/05_Particles.png')
  imagemCenario6 = loadImage('imagens/cenario/06_Forest.png')
  imagemCenario7 = loadImage('imagens/cenario/07_Forest.png')
  imagemCenario8 = loadImage('imagens/cenario/08_Forest.png')
  imagemCenario9 = loadImage('imagens/cenario/09_Forest.png')
  imagemCenario10 = loadImage('imagens/cenario/10_Sky.png')

  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemGotinha = loadImage('imagens/inimigos/gotinha.png')
  imagemGameOver = loadImage('imagens/assets/game-over.png')
  somDoJogo = loadSound('sons/trilha_jogo.mp3')
  somDoPulo = loadSound('sons/somPulo.mp3')
}

function setup() {
  createCanvas(960, 540)

  cenario1 = new Cenario(imagemCenario1, 8)
  cenario2 = new Cenario(imagemCenario2, 6)
  cenario3 = new Cenario(imagemCenario3, 6)
  cenario4 = new Cenario(imagemCenario4, 5)
  cenario5 = new Cenario(imagemCenario5, 4)
  cenario6 = new Cenario(imagemCenario6, 3)
  cenario7 = new Cenario(imagemCenario7, 2)
  cenario8 = new Cenario(imagemCenario8, 1.5)
  cenario9 = new Cenario(imagemCenario9, 1)
  cenario10 = new Cenario(imagemCenario10, 0)


  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270)
  gotinha = new Inimigo(matrizGotinha, imagemGotinha, width - 50, 52, 52, 104, 104)
  frameRate(40)
  somDoJogo.loop()
}

function keyPressed() {
  if(key == 'ArrowUp' && count <= 1) {
    personagem.pula()
    somDoPulo.play()
    count++
  }
}

function draw() {
  cenario10.exibe()
  cenario10.move()

  cenario9.exibe()
  cenario9.move()

  cenario8.exibe()
  cenario8.move()

  cenario7.exibe()
  cenario7.move()

  cenario6.exibe()
  cenario6.move()

  cenario5.exibe()
  cenario5.move()

  cenario4.exibe()
  cenario4.move()

  cenario3.exibe()
  cenario3.move()

  cenario2.exibe()
  cenario2.move()

  personagem.exibe()
  personagem.aplicaGravidade()
  if(personagem.y == personagem.yInicial) count = 0

  gotinha.exibe()
  gotinha.move()

  cenario1.exibe()
  cenario1.move()

  if(personagem.estaColidindo(gotinha)) {
    noLoop()
    image(imagemGameOver, width/2 - 206, height/2 - 39)
  }
}