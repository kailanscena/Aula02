function limiteRapido(soma) {
    if (soma <= 0) {
        return -1;
    }
    return 1;
}

function rampa(soma) {
    if (soma < 0) {
        return 0;
    }
    if (soma >= 0 && soma <= 1) {
        return soma;
    }
    if (soma > 1) {
        return 1;
    }
}

function sigmoide(soma) {
    if (soma >= 0) {
        return 1 - (1 / (1 + soma));
    }
    return -1 + (1 / (1 - soma));
}


function soma(entrada1, peso1) {
    return (entrada1 * peso1);
}


peso1 = 1;
peso2 = -2;
entradaPrincipal = 0;


resultadoSoma = soma(entradaPrincipal, peso1);

saida1 = limiteRapido(resultadoSoma)
saida2 = rampa(resultadoSoma)
saida3 = sigmoide(resultadoSoma)


console.log("LR - primeiro - " + saida1);
console.log("RP - primeiro - " + saida2);
console.log("SG - primeiro - " + saida3);



entradaLimiteRapido = saida1;
entradaRampa = saida2;
entradaSigmoide = saida3;

resultadoSomaLimiteRapido = soma(entradaLimiteRapido, peso2);
resultadoSomaRampa = soma(entradaRampa, peso2);
resultadoSomaSigmoide = soma(entradaSigmoide, peso2);


resultadoLimiteRapido = limiteRapido(resultadoSomaLimiteRapido)
resultadoRampa = rampa(resultadoSomaRampa)
resultadoSigmoide = sigmoide(resultadoSomaSigmoide)

console.log("\n\n\n");

console.log("LR - segundo - " + resultadoLimiteRapido);
console.log("RP - segundo - " + resultadoRampa);
console.log("SG - segundo - " + resultadoSigmoide);