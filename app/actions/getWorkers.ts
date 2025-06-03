"use server";

import { supabase } from "../lib/supabase";

export async function getWorkers() {
    const { data, error } = await supabase.from("tb_trabalhadores").select("*");
    if (error) {
        throw new Error(error.message);
    }
    return data;
}