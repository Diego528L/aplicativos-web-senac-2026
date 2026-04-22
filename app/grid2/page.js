"use client";
import { useRouter } from "next/navigation";

export default function GridPage() {
  const router = useRouter();

  return (
    <div className="h-screen">
      <div className="grid h-full grid-cols-[1fr_200px] grid-rows-[80px_1fr_60px]">
        <header className="col-span-2 flex items-center justify-center bg-gray-800 text-xl font-bold text-white">
          Senac / Testes Front-end
        </header>

        <main className="bg-gray-400 p-4">
            <div className="bg-white rounded p-4 w-150 h-20 flex flex-col ">
          <h1 className="mb-4 text-2xl font-bold text-black">
            Diego
          </h1>
          </div>
        </main>

        <aside className="row-span-2 bg-gray-800 p-4 text-white">
          <nav className="flex flex-col gap-2">
            <span className="rounded p-2">Dashboard</span>
            <span className="rounded p-2">Cadastro</span>
            <span className="rounded p-2">Clientes</span>
            <span className="rounded p-2">Produtos</span>
            <span className="rounded p-2">Vendas</span>
            <button onClick={() => router.push("/grid")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            sair</button>
          </nav>
        </aside>

        <footer className="flex items-center justify-center bg-gray-800 text-white">
              Mal feito,feito!!!
        </footer>
      </div>
    </div>
  );
}
