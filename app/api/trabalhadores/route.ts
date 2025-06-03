import { supabase } from "@/app/lib/supabase"

export async function GET() {
    const {data, error} = await supabase
    .from('tb_trabalhadores')
    .select('*')

    if(error) {
        console.log(error.message);
    }
    
    return Response.json({
        data
    })
}