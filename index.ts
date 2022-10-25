
import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

async function handler(_req: Request): Promise<Response> {
 let params = _req.searchParams;
 let name = params.get('text'); // is the string "Jonathan Smith".
 return new Response(name);
}

serve(handler);
