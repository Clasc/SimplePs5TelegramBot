import { EventEmitter } from "node-telegram-bot-api";

const events = { start: "started", end: "executed" } as const;

export const Scheduler = (options: { timeout: number, job: () => void }) => {
    const emitter = new EventEmitter();
    const run = ()=> {
        emitter.on(events.start, () => {
            options.job();
            emitter.emit(events.end);
        });

        emitter.on(events.end, () => {
            setTimeout(() => emitter.emit(events.start), options.timeout);
        });

        emitter.emit(events.start);
    }
    return {run};
}