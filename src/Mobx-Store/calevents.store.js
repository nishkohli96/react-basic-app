import { makeAutoObservable } from 'mobx';
import store from 'store';

class CalendarEvents {
    events = [];

    constructor() {
        const existingStore = store.get('calEvents');

        if (existingStore) {
            this.events = existingStore;
        }

        makeAutoObservable(this);
    }

    addEvent(event) {
        this.events.push(event);
        store.set('calEvents', this.events);
    }
}

export default CalendarEvents;
