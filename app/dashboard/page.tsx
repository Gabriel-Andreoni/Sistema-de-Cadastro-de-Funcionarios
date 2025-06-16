import { CreateWorker } from "../actions/createWorker";
import { Input } from "../components/Input";

export function DashboardInfo() {
  return (
    <div className="w-4/12 h-52 bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center">

    </div>
  )
}

export function DashboardContent() {
  return (
    <form
      className="w-full h-full mt-8 p-4 flex flex-col gap-2 rounded-lg bg-white"
      action={async (formData: FormData) => {
        "use server";

        await CreateWorker(formData);
      }}
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

      <button className="w-full p-4 bg-blue-500 rounded-lg font-bold text-white text-md cursor-pointer transition-colors hover:bg-blue-600">Cadastrar</button>
    </form>
  )
}

export default function Dashboard() {
  return (
    <div className="w-full h-full p-6 flex flex-col justify-center items-center">
      <div className="w-full mt-4 flex gap-4 justify-between">
        <DashboardInfo />
        <DashboardInfo />
        <DashboardInfo />
      </div>

      <DashboardContent />
    </div>
  );
}
