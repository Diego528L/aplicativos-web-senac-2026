import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-4xl text-orange-500 font-bold rounded">Bem Vindo !</h1>
        <h2>Aplicativos Web do Curso Senac 2026</h2>
        <h3>Turma 027</h3>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white w-48 font-bold py-2 px-4 rounded">
          <a href="/cliente">Cadastrar Cliente</a>
        </button>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-green-500 hover:bg-green-700 text-white w-48 font-bold py-2 px-4 rounded">
          <a href="/produto">Cadastrar Produto</a>
        </button>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          <a href="/fornecedor">Cadastrar Fornecedor</a>
        </button>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-purple-500 hover:bg-purple-700 text-white w-48 font-bold py-2 px-4 rounded">
          <a href="/idade">Calcular Idade</a>
        </button>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-pink-500 hover:bg-pink-700 text-white w-48 font-bold py-2 px-4 rounded">
          <a href="/imc">Calcular IMC</a>
        </button>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white w-48 font-bold py-2 px-4 rounded">
          <a href="/ficha">Ficha</a>
        </button>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-cyan-500 hover:bg-cyan-700 text-white w-48 font-bold py-2 px-4 rounded">
          <a href="/abc">ABC</a>
        </button>
      </div>
    </div>
  );
}
