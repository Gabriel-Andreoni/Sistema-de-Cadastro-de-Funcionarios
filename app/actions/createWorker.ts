import { supabase } from "../lib/supabase";
import { auth } from "@clerk/nextjs/server";

export async function CreateWorker(formData: FormData) {
  const {userId} = await auth();

  if(!userId) {
    throw new Error("Usuário não autenticado");
  }

  const { error } = await supabase
    .from("tb_trabalhadores")
    .insert({
      nome: formData.get("nome"),
      idade: Number(formData.get("idade")),
      cpf: formData.get("CPF"),
      email: formData.get("email"),
      funcao: formData.get("cargo"),
      user_id: userId,
      sexo: formData.get("sexo"),
    });


  if (error) {
    throw new Error(error.message);
  }
}