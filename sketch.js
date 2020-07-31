function setup() {
  createCanvas(960, 540)
  frameRate(40)
  somDoJogo.loop()

  telaInicial = new TelaInicial()
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2)
  jogo = new Jogo()
  jogo.setup()

  cenas = {
    jogo,
    telaInicial
  }
}

function keyPressed() {
  jogo.keyPressed(key)
}

function mouseClicked() {
  jogo.mouseClicked()
}

function draw() {
  cenas[cenaAtual].draw()
}