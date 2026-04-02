export default function Cliente() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl" >Cadastro de Cliente</h1>

    

    <h2 className="">Nome:</h2>
    <input className="border border-gray-500 bg-amber-50 w-150 h-10 " type="text"placeholder="digite seu nome" name="nome" />

    <h2 className="mt-10">CPF:</h2>
    <input className="border border-gray-500 bg-amber-50 w-150 h-10 " type="text" placeholder="digite seu CPF" name="cpf" />


    <h2 className="mt-10">Endereço:</h2>
    <input className="border border-gray-500 bg-amber-50 w-150 h-10" type="text" placeholder="digite seu endereço" name="endereco" />

    <h2 className="mt-10">Telefone:</h2>
    <input className="border border-gray-500 bg-amber-50 w-150 h-10" type="text" placeholder="digite seu telefone" name="telefone" />
 
    <button className="bg-green-500 hover:bg-green-700 text-white w-48 font-bold py-2 px-4 rounded mt-10">
      Cadastrar
    </button>
    <button className="bg-red-500 hover:bg-red-700 text-white w-48 font-bold py-2 px-4 rounded mt-10">
      <a href="/">Voltar</a>
    </button>   
    </div>
  );
}   