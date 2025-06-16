"use server";

import { supabase } from "../lib/supabase";
import { auth } from "@clerk/nextjs/server";

export async function getWorkers() {
    const {userId} = await auth();

    if(!userId) {
        throw new Error("Usuário não autenticado");
    }

    const { data, error } = await supabase
    .from("tb_trabalhadores")
    .select("*")
    .eq("user_id", userId);

    if (error) {
        throw new Error(error.message);
    }
    return data;
}