//ligacoes 
let htmlPontuaçao = document.getElementById("pontuacao")

// variaveis globais
let pontos = 0

function pontuar(){
    pontos += 10
    htmlPontuaçao.innerHTML = pontos
}
 pontuar ()