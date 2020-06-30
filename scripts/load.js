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