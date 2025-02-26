alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10')
let numeroSecreto = Math.round(Math.random() * 10);
console.log(numeroSecreto);
if (eleccion == numeroSecreto) {
    alert(`Acertaste, el número es: ${numeroSecreto}`);
} else {
    alert(`Lo siento, no acertaste el número. El número era: ${numeroSecreto}`)
}