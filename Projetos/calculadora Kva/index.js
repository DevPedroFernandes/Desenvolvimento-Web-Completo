


document.querySelector('.myButton').addEventListener('click', function (event) {
    event.preventDefault();
    var kva = document.getElementById('kva')
    var monofasico = document.getElementById('monofasico').checked
    var trifasico = document.getElementById('trifasico').checked
    var v127 = document.getElementById('127').checked
    var v220 = document.getElementById('220').checked
    const media = mediaFases()

    if (trifasico && v127) {
        console.log(numCorrente.value);
        var calc = media * 127
        console.log(calc);
        kva.textContent = 'Você esta consumindo' + calc + 'kva'
    } else if (trifasico && v220) {
        var calc = parseInt(media * 220 * 1.73)
        kva.textContent = 'Você esta consumindo ' + calc + 'kva'
        console.log(calc);
    } else if (monofasico && v127) {
        var calc = parseInt(media * 127)
        kva.textContent = 'Você esta consumindo ' + calc + 'kva'
        console.log(calc);
    } else if (monofasico && v220) {
        var calc = parseInt(media * 220)
        kva.textContent = 'Você esta consumindo ' + calc + 'Kva'
        console.log(calc);
    } else {
        kva.textContent = 'error'
    } {
    }
})

function mediaFases() {
    var fase1 = parseFloat(document.getElementById('fase1').value)
    var fase2 = parseFloat(document.getElementById('fase2').value)
    var fase3 = parseFloat(document.getElementById('fase3').value)

    var media = parseInt((fase1 + fase2 + fase3) / 3)
    console.log(media);

    return media
}


