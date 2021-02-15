import cheerioModule from "cheerio";
import { WebShop } from "./WebShop";

export let ElectronicsForU: WebShop = {
    name: "Electronic 4 you",
    url: "",
    productPage: "https://www.electronic4you.at/catalogsearch/result/index/?manufacturer=9675&q=Ps5",
    hasPs5: (html: string) => {
        let priceEl = cheerioModule("#products-list .item span.price", html);
        let prices: number[] = [];
        priceEl.each((idx, el) => {
            let priceText = cheerioModule(el).text().replace("€", "").trim();
            let price = parseFloat(priceText);
            prices.push(price);
        })
        return prices.some((price) => price > 390);
    }
}