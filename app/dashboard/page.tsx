import { CreateWorker } from "../actions/createWorker";
import { Input } from "../components/Input";

export default function Dashboard() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        action={async (formData: FormData) => {
          "use server";
          
          await CreateWorker(formData);
        }}

        className="w-1/2 h-1/2 p-4 flex flex-col justify-center  bg-white rounded">
        <div className="w-full flex flex-wrap gap-2">
          <Input
            type="text"
            name="nome"
            placeholder="Nome"
            style="p-2 rounded border border-slate-950 text-slate-950 font-bold outline-none"
          />

          <Input
            type="text"
            name="idade"
            placeholder="Idade"
            style="p-2 rounded border border-slate-950 text-slate-950 font-bold outline-none"
          />

          <Input
            type="text"
            name="CPF"
            placeholder="CPF"
            style="p-2 rounded border border-slate-950 text-slate-950 font-bold outline-none"
          />

          <Input
            type="text"
            name="email"
            placeholder="Email"
            style="p-2 rounded border border-slate-950 text-slate-950 font-bold outline-none"
          />
          
          <Input
            type="text"
            name="cargo"
            placeholder="Cargo"
            style="p-2 rounded border border-slate-950 text-slate-950 font-bold outline-none"
          />
        </div>
        <button className="w-3/12 mt-4 p-4 rounded bg-slate-950 text-white cursor-pointer">Cadastrar Trabalhador</button>
      </form>
    </div>
  );
}
