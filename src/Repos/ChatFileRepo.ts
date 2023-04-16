import { DataStorage } from "../Storage/DataStorage";
import { ChatRepo } from "./ChatRepo";

export const ChatFileRepo: (dataStorage: DataStorage) => ChatRepo = (dataStorage) => {
    const getChats = async (): Promise<number[]> => {
        const chats = await dataStorage.read("res/chats.json");
        return JSON.parse(chats);
    }

    const setChats = async (chats: number[]) => {
        const json = JSON.stringify(chats);
        await dataStorage.write('res/chats.json', json);
    }

    return { getChats, setChats };
}