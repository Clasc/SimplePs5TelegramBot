export interface ChatRepo {
    getChats: () => Promise<number[]>;
    setChats: (chats: number[]) => Promise<void>;
}