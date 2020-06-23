let imagemCenario
let imagemPersonagem
let cenario
let personagem
let somDoJogo

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  somDoJogo = loadSound('sons/trilha_jogo.mp3')
}

function setup() {
  createCanvas(960, 540)
  cenario = new Cenario(imagemCenario, 3)
  personagem = new Personagem(imagemPersonagem)
  frameRate(40)
  somDoJogo.loop()
}

function draw() {
  cenario.exibe()
  cenario.move()
  
  personagem.exibe()
}





