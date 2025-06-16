import { config } from "dotenv";
config();

import ExpressServer from "./configs/server";

const server = new ExpressServer();
server.listen();

console.log("Hola Mundo");
console.log("Hola Mundo 2");
