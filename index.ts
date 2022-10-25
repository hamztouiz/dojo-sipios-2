
import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

async function handler(_req: Request): Promise<Response> {
 let tet::string = _req.body;
 return new Response(tet.split('&'));
}

serve(handler);
