import { DeleteWorker } from "../actions/deleteWorker";
import { getWorkers } from "../actions/getWorkers"
import { UpdateWorker } from "../actions/updateWorker";
import { Modal } from "../components/modal";
import { Trabalhador } from "../types/trabalhador";

export default async function Trabalhadores() {
    const workers: Trabalhador[] = await getWorkers();

    if (!workers) {
        return (
            <div>
                <h1>Não há trabalhadores cadastrados</h1>
            </div>
        )
    }


    return (
        <div className="w-full h-screen flex items-center justify-center">
            <table className="w-4/5 border-separate border-spacing-2 border border-gray-400 text-sm dark:border-gray-500 dark:bg-gray-800 relative">
                <thead>
                    <tr className="bg-gray-700">
                        <th className="w-1/2 border border-gray-300 p-4 text-left font-light  text-gray-900 dark:border-gray-600 dark:text-gray-200">Nome</th>
                        <th className="w-auto border border-gray-300 p-4 text-left font-light  text-gray-900 dark:border-gray-600 dark:text-gray-200">Idade</th>
                        <th className="w-auto border border-gray-300 p-4 text-left font-light  text-gray-900 dark:border-gray-600 dark:text-gray-200">CPF</th>
                        <th className="w-auto border border-gray-300 p-4 text-left  font-light text-gray-900 dark:border-gray-600 dark:text-gray-200">Email</th>
                        <th className="w-1/2 border border-gray-300 p-4 text-left font-light  text-gray-900 dark:border-gray-600 dark:text-gray-200">Cargo</th>
                        <th className="w-1/2 border border-gray-300 p-4 text-left font-light  text-gray-900 dark:border-gray-600 dark:text-gray-200">Acões</th>
                    </tr>
                </thead>
                {workers.map((item: Trabalhador, index: number) => (
                    <tbody key={index}>
                        <tr>
                            <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">{item.nome}</td>
                            <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">{item.idade}</td>
                            <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">{item.cpf}</td>
                            <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">{item.email}</td>
                            <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">{item.funcao}</td>
                            <td className="h-[54px] flex gap-2 items-center justify-center ">
                                <form action={async () => {
                                    "use server";
                                    await DeleteWorker(item.id);
                                }}>
                                    <button type="submit" className="p-4 border-0 bg-red-500 cursor-pointer">Excluir</button>
                                </form>

                                <Modal data={item} />

                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}