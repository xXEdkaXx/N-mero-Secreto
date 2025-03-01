let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 0;
let numeroLimite = 0;
numeroLimite = parseInt(prompt(`Elige un número limite`));
maximosIntentos = parseInt(prompt(`Elige cantidad de intentos`));
let numeroSecreto = Math.floor(Math.random()*numeroLimite)+1;
while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt(`Elige un número entre 1 y ${numeroLimite}`);
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if(numeroUsuario>numeroSecreto){
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos ++;
        if(intentos>maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}