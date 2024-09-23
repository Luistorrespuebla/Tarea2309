const verificarPalindromo=()=> {
    const frase = document.getElementById('frase').value;
    const fraseLimpia = frase.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let esPalindromo = true;

    for (let i = 0; i < fraseLimpia.length / 2; i++) {
        if (fraseLimpia[i] !== fraseLimpia[fraseLimpia.length - 1 - i]) {
            esPalindromo = false;
            break;
        }
    }

    const resultado = document.getElementById('resultado');
    resultado.textContent = esPalindromo ? 'Es un palíndromo' : 'No es un palíndromo.';
}