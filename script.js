// converter o valor 

let botaoConverter = document.getElementById("conversao")
botaoConverter.addEventListener("click", () => {

    let valorReal = document.getElementById("valor")
    let convertido = document.getElementById("valorConvertido")

    let valorRecebido = Number(valorReal.value)

    console.log(valorRecebido)

    let valorEmReal = valorRecebido / 5.21

    let valorFixadoDolar = valorEmReal.toFixed(2)

    convertido.innerText = `O valor em dólar é de ${valorFixadoDolar} USD`

})