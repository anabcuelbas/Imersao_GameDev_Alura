class Personagem extends Animacao{
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)

    this.yInicial = height - this.altura
    this.y = this.yInicial
    this.velocidadePulo = 0
    this.gravidade = 3
  }

  pula() {
    this.velocidadePulo = -30
  }

  aplicaGravidade() {
    this.y += this.velocidadePulo
    this.velocidadePulo += this.gravidade

    if(this.y > this.yInicial) {
      this.y = this.yInicial
    }
  }

  estaColidindo(inimigo) {
    const precisao = 0.7
    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao,
                                    inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao)

    return colisao
  }
}