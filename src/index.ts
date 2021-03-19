//necessary import for loading telegram bot correctly
import TelegramBot, { EventEmitter } from "node-telegram-bot-api";


import { Scraper } from "./Scraper";
import { Scheduler } from "./Services/Scheduler";
import { ElectronicsForU } from "./WebShops/ElectronicsForU";
import { Gamestop } from "./WebShops/Gamestop";
import { Libro } from "./WebShops/Libro";

let shops = [
    Libro,
    Gamestop,
    ElectronicsForU,
    //MediaMarkt,
    //Otto
];


let scraper = new Scraper();

let scheduler = new Scheduler({
    job: () => scraper.scrape(shops),
    timeout: 60000
});

scheduler.run();