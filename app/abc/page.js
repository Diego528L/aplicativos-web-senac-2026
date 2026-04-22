"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"
 
export default function abc() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [resultado, setResultado] = useState("");
 
  function calcularABC() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);
    
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      setResultado("Por favor, insira números válidos.");
      return;
    }
    
    const soma = numA + numB + numC;
    setResultado(soma.toString());
  }
 
  function limparABC() {
    setResultado("");
    setA("");
    setB("");
    setC("");
  }
 
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto m-5">
      <div className="items-center justify-center flex ">

        <input className="border border-gray-500 bg-amber-50 w-20 h-10 ml-5 text-black"
          type="number"
          value={a}
          onChange={(e) => setB(e.target.value)}
           />
        <input className="border border-gray-500 bg-amber-50 ml-5 w-20 h-10 text-black"
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          />

       <input className="border border-gray-500 bg-amber-50 ml-5 w-20 h-10 text-black"
          type="number"
          value={c}
          onChange={(e) => setC(e.target.value)}
          />
      </div>
      <div className="flex items-center justify-center flex-col w-full h-auto mt-5 ">
        <button 
          className="bg-green-500 hover:bg-green-700 text-white w-48 font-bold py-2 px-4 rounded"
          onClick={calcularABC}
        >
          Somar
        </button>

        <div className="flex items-center justify-center placeholder:text-gray-500 mt-4 w-48 h-10 border">
          {resultado || "Resultado"}
        </div>
       <button 
          className="bg-red-500 hover:bg-red-700 text-white w-48 font-bold py-2 px-4 rounded mt-4"
          onClick={limparABC}
        >
          Limpar
        </button>

        <Link href="/">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4 w-48">
            Voltar ao Menu
          </button>
        </Link>
      </div>
    </div>
  );
}
