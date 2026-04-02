export default function Produto() {
    return (   
        <div className="flex flex-col items-center">
            <h1 className="text-2xl">Cadastro de Produtos</h1>   

            <h2 className="">Nome do Produto:</h2>
            <input className="border border-gray-500 bg-amber-50 w-150 h-10 " type="text" placeholder="digite o nome do produto" name="nomeProduto" />
           
            <h2 className="mt-10">Preço:</h2>
            <input className="border border-gray-500 bg-amber-50 w-150 h-10 " type="text" placeholder="digite o preço do produto" name="preco" />
          
            <h2 className="mt-10">Categoria:</h2>
            <input className="border border-gray-500 bg-amber-50 w-150 h-10 " type="text" placeholder="digite a categoria do produto" name="categoria" />
           
            <h2 className="mt-10">Quantidade:</h2>
            <input className="border border-gray-500 bg-amber-50 w-150 h-10 " type="text" placeholder="digite a quantidade do produto" name="quantidade" />
            <button className="bg-green-500 hover:bg-green-700 text-white w-48 font-bold py-2 px-4 rounded mt-10">
                Cadastrar
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white w-48 font-bold py-2 px-4 rounded mt-10">
                <a href="/">Voltar</a>
            </button>   
            </div>
    );
}