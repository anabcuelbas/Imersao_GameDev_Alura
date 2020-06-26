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

    const colisao = collideRectRect(this.x, this.y, this.largura * inimigo.precisao, 
                                    this.altura * inimigo.precisao,
                                    inimigo.x, inimigo.y, inimigo.largura * inimigo.precisao, 
                                    inimigo.altura * inimigo.precisao)

    return colisao
  }
}