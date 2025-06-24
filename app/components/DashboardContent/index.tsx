"use client";

import { CreateWorker } from '../../actions/createWorker';
import { Input } from "../Input";
import { useTransition } from "react";
import { Toast } from "../Toast";

export function DashboardContent() {
    const [isPending, startTransition] = useTransition();

    function handleSubmit(formData:FormData){
        startTransition(async () => {
            try {
                await CreateWorker(formData);
                Toast("Trabalhador criado com sucesso!");
            } catch(error:any) {
                Toast(error.message)
            }
        })
    }
    return (
        <form
            className="w-full h-full mt-8 p-4 flex flex-col gap-2 rounded-lg bg-white"
            action={handleSubmit}
        >
            <div className="w-full p-4 flex gap-2 items-center rounded-lg bg-[#F6F6F6]">
                <span className="font-bold text-slate-950">Nome:</span>
                <Input
                    className="w-11/12 p-2 text-slate-950 outline-none font-bold placeholder:text-gray-300"
                    placeholder="ex: Gabriel Andreoni"
                    type="text"
                    name="nome"
                />
            </div>
            <div className="w-full p-4 flex gap-2 items-center rounded-lg bg-[#F6F6F6]">
                <span className="font-bold text-slate-950">Idade:</span>
                <Input
                    className="w-11/12 p-2 text-slate-950 outline-none font-bold placeholder:text-gray-300"
                    placeholder="ex: 28"
                    type="text"
                    name="idade"
                />
            </div>
            <div className="w-full p-4 flex gap-2 items-center rounded-lg bg-[#F6F6F6]">
                <span className="font-bold text-slate-950">Sexo:</span>
                <>
                    <label
                        className="text-slate-950"
                        htmlFor="masculino">Masculino</label>
                    <Input
                        className="w-auto p-2 text-slate-950 outline-none font-bold placeholder:text-gray-300"
                        type="radio"
                        name="sexo"
                        value="Masculino"
                        id="masculino"
                    />
                </>
                <>
                    <label
                        className="text-slate-950"
                        htmlFor="feminino">Femenino</label>
                    <Input
                        className="w-auto p-2 text-slate-950 outline-none font-bold placeholder:text-gray-300"
                        type="radio"
                        name="sexo"
                        value="Feminino"
                        id="feminino"
                    />
                </>
            </div>
            <div className="w-full p-4 flex gap-2 items-center rounded-lg bg-[#F6F6F6]">
                <span className="font-bold text-slate-950">CPF:</span>
                <Input
                    className="w-11/12 p-2 text-slate-950 outline-none font-bold placeholder:text-gray-300"
                    placeholder="ex: 123.456.789-00"
                    type="text"
                    name="CPF"
                />
            </div>
            <div className="w-full p-4 flex gap-2 items-center rounded-lg bg-[#F6F6F6]">
                <span className="font-bold text-slate-950">Email:</span>
                <Input
                    className="w-11/12 p-2 text-slate-950 outline-none font-bold placeholder:text-gray-300"
                    placeholder="ex: 123.456.789-00"
                    type="text"
                    name="email"
                />
            </div>
            <div className="w-full p-4 flex gap-2 items-center rounded-lg bg-[#F6F6F6]">
                <span className="font-bold text-slate-950">Cargo:</span>
                <Input
                    className="w-11/12 p-2 text-slate-950 outline-none font-bold placeholder:text-gray-300"
                    placeholder="ex: Programador"
                    type="text"
                    name="cargo"
                />
            </div>

            <button className="w-full p-4 bg-blue-500 rounded-lg font-bold text-white text-md cursor-pointer transition-colors hover:bg-blue-600">
                {isPending ? "Criando..." : "Criar trabalhador"}
            </button>
        </form>
    );
}