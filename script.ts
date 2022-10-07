




let ArrayA: string[] = ["2, 4, 5, 8, 14", "2, 3, 5, 14, 16"]

ElementosEmComum(ArrayA)

function ElementosEmComum(arrayString: string[]) {
    let ArrayA = arrayString[0].split(",")
    let ArrayB = arrayString[1].split(",")
    let ArrayC: string[] = []


  for (let i = 0; i < ArrayA.length; i++) {
    for (let index = 0; index < ArrayA.length; index++) {
      if (ArrayA[i] == ArrayB[index]){
        ArrayC.push(ArrayA[i])
      }
    }
  }

  console.log(ArrayC)
}


