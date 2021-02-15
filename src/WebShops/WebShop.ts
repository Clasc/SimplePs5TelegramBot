export interface WebShop {
    name: string;
    url: string;
    productPage: string;
    api?: string;
    requestBody?: any;
    hasPs5: (html: string) => boolean;
}