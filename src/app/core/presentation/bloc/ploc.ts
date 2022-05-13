type Subscription<S> = (state: S) => void;

export abstract class Ploc<S> {
    private _state: S;
    private subscriptions: Subscription<S>[] = [];

    constructor(state: S) {
        this._state = state;
    }

    public get state(): S {
        return this._state;
    }

    changeState(state: S) {
        this._state = state;

        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(listener => listener(this.state));
        }
    }

    subscribe(listener: Subscription<S>) {
        this.subscriptions.push(listener);
    }

    unsubscribe(listener: Subscription<S>) {
        const index = this.subscriptions.indexOf(listener);
        if (index > -1) {
            this.subscriptions.splice(index, 1);
        }
    }
}