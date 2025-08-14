//Entrada for 0, 0 = 0
//Entrada for 1, 1 = 1

// e1c1 = Entrada 1 do Caso 1
// e2c1 = Entrada 2 do Caso 1
// re1 = Resultado esperado 1
let e1c1 = 0, e2c1 = 0, re1 = 0;
let e1c2 = 1, e2c2 = 1, re2 = 1;

let pesos = [-1, -1];

let c = 1;

let ajustes = 0, repeticoes = 0, quantidadeAjustesNecessarios = 0;

function soma(valores) {
    let resultado = 0;
    valores.forEach(valor => {
        resultado += valor.entrada * valor.peso
    });
    return resultado;
}

function transferencia(soma) {
    if (soma <= 0) {
        return 0;
    }
    return 1;
}

function ajuste(valores) {
    let i = 0;
    valores.forEach(valor => {
        valores[i].peso = valor.peso + c * (valor.resultadoDesejado - valor.resultadoObtido) * valor.entrada;
        i++;
    });
    return valores; 
}

function minhaFuncaoAbstrata(entradas, pesos, resultadoEsperado) {
    
    const valores = entradas.map((entrada, i) => ({
        entrada,
        peso: pesos[i],
        resultadoDesejado: resultadoEsperado,
        resultadoObtido: null
    }));

    
    const resultadoSoma = soma(valores);

   
    const resultadoObtido = transferencia(resultadoSoma);

   
    valores.forEach(v => v.resultadoObtido = resultadoObtido);

    
    if (resultadoObtido !== resultadoEsperado) {
        const novosValores = ajuste(valores);
       
        const novosPesos = novosValores.map(v => v.peso);
        return { pesos: novosPesos, houveAjuste: true };
    }

    return { pesos, houveAjuste: false };
}

do {
    ajustes = 0;

    //Caso 1
    resultado = minhaFuncaoAbstrata([e1c1, e2c1], pesos, re1);
    pesos = resultado.pesos;
    if (resultado.houveAjuste) {
        ajustes++;
        quantidadeAjustesNecessarios++;
    }

    //Caso 2
    resultado = minhaFuncaoAbstrata([e1c2, e2c2], pesos, re2);
    pesos = resultado.pesos;
    if (resultado.houveAjuste) {
        ajustes++;
        quantidadeAjustesNecessarios++;
    }

    repeticoes++;
} while (ajustes != 0);

console.log("Os pesos apos o treinamento de rede é: " + pesos[0] + " e " + pesos[1]);
console.log("Quantidade de ajustes necessarios: " + quantidadeAjustesNecessarios);
console.log("Repetições: " + repeticoes);
