"use client";

import { DeleteWorker } from "@/app/actions/deleteWorker";
import { Trabalhador } from "@/app/types/trabalhador";
import { redirect } from "next/navigation";
import { Toast } from "../Toast";

export function DeleteButton({ id }: { id: Trabalhador['id'] }) {

    const handleDelete = async () => {
        await DeleteWorker(id);
        Toast("Trabalhador excluído com sucesso!");

        redirect("/trabalhadores");

    };

    return (
        <button
            onClick={handleDelete}
            className="p-4 border-0 bg-red-500 cursor-pointer"
        >
            Excluir
        </button>
    );
}
