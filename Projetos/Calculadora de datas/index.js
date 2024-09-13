document.querySelector('.myButton').addEventListener('click', function (event) {
    event.preventDefault();
    var daysDifference = calculateDateDifference();

    var foi = "Já se passaram dias: " + Math.floor(daysDifference[0]) +
        ", anos: " + Math.floor(daysDifference[1]) +
        ", meses: " + Math.floor(daysDifference[2]);

    var faltam = "Faltam dias: " + Math.floor(daysDifference[0]) +
        ", anos: " + Math.floor(daysDifference[1]) +
        ", meses: " + Math.floor(daysDifference[2]);

    var date1 = daysDifference[3];
    var date2 = daysDifference[4];

    // Comparação correta entre date1 e date2 (em milissegundos)
    if (date1 < date2) {
        if (date1 < date2) {
            document.querySelector('#result').textContent = faltam;
        } else {
            document.querySelector('#result').textContent = faltam;
        }
        // Se a data1 for anterior à data2, significa que ainda faltam dias
    } else {
        // Se a data1 for posterior ou igual à data2, significa que já se passaram os dias
        if (date1 > date2) {
            document.querySelector('#result').textContent = faltam;
        } else {
            document.querySelector('#result').textContent = foi;
        }
    }
});
// Função que pega a data de um input e retorna em milissegundos
function getDate1() {
    var date1 = new Date(document.querySelector('#date1').value)

    return date1.getTime();
}
// Função que pega a data de um segundo input e retorna em milissegundos
function getDate2() {
    var date2 = new Date(document.querySelector('#date2').value)

    return date2.getTime();
}

function calculateDateDifference() {
    var date1 = getDate1();
    var date2 = getDate2();
    // Diferença em milissegundos
    var differenceInMilliseconds = Math.abs(date2 - date1);
    // Calcule os valores
    var days = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    var year = days / 365;
    var months = year * 12;
    // Retorne um array com os valores calculados
    return [days, year, months, date1, date2];
}