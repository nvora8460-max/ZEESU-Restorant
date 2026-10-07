import app from "./app.js";
import env from "./config/config.js";

app.listen(env.PORT, ()=>{
    console.log(`server running on port ${env.PORT}`);
})