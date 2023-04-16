import { FileStorage } from "../Services/FileStorage";
import { ChatRepo } from "./Repo";

export const ChatFileRepo:() => ChatRepo = () => {
    const reader = FileStorage();

    const getChats = async (): Promise<number[]> => {
        const chats = await reader.read("res/chats.json");
        return JSON.parse(chats);
    }

    const setChats = async (chats: number[]) => {
        const json = JSON.stringify(chats);
        await reader.write('res/chats.json', json);
    }

    return { getChats, setChats };
}