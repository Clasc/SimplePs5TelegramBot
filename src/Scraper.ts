import rp from "request-promise";

import { WebShop } from "./WebShops/WebShop";
import { Bot } from "./Bot/Bot";
import { getMessage } from "./getMessage/getMessage";

export const Scraper = (bot: Bot) => {
    const scrape = async (shops: WebShop[]) => {
        for (const shop of shops) {
            try {
                const res = await rp(shop.productPage);
                if (shop.hasPs5(res)) {
                    bot.sendMessage(getMessage(shop));
                }
            }
            catch (error) {
                console.error("error loading page: ", shop.name);
            }
        }
    }
    return { scrape };
}
