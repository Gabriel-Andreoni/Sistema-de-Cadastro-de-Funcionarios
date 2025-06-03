"use client";

import { UpdateWorker } from "@/app/actions/updateWorker";
import { Trabalhador } from "@/app/types/trabalhador";
import { useState } from "react";

type Props = {
    data: Trabalhador;
}

export function Modal({ data }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [newName, setNewName] = useState(data.nome || '');
    const [newIdade, setNewIdade] = useState(String(data.idade));
    const [newCpf, setNewCpf] = useState(data.cpf || '');
    const [newEmail, setNewEmail] = useState(data.email || '');
    const [newFuncao, setNewFuncao] = useState(data.funcao || '');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        await UpdateWorker(data.id, {
            nome: newName,
            idade: Number(newIdade),
            cpf: newCpf,
            email: newEmail,
            funcao: newFuncao,
        })

        window.alert('Trabalhador atualizado com sucesso!');
        setIsOpen(false);
    }
    return (
        <div>
            <button
                onClick={() => setIsOpen((prevState) => !prevState)}
                className="p-4 border-0 bg-gray-500 cursor-pointer">
                Editar
            </button>

            {isOpen && (
                <div className="w-[500px] h-[500px] m-auto p-2 bg-white absolute inset-0">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full h-full p-2 border">
                        <h1 className="text-2xl font-bold mb-4 text-slate-950">Editar trabalhador</h1>
                        <input
                            type="text"
                            defaultValue={data.nome}
                            className="w-full p-2 mb-4 border border-gray-300 rounded text-slate-950"
                            placeholder="Nome"
                            onChange={(e) => setNewName(e.target.value)}
                        />
                        <input
                            type="number"
                            defaultValue={data.idade}
                            className="w-full p-2 mb-4 border border-gray-300 rounded text-slate-950"
                            placeholder="Idade"
                            onChange={(e) => setNewIdade(e.target.value)}
                        />
                        <input
                            type="text"
                            defaultValue={data.cpf}
                            className="w-full p-2 mb-4 border border-gray-300 rounded text-slate-950"
                            placeholder="CPF"
                            onChange={(e) => setNewCpf(e.target.value)}
                        />
                        <input
                            type="text"
                            defaultValue={data.email}
                            className="w-full p-2 mb-4 border border-gray-300 rounded text-slate-950"
                            placeholder="Email"
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            defaultValue={data.funcao}
                            className="w-full p-2 mb-4 border border-gray-300 rounded text-slate-950"
                            placeholder="Cargo"
                            onChange={(e) => setNewFuncao(e.target.value)}
                        />
                        <button
                        type="submit"
                        className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200 cursor-pointer"
                        >Salvar</button>
                    </form>
                </div>
            )}
        </div>
    )
}