import cheerioModule from "cheerio";
import { WebShop } from "./WebShop";

export const Otto: WebShop = {
    url: "https://www.ottoversand.at/",
    productPage: "",
    api: "https://www.ottoversand.at/api/search/search",
    name: "Otto",
    requestBody: { previousRequest: { "query": "", "clientId": "OttoversandAt", "count": 72, "filters": {}, "locale": "de_DE", "minAvailCode": 2, "order": "relevance", "pageNoDisplay": 1, "specialArticles": [], "start": 0, "version": 10 }, "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36", "source": "extern", "personalization": "$$$$web$$s-4", "channel": "web", "query": "playstation+5", "clientId": "OttoversandAt", "count": 72, "filters": { "filter_manufacturer": ["fb_mnfctrr_plys.n5_4b"] }, "locale": "de_AT", "minAvailCode": 2, "order": "relevance", "pageNoDisplay": 1, "specialArticles": [], "start": 0, "version": 10, "allowTest": true, "seoFiltered": false, "doRedirectToCategoryUrl": false },
    hasPs5: (html: string) => {
        console.log(html);
        return false;
    }
}