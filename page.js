"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [curso, setCurso] = useState("");
  const [editIndex, setEditarIndex] = useState(null);

  function limparCampos() {
    setNome("");
    setEmail("");
    setCelular("");
    setCurso("");
    setEditarIndex(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
  
    const id = crypto.randomUUID();
    const novoAluno = { id, nome, email, celular, curso };
    
    const novosAlunos = [...alunos]; 

    if (editIndex !== null) {
    
      novosAlunos[editIndex] = { ...novoAluno, id: alunos[editIndex].id };
    } else {
      // Se for novo, adiciona à lista
      novosAlunos.push(novoAluno);
    }

    setAlunos(novosAlunos);
    limparCampos();
  }

  function handleEditar(index) {
    const aluno = alunos[index];
    setNome(aluno.nome);
    setEmail(aluno.email);
    setCelular(aluno.celular);
    setCurso(aluno.curso);
    setEditarIndex(index);
  }

  function handleDeletar(index) {
    const novosAlunos = alunos.filter((_, i) => i !== index);
    setAlunos(novosAlunos);
  }

  return (
    <div className="min-h-screen bg-black p-6 flex flex-col items-center text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">
          Cadastro de Alunos Senac Competição
        </h1>
        <h6 className="text-orange-500">Etapa Escolar Lavras-MG</h6>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
        <div className="flex flex-row">
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            className="border-2 w-80 h-10 rounded-lg mb-4 me-2 text-white p-2"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border-2 w-80 h-10 rounded-lg mb-4 text-white p-2"
            required
          />
        </div>
        <div className="flex flex-row">
          <input
            type="text"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            placeholder="Celular"
            className="border-2 w-80 h-10 rounded-lg mb-4 me-2 text-white p-2"
          />
          <input
            type="text"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            placeholder="Curso"
            className="border-2 w-80 h-10 rounded-lg mb-4 text-white p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
          {editIndex !== null ? "Salvar Alteração" : "Adicionar Aluno"}
        </button>
      </form>

      <table className="table-auto w-full mt-8 bg-gray-200 rounded-lg text-black overflow-hidden">
        <thead>
          <tr className="bg-gray-300">
            <th className="border-2 p-2">Nome</th>
            <th className="border-2 p-2">Email</th>
            <th className="border-2 p-2">Celular</th>
            <th className="border-2 p-2">Curso</th>
            <th className="border-2 p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno, index) => (
            <tr key={aluno.id} className="text-center">
              <td className="border-2 p-2">{aluno.nome}</td>
              <td className="border-2 p-2">{aluno.email}</td>
              <td className="border-2 p-2">{aluno.celular}</td>
              <td className="border-2 p-2">{aluno.curso}</td>
              <td className="border-2 p-2">
                <button 
                  onClick={() => handleEditar(index)} 
                  className="bg-yellow-500 text-white px-2 py-1 rounded-lg mr-2"
                >
                  Editar
                </button>
                <button 
                  onClick={() => handleDeletar(index)} 
                  className="bg-red-500 text-white px-2 py-1 rounded-lg"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
          {alunos.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center p-4">Nenhum aluno cadastrado.</td>
            </tr>
          )}
        </tbody>
      </table>

      <Link href="/">
        <button className="bg-orange-500 hover:bg-orange-600 mt-12 text-white font-bold py-2 px-4 rounded w-48">
          Voltar ao Menu
        </button>
      </Link>
    </div>
  );
}