function cadInfo (texto) {
    var tb = document.getElementById("tabela");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    
    cellCodigo.innerHTML = texto;
    

}

const numero = document.getElementById('valor');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');


numero.value = "jo";