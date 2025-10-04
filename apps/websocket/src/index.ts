import { WebSocketServer } from "ws";
import {client} from "@repo/db/client";

const wss = new WebSocketServer({port:3001});

wss.on("connection",async (ws)=>{
    console.log("New Client Connected!");
    ws.on("message",async (message)=>{
        const user = await client.user.create({
            data:{
                username:Math.random().toString(),
                password:Math.random().toString()
            }
        });
        console.log(user);
        const all_users = await client.user.findMany();
        console.log("All users in DB:",  all_users);
        // client ko wapas reply bhejo
        ws.send(`Server reply: ${message}`);
    });
    ws.on("close",()=>{
        console.log("Client Disconnected");
    });

    ws.send("Welcome! You are connected to WebSocket server.")
});