var Choice = true;
while (Choice) {
    var Pergunta = String(prompt("Digite uma palavra ou frase"));
    MaiorPalavra(Pergunta);
    var Finalizar = prompt("Deseja continuar ?");
    if (Finalizar == "Não") {
        Choice = false;
    }
}
function MaiorPalavra(Palavra) {
    var MaiorPalavraRetorno = "";
    var ListaPalavras = Palavra.split(" ");
    ListaPalavras.forEach(Verificate);
    function Verificate(word) {
        var NumberTeste = word.replace(/[^a-zA-Z0-9\s]/g, "");
        if (NumberTeste.length > MaiorPalavraRetorno.length) {
            MaiorPalavraRetorno = NumberTeste;
        }
    }
    return console.log(MaiorPalavraRetorno);
}
