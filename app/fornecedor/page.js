export default function Cliente() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Cadastro de Fornecedor</h1>   
        
        <div className="mb-6">
          <h2 className="font-bold mb-2">Nome da Empresa:</h2>
          <input className="border border-gray-500 bg-amber-50 w-full h-10 px-2 rounded" type="text" placeholder="digite o nome da empresa" name="nomeEmpresa" />
        </div>
       
        <div className="mb-6">
          <h2 className="font-bold mb-2">CNPJ:</h2>
          <input className="border border-gray-500 bg-amber-50 w-full h-10 px-2 rounded" type="text" placeholder="digite o CNPJ da empresa" name="cnpj" />    
        </div>
        
        <div className="mb-6">
          <h2 className="font-bold mb-2">Contato:</h2>
          <input className="border border-gray-500 bg-amber-50 w-full h-10 px-2 rounded" type="text" placeholder="digite o contato da empresa" name="contato" />
        </div>
       
        <div className="mb-6">
          <h2 className="font-bold mb-2">Endereço:</h2>
          <input className="border border-gray-500 bg-amber-50 w-full h-10 px-2 rounded" type="text" placeholder="digite o endereço da empresa" name="endereco" /> 
        </div>
        
        <div className="flex flex-col gap-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
            Cadastrar
          </button>
          
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
            <a href="/">Voltar</a>
          </button>   
        </div>
      </div>
    </div>
  );
}      
