import fs from "fs";
import { DataStorage } from "./DataStorage";

export const FileStorage: () => DataStorage = () => {
    const read = async (path: string) => {
        return new Promise<string>((resolve, reject) => fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data.toString());
            }
        }))
    }

    const write = async (path: string, data: string) => {
        return new Promise<void>((resolve, reject) => fs.writeFile(path, data, { encoding: "utf-8" }, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        }))
    }

    return { read, write };
}