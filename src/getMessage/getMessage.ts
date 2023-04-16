import { WebShop } from "../WebShops/WebShop";

export const getMessage = (shop: WebShop) => `${shop.name} has a Ps5! \n See here: \n ${shop.productPage}`;