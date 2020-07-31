class Jogo {
    constructor() {
        this.inimigoAtual = 0
    }

    setup() {
        pontuacao = new Pontuacao()
        vida = new Vida(leitorJson.vida.vidaMaxima, leitorJson.vida.vidaInicial)

        for(let i = 0; i < 10; i++) {
            cenario[i] = new Cenario(imagemCenario[i], parallax[i])
        }

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270)

        const gotinha = new Inimigo(matrizGotinha, imagemGotinha, width - 50, 30, 52, 52, 104, 104, 10, 100)
        const troll = new Inimigo(matrizTroll, imagemTroll, width * 2, 0, 200, 200, 400, 400, 9, 100)
        const voadora = new Inimigo(matrizVoadora, imagemVoadora, width - 200, 200, 100, 75, 200, 150, 10, 100)
        inimigos.push(gotinha)
        inimigos.push(troll)
        inimigos.push(voadora)
    }

    keyPressed(key) {
        if((key == 'ArrowUp' || key == " ") && count <= 1) {
            personagem.pula()
            somDoPulo.play()
            count++
        }
    }

    mousePressed() {
        if(count <= 1) {
            personagem.pula()
            somDoPulo.play()
            count++
        }
    }

    draw() {

        for(let i = 9; i > 1; i--) {
            cenario[i].exibe()
            cenario[i].move()
        }
        
        pontuacao.exibe()
        pontuacao.adicionarPonto()

        vida.exibe()

        personagem.exibe()
        personagem.aplicaGravidade()
        if(personagem.y == personagem.yInicial) count = 0

        const inimigo = inimigos[this.inimigoAtual]
        const inimigoInvisivel = inimigo.x < - inimigo.largura

        inimigo.exibe()
        inimigo.move()

        if(inimigoInvisivel) {
            this.inimigoAtual++

            if(this.inimigoAtual > inimigos.length - 1) this.inimigoAtual = 0

            inimigo.velocidade = parseInt(random(leitorJson.velocidadeInimigo.velocidadeMinima, 
                                                    leitorJson.velocidadeInimigo.velocidadeMaxima))
        }

        if(personagem.estaColidindo(inimigo)) {
            vida.perdeVida()
            personagem.tornarInvencivel()

            if(vida.vidas === 0) {
                noLoop()
                image(imagemGameOver, width/2 - 206, height/2 - 39)
            }
        }

        for(let i = 1; i >= 0; i--) {
            cenario[i].exibe()
            cenario[i].move()
        }
    }
}