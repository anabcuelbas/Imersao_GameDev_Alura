class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.variacaoY = 30
    this.yInicial = height - this.altura - this.variacaoY
    this.y = this.yInicial

    this.velocidadePulo = 0
    this.alturaPulo = -30
    this.gravidade = 3
  }

  pula() {
    this.velocidadePulo = this.alturaPulo
  }

  aplicaGravidade() {
    this.y += this.velocidadePulo
    this.velocidadePulo += this.gravidade

    if(this.y > this.yInicial) {
      this.y = this.yInicial
    }
  }

  estaColidindo(inimigo) {
    const precisao = 0.7 * this.largura
    const precisaoInimigo = 0.6 * inimigo.largura

    const colisao = collideCircleCircle(this.x + this.largura/2, this.y + this.altura/2, precisao, 
                                        inimigo.x + inimigo.largura/2, inimigo.y + inimigo.altura/2, precisaoInimigo)

    return colisao
  }
}