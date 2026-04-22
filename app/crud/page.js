"use client";
import { useState } from "react";
import Link from "next/link";

export default function CRUD() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");

  const [alunos, setAlunos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const limparDados = () => {
    setNome("");
    setEmail("");
    setCelular("");
    setCidade("");
    setIdade("");
    setEditIndex(-1);
  };

  const cadastrarAluno = () => {
    if (!nome.trim() || !email.trim()) return;

    const novoAluno = { nome, email, celular, idade, cidade };

    if (editIndex >= 0) {
      const novoArray = [...alunos];
      novoArray[editIndex] = novoAluno;
      setAlunos(novoArray);
    } else {
      setAlunos((prev) => [...prev, novoAluno]);
    }

    limparDados();
  };

  const editarAluno = (index) => {
    const aluno = alunos[index];
    setNome(aluno.nome);
    setEmail(aluno.email);
    setCelular(aluno.celular);
    setIdade(aluno.idade);
    setCidade(aluno.cidade);
    setEditIndex(index);
  };

  const excluirAluno = (index) => {
    setAlunos((prev) => prev.filter((_, i) => i !== index));
    if (editIndex === index) limparDados();
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-5">
          <h1 className="text-3xl font-bold">Cadastro de Alunos</h1>
        </div>

        <div className="p-5 bg-white rounded shadow space-y-4">
          <div className="grid gap-2 md:grid-cols-2">
            <div>
              <label className="font-semibold">Nome</label>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="font-semibold">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="font-semibold">Celular</label>
              <input
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="font-semibold">Cidade</label>
              <input
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="font-semibold">Idade</label>
              <input
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={cadastrarAluno}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {editIndex >= 0 ? "Atualizar" : "Cadastrar"}
            </button>
            <button
              onClick={limparDados}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Limpar
            </button>
            <Link
              href="/"
              className="bg-gray-700 hover:bg-black text-white font-bold py-2 px-4 rounded"
            >
              Voltar
            </Link>
          </div>
        </div>

        <div className="mt-5 bg-white rounded shadow p-4">
          <h2 className="text-2xl font-semibold mb-3">Lista de Alunos</h2>
          {alunos.length === 0 ? (
            <p className="text-gray-500">Nenhum aluno cadastrado.</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border px-2 py-1">Nome</th>
                  <th className="border px-2 py-1">Email</th>
                  <th className="border px-2 py-1">Celular</th>
                  <th className="border px-2 py-1">Cidade</th>
                  <th className="border px-2 py-1">Idade</th>
                  <th className="border px-2 py-1">Ações</th>
                </tr>
              </thead>
              <tbody>
                {alunos.map((aluno, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border px-2 py-1">{aluno.nome}</td>
                    <td className="border px-2 py-1">{aluno.email}</td>
                    <td className="border px-2 py-1">{aluno.celular}</td>
                    <td className="border px-2 py-1">{aluno.cidade}</td>
                    <td className="border px-2 py-1">{aluno.idade}</td>
                    <td className="border px-2 py-1">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => editarAluno(index)}
                          className=" text-center bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-1 px-2 rounded transition"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => excluirAluno(index)}
                          className=" text-center bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded transition"
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
