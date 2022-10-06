

let Choice: boolean = true


while(Choice){
    let Pergunta = String(prompt("Digite uma palavra ou frase"))

    MaiorPalavra(Pergunta)

    let Finalizar = prompt("Deseja continuar ?")

    if(Finalizar == "Não"){
        Choice = false
    }
}

function MaiorPalavra(Palavra: string){
    let MaiorPalavraRetorno: string =""
    let Regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/ 

    let ListaPalavras = Palavra.split(" ")

    ListaPalavras.forEach(Verificate)

    function Verificate(word: string): void{
        let NumberTeste: string = word.replace(/[^a-zA-Z\s]/g,"")
        
   
        if(NumberTeste.length > MaiorPalavraRetorno.length){
            MaiorPalavraRetorno = NumberTeste;
        }

    }

    return console.log(MaiorPalavraRetorno)
}