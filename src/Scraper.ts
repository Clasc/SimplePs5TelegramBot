import { WebShop } from "./WebShops/WebShop";
import { Bot } from "./Bot/Bot";
import { getMessage } from "./getMessage/getMessage";

export const Scraper = (bot: Bot) => {
    const scrape = async (shops: WebShop[]) => {
        for (const shop of shops) {
            fetch(shop.productPage)
                .then(data => data.text())
                .then((response) => {
                    if (shop.hasPs5(response)) {
                        bot.sendMessage(getMessage(shop));
                    }
                })
                .catch(error => console.error("error loading data: ", JSON.stringify({ shop: shop.name, error })));
        }
    }
    return { scrape };
}
