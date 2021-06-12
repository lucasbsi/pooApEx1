function sum (a, b){
    return a + b
}

console.log(sum(5,3))


function cadInfo (texto) {
    var tb = document.getElementById("tabela");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

//     var cellCodigo = linha.insertCell(0);
//     var cellTexto = linha.insertCell(1);

//    cellCodigo.innerHTML = qtdLinhas;
//     cellTexto.innerHTML = texto;

    var cellCodigo = linha.insertCell(0);
    //var cellTexto = linha.insertCell(1);

   cellCodigo.innerHTML = texto;
    

}