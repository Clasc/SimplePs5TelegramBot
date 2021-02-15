import { Reader } from "../Services/Reader";

export class ChatRepo {
    private readonly reader: Reader = new Reader();

    async getChats(): Promise<number[]> {
        let chats = await this.reader.read("res/chats.json");
        return JSON.parse(chats);
    }

    async setChats(chats: number[]) {
        let json = JSON.stringify(chats);
        await this.reader.write('res/chats.json', json);
    }
}