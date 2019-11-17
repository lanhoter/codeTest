// Implement an EventEmitter.

// Example:

// const emitter = new EventEmitter();
// const sub = emitter.subscribe(eventName, callback); // typeof eventName === string
// emitter.emit(eventName, a, b, c, d, ...);
// sub.unsubscribe();



(function main() {

    class EventEmitter {
        constructor() {
            this.callbacks = new Map(); // {eventName: callback, ...}
        }

        subscribe(eventName, callback) {
            this.callbacks.set(eventName, callback);
            return {
                unsubscribe: () => this.callbacks.delete(eventName)
            };
        }

        emit(eventName, ...params) {
            if (this.callbacks.has(eventName)) {
                this.callbacks.get(eventName).apply(null, params);
            }
        }
    }

    let emitter = new EventEmitter();

    let sub = emitter.subscribe("test", () => console.log('Hello!'));
    emitter.emit("test");
    emitter.emit("test");
    sub.unsubscribe();
    emitter.emit("test");
}());