"use client";

import { useState } from "react";

export default function Bhaskara() {
  const [valorA, setValorA] = useState("");
  const [valorB, setValorB] = useState("");
  const [valorC, setValorC] = useState("");
  const [resultado, setResultado] = useState("");

  const handleCalcular = () => {
    const a = parseFloat(valorA);
    const b = parseFloat(valorB);
    const c = parseFloat(valorC);

    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
      setResultado("Preencha todos os valores corretamente.");
      return;
    }

    if (a === 0) {
      setResultado("O valor de A não pode ser 0 para Bhaskara.");
      return;
    }

    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      setResultado(`Delta = ${delta} \nNão há raízes reais.`);
      return;
    }

    const raizDelta = Math.sqrt(delta);
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);

    if (delta === 0) {
      setResultado(`Delta = ${delta} \nUma raiz real: x = ${x1.toFixed(2)}`);
      return;
    }

    setResultado(
      `Delta = ${delta} \nx₁ = ${x1.toFixed(2)} \nx₂ = ${x2.toFixed(2)}`,
    );
  };

  const handleLimpar = () => {
    setValorA("");
    setValorB("");
    setValorC("");
    setResultado("");
  };

  return (
    <div className="flex flex-col items-center justify-center text-black p-4 min-h-screen">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Bhaskara</h1>
        <input
          type="number"
          className="w-full border-2 rounded-md p-2 mb-3"
         
          value={valorA}
          onChange={(e) => setValorA(e.target.value)}
        />
        <input
          type="number"
          className="w-full border-2 rounded-md p-2 mb-3"
         value={valorB}
          onChange={(e) => setValorB(e.target.value)}
        />
        <input
          type="number"
          className="w-full border-2 rounded-md p-2 mb-4"
           value={valorC}
          onChange={(e) => setValorC(e.target.value)}
        />
        <div className="flex gap-3 mb-4">
          <button
            onClick={handleCalcular}
            className="flex-1 rounded-md bg-amber-600 px-4 py-2 text-white"
          >
            Calcular
          </button>
          <button
            onClick={handleLimpar}
            className="flex-1 rounded-md bg-amber-200 px-4 py-2"
          >
            Limpar
          </button>
        </div>
        <div className="whitespace-pre-line rounded-md border-2 border-amber-600 bg-amber-50 p-4 min-h-[100px]">
          {resultado || "Resultado aparecerá aqui."}
        </div>
      </div>
      <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        <a href="/">Voltar</a>
      </button>
    </div>
  );
}
