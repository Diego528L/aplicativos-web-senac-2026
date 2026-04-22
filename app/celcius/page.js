"use client";

import { useState } from 'react';

export default function Celcius() {
  const [celsius, setCelsius] = useState('');
  const [resultado, setResultado] = useState('');

  const converter = () => {
    const c = parseFloat(celsius);
    if (Number.isInteger(c)) {
      const f = (c * 1.8) + 32;
      setResultado(f.toFixed(2) + ' °F');
    } else {
      setResultado('Digite um número válido');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen m-5">
      <div className="flex flex-col items-center justify-center w-100 h-80 rounded-3xl bg-green-300 m-5">
        <h1 className="text-3xl text-black font-bold mb-4">Conversor de Temperatura</h1>
        <input
          type="number"
          className="border border-gray-500 bg-amber-50 w-48 h-10 text-black"
          placeholder="Celsius"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
        <button
          onClick={converter}
          type="button"
          className="bg-green-500 hover:bg-green-700 w-48 h-10 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Converter
        </button>
        <div className="flex items-center justify-center bg-amber-400 placeholder:text-gray-500 mt-4 w-48 h-10 border">
          {resultado || 'Resultado'}
        </div>
        <button
          onClick={() => {
            setCelsius('');
            setResultado('');
          }}
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-700 w-48 h-10 font-bold py-2 px-4 rounded">
          Limpar
        </button>
      </div>
      <button className="mt-80 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">    
         <a href="/">Voltar</a>  </button>
    </div>
  );
}
