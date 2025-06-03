import { supabase } from "./lib/supabase";

export default function Home() {
  async function handleFormSubmit(formData:FormData) {
    "use server";
    const nome = formData.get("nome");
    const idade = formData.get("idade");
    const cpf = formData.get("CPF");
    const email = formData.get("email");
    const cargo = formData.get("cargo");

    const {data, error} = await supabase
      .from("tb_trabalhadores")
      .insert({
        nome: nome,
        idade: Number(idade),
        cpf: cpf,
        email: email,
        funcao: cargo
      });

      if(error) {
        console.log(`Falha ao cadastrar trabalhador: ${error.message}`);
      }

      console.log("Trabalhador cadastrado com sucesso:", data);
  }


  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
      action={handleFormSubmit}
      className="w-1/2 h-1/2 p-4 flex flex-col justify-center  bg-white rounded">
        <div className="w-full flex flex-wrap gap-2">
          <input
            className="p-2 rounded border border-slate-950 text-slate-950 font-bold outline-none"
            placeholder="Nome"
            name="nome"
          />
          <input
            className="p-2 rounded border border-slate-950 text-slate-950 font-bold outline-none"
            placeholder="Idade"
            name="idade"
          />
          <input
            className="p-2 rounded border border-slate-950 text-slate-950 font-bold outline-none"
            placeholder="CPF"
            name="CPF"
          />
          <input
            className="p-2 rounded border border-slate-950 text-slate-950 font-bold outline-none"
            placeholder="Email"
            name="email"
          />
          <input
            className="p-2 rounded border border-slate-950 text-slate-950 font-bold outline-none"
            placeholder="Cargo"
            name="cargo"
          />
        </div>
        <button className="w-3/12 mt-4 p-4 rounded bg-slate-950 text-white">Cadastrar Trabalhador</button>
      </form>
    </div>
  );
}
