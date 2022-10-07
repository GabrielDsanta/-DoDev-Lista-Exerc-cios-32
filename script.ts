




// let Choice: boolean = true


// while(Choice){
//     let Pergunta = String(prompt("Digite uma palavra ou frase"))

//     MaiorPalavra(Pergunta)

//     let Finalizar = prompt("Deseja continuar ?")

//     if(Finalizar == "Não"){
//         Choice = false
//     }
// }

// function MaiorPalavra(Palavra: string){
//     let MaiorPalavraRetorno: string =""

//     let ListaPalavras = Palavra.split(" ")

//     ListaPalavras.forEach(Verificate)

//     function Verificate(word: string): void{
//         let NumberTeste: string = word.replace(/[^a-zA-Z0-9\s]/g, "")
        
   
//         if(NumberTeste.length > MaiorPalavraRetorno.length){
//             MaiorPalavraRetorno = NumberTeste;
//         }

//     }

//     return console.log(MaiorPalavraRetorno)
// }











// let ArrayA: string[] = ["2, 4, 5, 8, 14", "2, 3, 5, 14, 16"]

// ElementosEmComum(ArrayA)

// function ElementosEmComum(arrayString: string[]) {
//     let ArrayA = arrayString[0].split(",")
//     let ArrayB = arrayString[1].split(",")
//     let ArrayC: string[] = []


//   for (let i = 0; i < ArrayA.length; i++){
//     for (let index = 0; index < ArrayA.length; index++){
//       if (ArrayA[i] == ArrayB[index]){
//         ArrayC.push(ArrayA[i])
//       }
//     }
//   }

//   console.log(ArrayC)
// }












// let Choice: boolean = true

// while(Choice){
//     let Pergunta = String(prompt("Digite o seu usuário e veja se ele é válido !"))

//     ValidarNomeUsuario(Pergunta)

//     let Continuar = String(prompt("Deseja continuar ?"))
//     if(Continuar == "Não"){
//         Choice = false
//     }
// }

// function ValidarNomeUsuario(user: string): boolean{
//     let DecisaoFinalNome: boolean = true
//     let ListaDeNumeros: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//     let Regex = user.replace(/[^a-zA-Z-_]/g, "")

//     if(user.length < 4 || user.length > 25){
//         DecisaoFinalNome = false
//     }   

//     for(let i = 0; i < ListaDeNumeros.length; i++){
//         if(ListaDeNumeros.includes(user.charAt(0))){
//             DecisaoFinalNome = false
//         }
        
//     }

//     if(user != Regex){
//         DecisaoFinalNome = false
//     }

//     if(user[user.length - 1] == "_"){
//         DecisaoFinalNome = false
//     }

//     alert(DecisaoFinalNome)
//     return DecisaoFinalNome
// }