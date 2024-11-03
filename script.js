
var somaTotal = {
    valor: 0, 
    gorjeta: 0,
    quantPessoas: 0,
    valorTotal: 0,
    valorUnitario: 0,
    valorGorjetaUnitario: 0
}

function buscaValor(Id) {
    if(Id == 'bill'){
         somaTotal.valor = window.document.getElementById('bill').value;
    } else {
        somaTotal.quantPessoas = window.document.getElementById('numberPeople').value;
    }
    calculaTotal();
}

function selectTip(valor) {
    clearStyleTips(valor);
    if(valor == 'tip-input'){
        somaTotal.gorjeta = document.getElementById("tip-input").value;
        document.getElementById("tip-input").style.border = "2px  solid hsl(172, 67%, 45%)";
    } else {
        somaTotal.gorjeta = valor;
        document.getElementById(valor).style.backgroundColor = "hsl(172, 67%, 45%)";
        document.getElementById(valor).style.color= "hsl(183, 100%, 15%)";
    }
    calculaTotal();
}

function clearStyleTips(valor){
    if(valor != 'tip-input'){
        document.getElementById("tip-input").style.border = "0px";
        document.getElementById("tip-input").value = null;
    }
    document.getElementById("5").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("5").style.color = "white";

    document.getElementById("10").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("10").style.color = "white";

    document.getElementById("15").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("15").style.color = "white";

    document.getElementById("25").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("25").style.color = "white";

    document.getElementById("50").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("50").style.color = "white";
}
function calculaTotal(){
    if(somaTotal.valor == 0 || somaTotal.quantPessoas == 0){
        return;
    }
    somaTotal.gorjeta = (somaTotal.gorjeta * somaTotal.valor) / 100;
    somaTotal.valorGorjetaUnitario = (somaTotal.gorjeta / somaTotal.quantPessoas);
    somaTotal.valorTotal = (Number(somaTotal.valor) + Number(somaTotal.gorjeta));
    somaTotal.valorUnitario = somaTotal.valorTotal / somaTotal.quantPessoas;

    document.getElementById("tip-amount").innerHTML = somaTotal.valorGorjetaUnitario;
    document.getElementById("total-value").innerHTML = somaTotal.valorUnitario;
}   

//falta alterações de CSS
