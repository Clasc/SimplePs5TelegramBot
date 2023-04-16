import cheerioModule from "cheerio";
import { WebShop } from "./WebShop";

export const Libro: WebShop = {
    name: "Libro",
    url: "",
    productPage: "https://www.libro.at/gaming/ps5/ps5-konsolen.html",
    hasPs5: (html: string) => {
        const productList = cheerioModule(".products-grid", html);
        return productList.length > 0;
    }
}