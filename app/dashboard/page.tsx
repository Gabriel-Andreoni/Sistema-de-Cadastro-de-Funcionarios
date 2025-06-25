import { getWorkers } from "../actions/getWorkers";
import { DashboardContent } from "../components/DashboardContent";

export function DashboardInfo({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-4/12 h-52 bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center">
      {children}
    </div>
  );
}


export default async function Dashboard() {
  const workers = await getWorkers();
  const workersAge = workers.map((worker) => Number(worker.idade));
  const workerAgeSum = workersAge.reduce((acc, idade) => acc + idade, 0);
  const workersAboveAge = workersAge.length > 0 ? workerAgeSum / workersAge.length : 0;

  const maleWorkers = workers.filter((worker) => worker.sexo === "Masculino");
  const femaleWorkers = workers.filter((worker) => worker.sexo === "Feminino");

  return (
    <div className="w-full h-full p-6 flex flex-col justify-center items-center">
      <div className="w-full mt-4 flex gap-4 justify-between">
        <DashboardInfo>
          <div className="w-full flex flex-col items-center">
            <span className="font-bold text-6xl text-blue-500">{workers.length}</span>
            <span className="font-bold text-xl text-slate-950">{workers.length > 1 ? 'Trabalhadores' : 'Trabalhador'}</span>
          </div>
        </DashboardInfo>
        <DashboardInfo>
          <div className="w-full flex flex-col items-center">
            <span className="font-bold text-6xl text-blue-500">{Math.trunc(workersAboveAge)} anos</span>
            <span className="font-bold text-xl text-slate-950">Idade média</span>
          </div>
        </DashboardInfo>
        <DashboardInfo>
          <div className="w-full flex flex-col items-center">
            <span className="font-bold text-6xl text-blue-500">{maleWorkers.length}</span>
            <span className="font-bold text-xl text-slate-950">{maleWorkers.length > 1 ? 'Trabalhadores Masculinos' : 'Trabalhador Masculino'}</span>
          </div>
        </DashboardInfo>
        <DashboardInfo>
          <div className="w-full flex flex-col items-center">
            <span className="font-bold text-6xl text-blue-500">{femaleWorkers.length}</span>
            <span className="font-bold text-xl text-slate-950">{femaleWorkers.length > 1 ? 'Trabalhadoras Femininas' : 'Trabalhadora Feminina'}</span>
          </div>
        </DashboardInfo>
      </div>

      <DashboardContent />
    </div>
  );
}
