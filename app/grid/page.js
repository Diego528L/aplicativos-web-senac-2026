 
"use client";
import { login } from "@/actions/login";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

  const [nome, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function Logar(e) {
    e.preventDefault();
    setLoading(true);
    setErro("");

    // validando se tem o nome e a senha definidos
    if (nome && senha) {
      //pega a resposta da server Action
      const res = await login(nome, senha);

      if (res?.success) {

        console.log("Usuário Autenticado com Sucesso ... ");
        console.log("REDIRECIONANDO ... ");
        router.push("/grid2");
        router.refresh();

      } else {

        setErro("Erro ao Logar verificar com o Adm ");
      }
    }
    setLoading(false);
  }
  
  return (
    <div className="grid grid-cols-2 w-full h-screen justify-center items-center  bg-amber-50 gap-4 p-4">
     
      <div className="w-full h-screen justify-center items-center flex flex-col bg-amber-800 gap-4 p-4">
        <h1 className="text-white text-5xl">Meu Sistema</h1>
        <h3 className="text-white">
          Gerencie sua vida, vendas e resultados de forma simples e
          <p>eficiente.</p>{" "}
        </h3>
      </div>

      <div className="w-full h-screen bg-gray-200 justify-center items-center flex flex-col gap-4 p-4">
        <div className="bg-white rounded-3xl w-120 h-90 flex flex-col justify-center items-start gap-4 p-8">
          <h1 className=" flex items-start  text-3xl text-amber-900">
            Acessar Plataforma
          </h1>
          <form onSubmit={Logar} className="w-full flex flex-col gap-4">
            {erro && <div className="bg-red-200 text-red-800 p-2 rounded">{erro}</div>}
            <div>
              <h2 className="text-amber-900">Usuário</h2>
              <input
                type="text"
                value={nome}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-black rounded p-2 w-100 text-black"
              />
            </div>
            <div>
              <h2 className=" text-black">Senha</h2>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="border border-black rounded p-2 w-100 text-black"
              />
            </div>
            <button type="submit" className="bg-amber-900 text-white rounded p-2 w-100 disabled:opacity-50" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
      <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        <a href="/">Voltar</a>
      </button>
      <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        <a href="/">Voltar</a>
      </button>
    </div>
  );
}


