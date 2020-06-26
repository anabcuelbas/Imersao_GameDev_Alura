class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay, precisao) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.velocidade = velocidade
        this.delay = delay
        this.x = width + this.delay
        this.precisao = precisao
    }

    move() {
        this.x -= this.velocidade

        if(this.x < -this.largura - this.delay) this.x = width
    }
}