class Pontuacao {
    constructor() {
        this.pontos = 0
    }

    exibe() {
        textAlign(RIGHT)
        fill('#B22222')
        textSize(50)
        text(parseInt(this.pontos), width - 25, 50)
    }

    adicionarPonto() {
        this.pontos += 0.2
    }
}