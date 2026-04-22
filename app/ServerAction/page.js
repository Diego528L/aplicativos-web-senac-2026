"use client"
import { servidor } from "@/actions/servidor";
export default function ServerAction() {
    async function chamaServidor() {
  
        try {
            await servidor();
            console.log("Chamou o Servidor")
        } catch {
            console.log("Erro ao Tentar Logar 2")
        } finally {
            console.log("Login Terminou")
        }
    }

    async function cliente() {
        try {
            console.clear();
            console.log("/n/n")
            console.log("Console limpo e ação executada no Front-end (Cliente)")
            console.log ("Estou no cliente....."+contador++);
            console.log("Só funciono no Front-end meu amigo....");
            console.log("/n/n")
        } catch (error) {
            console.log("Erro ao Tentar Logar 2", error)
        } finally {
            console.log("Fim de Execução da Action no Front End")
        }
    }   
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="bg-gray-100 flex flex-col items-center w-100 h-100 rounded-3xl justify-center gap-4">
        <h1 className="text-3xl text-black">Server Action</h1>
        <button onClick={chamaServidor}type="button" className="bg-green-500 hover:bg-green-700 text-white w-70 font-bold py-2 px-4 rounded mt-5">
          Ações no Servidor (BACK-END)
        </button>
        <button onClick={cliente}type="button" className="bg-red-500 hover:bg-red-700 text-white w-70 font-bold py-2 px-4 rounded mt-5">
          Ações no Cliente (FRONT-END)
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white w-70 font-bold py-2 px-4 rounded mt-5">
          Dashboard
        </button>
      </div>

      <button className="bg-gray-500 hover:bg-gray-700 text-white w-48 font-bold py-2 px-4 rounded mt-230                                                                                            ">
        <a href="/"> Voltar</a>
      </button>
    </div>
  );
}
