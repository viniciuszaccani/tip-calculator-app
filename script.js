var somaTotal = {
    valor: 0, 
    gorjeta: 0,
    quantPessoas: 0,
    valorTotal: 0,
    valorUnitario: 0,
    valorGorjetaUnitario: 0
}

//Preenche a variavel com o valor digitado pelo usuário.
function buscaValor(id) {
    if(id === 'bill'){
         somaTotal.valor = parseFloat(window.document.getElementById('bill').value);
    } else if (id === 'numberPeople') {
        somaTotal.quantPessoas = parseInt(window.document.getElementById('numberPeople').value);
    }
    calculaTotal();
}

// Preeche a variavel e altera o css do botão selecionado.
function selectTip(valor) {
    clearStyleTips(valor);
    if(valor == 'tip-input'){
        somaTotal.gorjeta = parseFloat(document.getElementById("tip-input").value);
        document.getElementById("tip-input").style.border = "2px  solid hsl(172, 67%, 45%)";
    } else {
        somaTotal.gorjeta = parseFloat(valor);
        document.getElementById(valor).style.backgroundColor = "hsl(172, 67%, 45%)";
        document.getElementById(valor).style.color= "hsl(183, 100%, 15%)";
    }
    calculaTotal();
}


//Retirando o css especial dos botões
function clearStyleTips(valor){
    if(valor !== 'tip-input'){
        document.getElementById("tip-input").style.border = "0px";
        document.getElementById("tip-input").value = null;
    }

    ["5", "10", "15", "25", "50"].forEach(numero => {
        document.getElementById(numero).style.backgroundColor = "hsl(183, 100%, 15%)";
        document.getElementById(numero).style.color = "white";
    })
}

//Calcula o valor da total e exibe na tela.
function calculaTotal(){
    if(somaTotal.valor == 0 || somaTotal.quantPessoas == 0){
        return;
    }

    const totalGorjeta = (somaTotal.gorjeta * somaTotal.valor) / 100;
    somaTotal.valorGorjetaUnitario = (totalGorjeta / somaTotal.quantPessoas);

    somaTotal.valorTotal = somaTotal.valor + totalGorjeta;
    somaTotal.valorUnitario = somaTotal.valorTotal / somaTotal.quantPessoas;

    document.getElementById("tip-amount").innerHTML = `R$${somaTotal.valorGorjetaUnitario.toFixed(2)}`;
    document.getElementById("total-value").innerHTML = `R$${somaTotal.valorUnitario.toFixed(2)}`;
}   

//Botão de reset.
function reset(){
    somaTotal.valor = 0
    somaTotal.gorjeta = 0
    somaTotal.quantPessoas = 0
    somaTotal.valorTotal = 0
    somaTotal.valorUnitario = 0
    somaTotal.valorGorjetaUnitario = 0

    clearStyleTips('')

    document.getElementById("tip-amount").innerHTML = `R$0`;
    document.getElementById("total-value").innerHTML = `R$0`;

    window.document.getElementById('bill').value = null;
    window.document.getElementById('numberPeople').value = null;

}