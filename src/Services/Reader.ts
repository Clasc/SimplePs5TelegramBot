import fs from "fs";

export class Reader {
    async read(path: string) {
        return new Promise<string>((resolve, reject) => fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data.toString());
            }
        }))
    }

    async write(path: string, data: any) {
        return new Promise<void>((resolve, reject) => fs.writeFile(path, data, { encoding: "utf-8" }, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        }))
    }
}