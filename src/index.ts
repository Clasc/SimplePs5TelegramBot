//necessary import for loading telegram bot correctly
import TelegramBot, { EventEmitter } from "node-telegram-bot-api";


import { Scraper } from "./Scraper";
import { Scheduler } from "./Scheduler/Scheduler";
import { ElectronicsForU } from "./WebShops/ElectronicsForU";
import { Gamestop } from "./WebShops/Gamestop";
import { Libro } from "./WebShops/Libro";
import { ChatFileRepo } from "./Repos/ChatFileRepo";
import { FileStorage } from "./Storage/FileStorage";
import { ChatBot } from "./Bot/ChatBot";

const shops = [
    Libro,
    Gamestop,
    ElectronicsForU,
    //MediaMarkt,
    //Otto
];
const fileStore = FileStorage();
const repo = ChatFileRepo(fileStore);
const bot = ChatBot(repo);
const scraper = Scraper(bot);
const scheduler = Scheduler({
    job: () => scraper.scrape(shops),
    timeout: 60000
});

scheduler.run();