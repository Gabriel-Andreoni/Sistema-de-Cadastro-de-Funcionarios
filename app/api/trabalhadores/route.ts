import { supabase } from "@/app/lib/supabase"
import { auth } from "@clerk/nextjs/server";

export async function GET() {
    const {userId} = await auth();

    if(!userId) {
        return new Response('Unauthorized', {status: 401})
    }
    const {data, error} = await supabase
    .from('tb_trabalhadores')
    .select('*')
    .eq("user_id", userId)

    if(error) {
        console.log(error.message);
    }
    
    return Response.json({
        data
    })
}