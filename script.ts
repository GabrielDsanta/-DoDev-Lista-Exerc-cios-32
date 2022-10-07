



let Choice: boolean = true

while(Choice){
    let Pergunta = String(prompt("Digite o seu usuário e veja se ele é válido !"))

    ValidarNomeUsuario(Pergunta)

    let Continuar = String(prompt("Deseja continuar ?"))
    if(Continuar == "Não"){
        Choice = false
    }
}

function ValidarNomeUsuario(user: string): boolean{
    let DecisaoFinalNome: boolean = true
    let ListaDeNumeros: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let Regex = user.replace(/[^a-zA-Z-_]/g, "")

    if(user.length < 4 || user.length > 25){
        DecisaoFinalNome = false
    }   

    for(let i = 0; i < ListaDeNumeros.length; i++){
        if(ListaDeNumeros.includes(user.charAt(0))){
            DecisaoFinalNome = false
        }
        
    }

    if(user != Regex){
        DecisaoFinalNome = false
    }

    if(user[user.length - 1] == "_"){
        DecisaoFinalNome = false
    }

    alert(DecisaoFinalNome)
    return DecisaoFinalNome
}