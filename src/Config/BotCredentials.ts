import { config } from "dotenv";

config();

if (!process.env.BOT_TOKEN) {
    throw "Error: you have to specify a BOT_TOKEN in your environment variables";
}

export const BotCredentials = {
    token: process.env.BOT_TOKEN,
    name: "Ps5at_bot"
}