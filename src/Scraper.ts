import rp from "request-promise";
import { BotService } from "./Services/BotService";
import { WebShop } from "./WebShops/WebShop";

export class Scraper {
    private botService = BotService.instance;

    public async scrape(shops: WebShop[]): Promise<void> {
        for (let shop of shops) {
            try {
                let res = await rp(shop.productPage);
                if (shop.hasPs5(res)) {
                    this.botService.sendMessage(shop);
                }
            }
            catch (error) {
                console.error("error loading page: ", shop.name);
            }
        }
    }
}
