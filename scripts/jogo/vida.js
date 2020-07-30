class Vida {
    constructor(total, inicial) {
        this.total = total
        this.inicial = inicial
        this.vidas = this.inicial

        this.largura = 25
        this.altura = 25
        this.xInicial = 25
        this.y = 20
    }

    exibe() {
        let margem
        let posicao

        for(let i = 0; i < this.vidas; i++) {
            margem = i * 10
            posicao = this.xInicial * (1 + i)

            image(imagemVida, posicao + margem, this.y, this.largura, this.altura)
        }
    }

    ganhaVida() {
        if(this.vidas < this.total) {
            this.vidas++
        }
    }

    perdeVida() {
        this.vidas--
    }
}