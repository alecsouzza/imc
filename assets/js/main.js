
const form = document.querySelector('#form');
let resultado = document.querySelector('#resultado');

function receberEvento(evento) {
    evento.preventDefault();

}

function calcularImc() {
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    const imc = peso / (altura * altura);



    if (imc > 0 && imc < 18.5) {
        resultado.innerHTML = (`Seu Imc é de ${imc.toFixed(2)}. Abaixo do peso`);
        document.getElementById('resultado').style.backgroundColor = 'red';
        document.getElementById('resultado').style.color = 'white';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML = (`Seu Imc é de ${imc.toFixed(2)}. Peso Normal`);
        document.getElementById('resultado').style.backgroundColor = 'green';
        document.getElementById('resultado').style.color = 'white';
    } else if (imc >= 24.91 && imc < 29.9) {
        resultado.innerHTML = (`Seu Imc é de ${imc.toFixed(2)}. Sobrepeso`);
        document.getElementById('resultado').style.backgroundColor = 'yellow';
        document.getElementById('resultado').style.color = 'black';
    } else if (imc >= 29.91 && imc < 34.9) {
        resultado.innerHTML = (`Seu Imc é de ${imc.toFixed(2)}. Obesidade grau 1 !`);
        document.getElementById('resultado').style.backgroundColor = 'orange';
        document.getElementById('resultado').style.color = 'black';
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = (`Seu Imc é de ${imc.toFixed(2)}. Obesidade grau 2 !!`);
        document.getElementById('resultado').style.backgroundColor = 'rgb(111, 76, 11)';
        document.getElementById('resultado').style.color = 'white';
    } else if (imc >= 40) {
        resultado.innerHTML = (`Seu Imc é de ${imc.toFixed(2)}. Obesidade grau 3 !!!`);
        document.getElementById('resultado').style.backgroundColor = 'red';
        document.getElementById('resultado').style.color = 'white';

    }

}
form.addEventListener('submit', receberEvento);
form.addEventListener('submit', calcularImc);

