import { getWorkers } from "../actions/getWorkers"
import { DeleteButton } from "../components/DeleteButton";
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
            <table className="w-4/5 border-separate border-spacing-2 border border-gray-400 text-sm dark:border-gray-500 bg-white relative">
                <thead>
                    <tr className="bg-[#F6F6F6]">
                        <th className="w-1/2 border border-gray-300 p-4 text-left font-bold text-gray-900 dark:border-gray-600">Nome</th>
                        <th className="w-auto border border-gray-300 p-4 text-left font-bold text-gray-900 dark:border-gray-600">Idade</th>
                         <th className="w-auto border border-gray-300 p-4 text-left font-bold text-gray-900 dark:border-gray-600">Sexo</th>
                        <th className="w-auto border border-gray-300 p-4 text-left font-bold text-gray-900 dark:border-gray-600">CPF</th>
                        <th className="w-auto border border-gray-300 p-4 text-left font-bold text-gray-900 dark:border-gray-600">Email</th>
                        <th className="w-1/2 border border-gray-300 p-4 text-left font-bold text-gray-900 dark:border-gray-600">Cargo</th>
                        <th className="w-1/2 border border-gray-300 p-4 text-left font-bold text-gray-900 dark:border-gray-600">Ações</th>
                    </tr>
                </thead>
                {workers.map((item: Trabalhador, index: number) => (
                    <tbody key={index}>
                        <tr>
                            <td className="border border-gray-300 p-4 text-gray-900 font-bold dark:border-gray-600">{item.nome}</td>
                            <td className="border border-gray-300 p-4 text-gray-900 font-bold dark:border-gray-600">{item.idade}</td>
                            <td className="border border-gray-300 p-4 text-gray-900 font-bold dark:border-gray-600">{item.sexo}</td>
                            <td className="border border-gray-300 p-4 text-gray-900 font-bold dark:border-gray-600">{item.cpf}</td>
                            <td className="border border-gray-300 p-4 text-gray-900 font-bold dark:border-gray-600">{item.email}</td>
                            <td className="border border-gray-300 p-4 text-gray-900 font-bold dark:border-gray-600">{item.funcao}</td>
                            <td className="h-[54px] flex gap-2 items-center justify-center ">
                                <DeleteButton id={item.id} />

                                <Modal data={item} />
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}