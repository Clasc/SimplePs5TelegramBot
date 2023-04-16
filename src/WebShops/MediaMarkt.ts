import cheerio from "cheerio";
import { WebShop } from "./WebShop";

export const MediaMarkt: WebShop = {
    name: "Media Markt",
    productPage: "https://www.mediamarkt.at/de/search.html?query=ps5+konsole",
    url: "",
    hasPs5: (html: string) => {
        const productList = cheerio("[data-test=mms-search-srp-productlist-item]", html);
        console.log({ productList: productList });
        return false;
    }
}