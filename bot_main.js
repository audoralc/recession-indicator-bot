import { AtpAgent } from "@atproto/api";
import * as dotenv from 'dotenv';
import * as process from "process";
import generateIndicator from "./indicator_generation.js";

dotenv.config();

async function agentInit() { 
    const agent = new AtpAgent({
        service: "https://bsky.social", 
    });

    await agent.login({
        identifier: process.env.BLUESKY_USERNAME,
        password: process.env.BLUESKY_PASSWORD,
    });

    return agent; 
}

async function postIndicator() {
    try {
        const agent = await agentInit();

        const indicator = await generateIndicator(); 

        await agent.post({
            text: indicator, 
            createdAt: new Date().toISOString(),
        });

        console.log('post posted!!!', indicator);
    } catch (error) {
        console.error('the economy is good tbh', error);
    }
}

postIndicator();