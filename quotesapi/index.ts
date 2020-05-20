import { Application, Router, Context } from "https://deno.land/x/denotrain@v0.4.4/mod.ts";
import { quotes } from "./quotes.ts";
 
const app = new Application({ hostname: "192.168.43.150"});

const router = new Router();


app.use("/api", router);


app.get("/", (Ctx) => {
  return "Hello Faheem from Deno which is Node "; 
});

router.get("/quotes",(ctx)=>{
  return {"quotes": quotes };
});

 await app .run();