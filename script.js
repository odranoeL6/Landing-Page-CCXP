const ingressos = [];

const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const lancamento = "01 dec 2023";

function countDown(){
    const dataLancamento = new Date(lancamento)
    const dataHoje = new Date()

    const segTotal = (dataLancamento - dataHoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    document.getElementById('dia').innerHTML = finalDias + 'D '
    document.getElementById('hora').innerHTML = finalHoras + 'H '
    document.getElementById('minuto').innerHTML = finalMinutos + 'M '
    document.getElementById('segundo').innerHTML = finalSegundos + 'S '
}

function formatoTempo ( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)

function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}

function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        alert(`Tecla Pressionada ${name} \r\n Key code: ${code}`);
    } , false);
}

function addKeyboardEventListeners () {
    document.addEventListener('keydown', (event) =>  {

    var ingresso1 = document.getElementById("quinta");
    var ingresso2 = document.getElementById("sexta");
    var ingresso3 = document.getElementById("sabado");
    var ingresso4 = document.getElementById("domingo");
    
    var code = event.code;
    if(code == 'Digit1') {
        ingresso1.classList.toggle("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit2') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.toggle("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit3') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.toggle("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit4') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.toggle("card-highlight");
    } 
} , false)
}

selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if (ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector) 
}

showSelectCards = () => {
    if (ingressos.length > 0) alert("Ingressos selecionados:" + ingressos);
}

addKeyboardEventListeners();