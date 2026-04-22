"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
 
export default function calcularIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [classificacao, setClassificacao] = useState("");
 
  function handleCalcularIMC() {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    
    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      setResultado("Por favor, insira valores válidos para peso e altura.");
      setClassificacao("");
      return;
    }
    
    const imc = pesoNum / (alturaNum * alturaNum);
    setResultado(imc.toFixed(2));
    
    if (imc < 18.5) setClassificacao("Abaixo do Peso");
    else if (imc < 25) setClassificacao("Peso Normal");
    else if (imc < 30) setClassificacao("Sobrepeso");
    else setClassificacao("Obesidade");
  }
 
  function limparIMC() {
    setPeso("");
    setAltura("");
    setResultado("");
    setClassificacao("");
  }
 
  return (
    <div className="items-center justify-center flex flex-col m-5">
      <h1 className="text-2xl font-bold mb-4">Calculadora de IMC</h1>
 
      <div className="bg-blue-300 flex flex-col w-80 h-auto items-center justify-center border p-5">
        <h2>Digite seu peso (kg):</h2>
        <input 
          className="border border-gray-500 bg-amber-50 w-50 h-10 mt-2" 
          type="number" 
          placeholder="Digite seu peso" 
          name="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)} 
        />
       
        <h2 className="mt-4">Digite sua altura (m):</h2>
        <input 
          className="border border-gray-500 bg-amber-50 w-50 h-10 mt-2" 
          type="number" 
          placeholder="Digite sua altura" 
          name="altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)} 
        />
       
        <button 
          className="bg-green-500  hover:bg-green-700 text-black w-48 font-bold py-2 px-4 rounded mt-4"
          onClick={handleCalcularIMC}
        >
          Calcular IMC
        </button>
        
        <button 
          className="bg-orange-500 hover:bg-orange-700 text-black w-48 font-bold py-2 px-4 rounded mt-4"
          onClick={limparIMC}
        >
          Limpar
        </button>
        
        {resultado && (
          <div className="mt-4 text-center">
            <p className="font-bold">IMC: {resultado}</p>
            <p className="font-bold">Classificação: {classificacao}</p>
          </div>
        )}
      </div>
      
      <h1 className="text-amber-800 mt-7">Senac Mg</h1>
      
      <Link href="/">
        <button className="bg-blue-300 border-2 mt-5 px-4 py-2 rounded hover:bg-blue-400">
          Voltar à Página Inicial
        </button>
      </Link>
    </div>
  );
}