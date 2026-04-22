"use client";
import Link from "next/link"; 
import { useState } from 'react';
import { somar } from '../../actions/Calculadora/soma';
import { subtrair } from '../../actions/Calculadora/subtrair';
import { multiplicar } from '../../actions/Calculadora/multiplicar';
import { dividir } from '../../actions/Calculadora/dividir';

export default function Calculadora() {
  const [valorA, setValorA] = useState('');
  const [valorB, setValorB] = useState('');
  const [resultado, setResultado] = useState('');

  const handleSomar = async () => {
    const res = await somar(valorA, valorB);
    setResultado(res.soma || res.error);
  };

  const handleSubtrair = async () => {
    const res = await subtrair(valorA, valorB);
    setResultado(res.subtracao || res.error);
  };

  const handleMultiplicar = async () => {
    const res = await multiplicar(valorA, valorB);
    setResultado(res.produto || res.error);
  };

  const handleDividir = async () => {
    const res = await dividir(valorA, valorB);
    setResultado(res.divisao || res.error);
  };

  const handleLimpar = () => {
    setValorA('');
    setValorB('');
    setResultado('');
  };

  return (
    <div className="flex flex-col items-center justify-center w-200 h-200 text-black p-4">
    <div className="flex flex-col items-center justify-center bg-amber-100 w-100 h-100 text-black p-4">
      <h1 className="text-3xl">Calculadora</h1>
      <input
        type="number"
        className="border-2 m-5"
        placeholder="Valor A"
        value={valorA}
        onChange={(e) => setValorA(e.target.value)}
      />
      <input
        type="number"
        className="border-2"
        placeholder="Valor B"
        value={valorB}
        onChange={(e) => setValorB(e.target.value)}
      />
      <div className="flex gap-2 mt-4">
        <button onClick={handleSomar} className="border-2 bg-amber-600 text-shadow-white">
          Somar
        </button>
        <button onClick={handleSubtrair} className="border-2 bg-amber-600 text-shadow-white">
          Subtrair
        </button>
        <button onClick={handleMultiplicar} className="border-2 bg-amber-600 text-shadow-white">
          Multiplicar
        </button>
        <button onClick={handleDividir} className="border-2 bg-amber-600 text-shadow-white">
          Dividir
        </button>
      </div>
      <div className="mt-4">{resultado}</div>
      <Link
              href="/"
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Limpar
            </Link>
    </div>
    <Link
              href="/"
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Voltar
            </Link>
    </div>
  );
}
