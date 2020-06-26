let imagemInicial
let imagemGameOver
let pontuacao

const imagemCenario = []

let imagemPersonagem
let imagemGotinha
let imagemTroll
let imagemVoadora

let personagem
const inimigos = []

const cenario = []
const parallax = [8, 6, 6, 5, 4, 3, 2, 1.5, 1, 0]

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

const matrizTroll = [
  [0,0], [400,0], [800,0], [1200,0], [1600,0],
  [0,400], [400,400], [800,400], [1200, 400], [1600, 400],
  [0,800], [400, 800], [800, 800], [1200, 800], [1600, 800],
  [0, 1200], [400, 1200], [800, 1200], [1200, 1200], [1600, 1200], 
  [0, 1600], [400, 1600], [800, 1600], [1200, 1600], [1600, 1600],
  [0, 2000], [400, 2000], [800, 2000],
]

const matrizVoadora = [
  [0,0], [200, 0], [400, 0],
  [0, 150], [200, 150], [400, 150],
  [0, 300], [200, 300], [400, 300],
  [0, 450], [200, 450], [400, 450],
  [0, 600], [200, 600], [400, 600],
  [0, 750],
]

function preload() {
  imagemInicial = loadImage('imagens/assets/telaInicial.png')
  imagemGameOver = loadImage('imagens/assets/game-over.png')

  for(let i = 0; i < 10; i++) {
    imagemCenario[i] = loadImage(`imagens/cenario/camada_${i}.png`)
  }

  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemGotinha = loadImage('imagens/inimigos/gotinha.png')
  imagemTroll = loadImage('imagens/inimigos/troll.png')
  imagemVoadora = loadImage('imagens/inimigos/gotinha-voadora.png')
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3')
  somDoPulo = loadSound('sons/somPulo.mp3')
}

function setup() {
  createCanvas(960, 540)

  pontuacao = new Pontuacao()

  for(let i = 0; i < 10; i++) {
    cenario[i] = new Cenario(imagemCenario[i], parallax[i])
  }

  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270)

  const gotinha = new Inimigo(matrizGotinha, imagemGotinha, width - 50, 30, 52, 52, 104, 104, 10, 200)
  const troll = new Inimigo(matrizTroll, imagemTroll, width * 2, 0, 200, 200, 400, 400, 9, 1500)
  const voadora = new Inimigo(matrizVoadora, imagemVoadora, width - 200, 200, 100, 75, 200, 150, 10, 2500)
  inimigos.push(gotinha)
  inimigos.push(troll)
  inimigos.push(voadora)

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

  for(let i = 9; i > 1; i--) {
    cenario[i].exibe()
    cenario[i].move()
  }

  personagem.exibe()
  personagem.aplicaGravidade()
  if(personagem.y == personagem.yInicial) count = 0

  inimigos.forEach(inimigo => {
    inimigo.exibe()
    inimigo.move()

    if(personagem.estaColidindo(inimigo)) {
      noLoop()
      image(imagemGameOver, width/2 - 206, height/2 - 39)
    }
  })

  for(let i = 1; i >= 0; i--) {
    cenario[i].exibe()
    cenario[i].move()
  }

  pontuacao.exibe()
  pontuacao.adicionarPonto()
}