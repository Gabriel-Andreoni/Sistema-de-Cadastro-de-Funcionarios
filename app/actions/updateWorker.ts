import { Trabalhador } from "../types/trabalhador";
import { supabase } from "../lib/supabase";

export async function UpdateWorker(id:Partial<Trabalhador['id']>, updatedData:Partial<Trabalhador>) {
    const { data, error } = await supabase
        .from('tb_trabalhadores')
        .update(updatedData)
        .eq('id', id);

    if (error) {
        throw new Error(`Error updating worker: ${error.message}`);
    }

    return data;
}