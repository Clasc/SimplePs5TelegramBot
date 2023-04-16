import TelegramBot from "node-telegram-bot-api";
import { BotCredentials } from "../../Config/BotCredentials";
import { ChatRepo } from "../../Repos/Repo";
import { WebShop } from "../../WebShops/WebShop";
import { Bot } from "./Bot";

export const ChatBot: (chatRepo: ChatRepo) => Bot = (chatRepo: ChatRepo) => {
    const telegramBot = new TelegramBot(BotCredentials.token, { polling: true });
    const setup = async () => {
        const chats = await chatRepo.getChats();
        telegramBot.onText(/notifyme/, async (msg, match) => {
            const chatId = msg.chat.id;
            if (!match) {
                return;
            }
            try {

                if (chats.some((val) => val === chatId)) {
                    await telegramBot.sendMessage(chatId, "You are already registered for ps5 notifications!");
                    return;
                }
                await telegramBot.sendMessage(chatId, "okay, sending you infos about ps5");
                chats.push(chatId);
                chatRepo.setChats(chats);
            }
            catch (err) {
                console.error("error answering notify message", err);
            }
        });

        telegramBot.onText(new RegExp("hello"), async (msg, match) => {
            const chatId = msg.chat.id;
            if (!match) {
                return;
            }

            try {
                await telegramBot.sendMessage(chatId, "Hello!");
            }
            catch (err) {
                console.error("error answering notify message", err);
            }
        });
    }

    const sendMessage = async (message:string) => {
        const chats = await chatRepo.getChats();
        for (const chat of Array.from(chats)) {
            try {
                await telegramBot.sendMessage(chat, message);
            }
            catch (err) {
                console.error("error sending ps5 notification", err);
            }

        }
    }
    return { setup, sendMessage };
}