
    "use client";
    import { useState } from "react";
    import Image from "next/image";
    import Link from "next/link";
     
    export default function ficha() {
      const [nome, setNome] = useState("");
      const [email, setEmail] = useState("");
      const [idade, setIdade] = useState("");
      const [telefone, setTelefone] = useState("");
      const [mensagem, setMensagem] = useState("");
      const [fichaEnviada, setFichaEnviada] = useState(null);
     
      function handleEnviarFicha() {
        if (!nome.trim() || !email.trim() || !idade.trim() || !telefone.trim()) {
          setMensagem("Preencha todos os campos antes de enviar.");
          setFichaEnviada(null);
          return;
        }

        const idadeNum = parseInt(idade, 10);
        if (isNaN(idadeNum) || idadeNum < 1 || idadeNum > 150) {
          setMensagem("Idade inválida. Deve ser um número entre 1 e 150.");
          setFichaEnviada(null);
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setMensagem("Email inválido. Use um formato válido.");
          setFichaEnviada(null);
          return;
        }

        const telefoneLimpo = telefone.replace(/\D/g, "");
        if (telefoneLimpo.length < 10) {
          setMensagem("Telefone inválido. Informe pelo menos 10 dígitos.");
          setFichaEnviada(null);
          return;
        }

        const novaFicha = {
          nome: nome.trim(),
          email: email.trim(),
          idade: idadeNum,
          telefone: telefoneLimpo,
        };

        setFichaEnviada(novaFicha);
        setMensagem("Dados enviados com sucesso!");
      }

      function limparficha() {
        setNome("");
        setEmail("");
        setIdade("");
        setTelefone("");
        setMensagem("");
        setFichaEnviada(null);
      }
     
      return (
        <div className="bg-blue-400 rounded-2xl inter flex flex-col items-center justify-center m-5 p-5">
          <div className="inter flex flex-col items-center justify-center m-5 w-full max-w-md">
            <h1 className="text-3xl text-black">Ficha do Aluno</h1>

            <h2 className="mt-4 text-black">Nome:</h2>
            <input
              className="border border-gray-500 text-black  bg-amber-50 w-full h-10 p-2 rounded"
              type="text"
              placeholder="digite o nome do aluno"
              name="nomeAluno"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <h2 className="mt-4 text-black">Email:</h2>
            <input
              className="border border-gray-500 text-black  bg-amber-50 w-full h-10 p-2 rounded"
              type="email"
              placeholder="digite o email do aluno"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h2 className="mt-4 text-black">Idade:</h2>
            <input
              className="border border-gray-500 text-black  bg-amber-50 w-full h-10 p-2 rounded"
              type="number"
              placeholder="digite a idade do aluno"
              name="idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />

            <h2 className="mt-4 text-black">Telefone:</h2>
            <input
              className="border border-gray-500 text-black  bg-amber-50 w-full h-10 p-2 rounded"
              type="tel"
              placeholder="digite o telefone do aluno"
              name="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />

            {mensagem && (
              <p className={`mt-4 font-bold ${mensagem.includes("sucesso") ? "text-green-700" : "text-red-700"}`}>
                {mensagem}
              </p>
            )}

            <div className="flex w-full justify-between gap-4 mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full"
                onClick={handleEnviarFicha}
              >
                Enviar Dados
              </button>
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-700 rounded w-full"
                onClick={limparficha}
              >
                Limpar
              </button>
            </div>

            {fichaEnviada && (
              <div className="mt-6 bg-white p-4 rounded shadow w-full">
                <h3 className="text-xl font-bold mb-2">Dados enviados</h3>
                <p><strong>Nome:</strong> {fichaEnviada.nome}</p>
                <p><strong>Email:</strong> {fichaEnviada.email}</p>
                <p><strong>Idade:</strong> {fichaEnviada.idade}</p>
                <p><strong>Telefone:</strong> {fichaEnviada.telefone}</p>
              </div>
            )}

            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
              onClick={() => window.location.href = '/'}
            >
              Voltar ao Menu
            </button>
          </div>
        </div>
      );
    }
