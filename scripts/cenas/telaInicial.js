class TelaInicial {
    constructor() {
        this.width = 960
        this.height = 540
    }

    draw() {
        image(imagemInicial, 0, 0, this.width, this.height)
        this._title()
        this._button()
    }

    _title() {
        textFont(fonteInicial)
        textAlign(CENTER)
        textSize(50)
        text('As aventuras de', this.width/2, this.height/6)
        textSize(150)
        text('Hipsta', this.width/2, this.height/5 * 2)
    }

    _button() {
        botaoGerenciador.x = width/2 - 70
        botaoGerenciador.y = height - 80
        botaoGerenciador.draw()
    }
}