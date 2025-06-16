import { supabase } from "../lib/supabase";
import { Trabalhador } from "../types/trabalhador";


export async function DeleteWorker(id:Partial<Trabalhador['id']>) {
    const { error } = await supabase
        .from('tb_trabalhadores')
        .delete()
        .eq('id', id);

    if (error) {
        throw new Error(`Error deleting worker: ${error.message}`);
    }
}