import TelegramBot from "node-telegram-bot-api";
import { BotCredentials } from "../Config/BotCredentials";
import { ChatRepo } from "../Repos/ChatRepo";
import { WebShop } from "../WebShops/WebShop";

export class BotService {
    private readonly chatRepo = new ChatRepo();
    private ps5Bot: TelegramBot;
    private static _instance: BotService;


    public static get instance(): BotService {
        if (!BotService._instance) {
            BotService._instance = new BotService();
        }
        return BotService._instance
    }

    private constructor() {
        this.ps5Bot = new TelegramBot(BotCredentials.token, { polling: true });
        this.setup();
    }

    private async setup() {
        let chats = await this.chatRepo.getChats();
        this.ps5Bot.onText(/notifyme/, async (msg, match) => {
            const chatId = msg.chat.id;
            if (!match) {
                return;
            }
            try {

                if (chats.some((val) => val === chatId)) {
                    await this.ps5Bot.sendMessage(chatId, "You are already registered for ps5 notifications!");
                    return;
                }
                await this.ps5Bot.sendMessage(chatId, "okay, sending you infos about ps5");
                chats.push(chatId);
                this.chatRepo.setChats(chats);
            }
            catch (err) {
                console.error("error answering notify message", err);
            }
        });

        this.ps5Bot.onText(new RegExp("hello"), async (msg, match) => {
            const chatId = msg.chat.id;
            if (!match) {
                return;
            }

            try {
                await this.ps5Bot.sendMessage(chatId, "Hello!");
            }
            catch (err) {
                console.error("error answering notify message", err);
            }
        });
    }

    async sendMessage(shop: WebShop) {
        let chats = await this.chatRepo.getChats();
        for (const chat of Array.from(chats)) {
            try {
                await this.ps5Bot.sendMessage(chat, `${shop.name} has a Ps5! \n See here: \n ${shop.productPage}`);
            }
            catch (err) {
                console.error("error sending ps5 notification", err);
            }

        }
    }
}