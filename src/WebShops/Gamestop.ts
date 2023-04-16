import cheerioModule from "cheerio";
import { WebShop } from "./WebShop";

export const Gamestop: WebShop = {
    name: "Gamestop",
    productPage: "https://www.gamestop.at/PS5/Games/160202/playstation-5",
    url: "",
    hasPs5: (html: string) => {
        const disabledBuyButton = cheerioModule(".megaButton.buyDisabled", html);
        return disabledBuyButton.length === 0;
    }
}