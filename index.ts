
import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

async function handler(_req: Request): Promise<Response> {
 console.log(_req.url);
 return new Response();
}

serve(handler);
