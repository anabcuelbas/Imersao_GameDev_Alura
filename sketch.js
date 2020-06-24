let imagemInicial
let imagemCenario
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
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemGotinha = loadImage('imagens/inimigos/gotinha.png')
  imagemGameOver = loadImage('imagens/assets/game-over.png')
  somDoJogo = loadSound('sons/trilha_jogo.mp3')
  somDoPulo = loadSound('sons/somPulo.mp3')
}

function setup() {
  createCanvas(960, 540)
  cenario = new Cenario(imagemCenario, 3)
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
  cenario.exibe()
  cenario.move()
  
  personagem.exibe()
  personagem.aplicaGravidade()
  if(personagem.y == personagem.yInicial) count = 0

  gotinha.exibe()
  gotinha.move()

  if(personagem.estaColidindo(gotinha)) {
    noLoop()
    image(imagemGameOver, width/2 - 206, height/2 - 39)
  }
}