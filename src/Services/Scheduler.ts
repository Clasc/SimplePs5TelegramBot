import { EventEmitter } from "node-telegram-bot-api";

export class Scheduler {
    private options: { timeout: number, job: () => void }
    private static events = { start: "started", end: "executed" };
    private emitter = new EventEmitter();

    constructor(options: { timeout: number, job: () => void }) {
        this.options = options;
    }

    public run(): void {
        this.emitter.on(Scheduler.events.start, () => {
            this.options.job();
            this.emitter.emit(Scheduler.events.end);
        });

        this.emitter.on(Scheduler.events.end, () => {
            setTimeout(() => this.emitter.emit(Scheduler.events.start), this.options.timeout);
        });

        this.emitter.emit(Scheduler.events.start);
    }

}