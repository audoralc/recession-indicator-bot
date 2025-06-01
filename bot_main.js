// import { AtpAgent } from "@atproto/api";
// import * as process from 'process';
import generateIndicator from "./indicator_generation.js";


// async function agentInit() { 
//     // create a bsky agent
//     const agent = new AtpAgent({
//         service: 'https://bsky.social'
//     });

//     await agent.login({
//         identifier: process.env.BLUESKY_USERNAME,
//         password: process.env.BLUESKY_PASSWORD,
//     });

//     return agent; 
// }

async function postIndicator() {
    try {
        const indicator = await generateIndicator(); 
        console.log('hi', indicator);
    } catch (error) {
        console.error('economy is good tbh', error);
    }
}

postIndicator();