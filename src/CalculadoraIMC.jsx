import React, { useState } from 'react';

function CalculadoraIMC() {
    // Estados (passo 2)
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    // Função de cálculo (passo 3)
    const calcularIMC = () => {
        // Validação
        if (!altura || !peso) {
            alert('Por favor, preencha todos os campos');
            return;
        }

        const alturaMetros = parseFloat(altura) / 100;
        const pesoKg = parseFloat(peso);

        const calculo = pesoKg / (alturaMetros * alturaMetros);
        setImc(calculo.toFixed(2));

        // Determinar classificação
        if (calculo < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (calculo < 25) {
            setClassificacao('Peso normal');
        } else if (calculo < 30) {
            setClassificacao('Sobrepeso');
        } else if (calculo < 35) {
            setClassificacao('Obesidade Grau I');
        } else if (calculo < 40) {
            setClassificacao('Obesidade Grau II');
        } else {
            setClassificacao('Obesidade Grau III');
        }
    };

    // JSX do componente (passo 4)
    return (
        <div className="container">
            <h1>Calculadora de IMC</h1>
            <div className="form-group">
                <label>Altura (cm):</label>
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value.replace(/[^0-9]/g,''))}
                    placeholder="ex: 180"
                />
            </div>
            <div className="form-group">
                <label>Peso (kg):</label>
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value.replace(/[^0-9]/g,''))}
                    placeholder="ex: 80.3"
                />
            </div>
            <button onClick={calcularIMC}>Calcular IMC</button>

            {imc && (
                <div className="resultado">
                    <h2>Resultado</h2>
                    <p>Seu IMC: {imc}</p>
                    <p>Classificação: {classificacao}</p>
                    <div className='legenda'>
                        <p><strong>Legenda</strong></p>
                        <ul>
                            <li>Abaixo de 18.5: Abaixo do peso</li>
                            <li>Entre 18.5 e 24.9: Peso normal</li>
                            <li>Entre 25.0 e 29.9: Sobrepeso</li>
                            <li>Acima de 30: Obesidade</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CalculadoraIMC;