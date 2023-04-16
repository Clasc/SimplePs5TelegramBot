export interface Bot {
    setup: () => Promise<void>;
    sendMessage: (message: string) => Promise<void>;
}