import ObjVar from './object.store';
import Doubler from './doubler.store';
import CalendarEvents from './calevents.store';

/* Import all stores here */
class RootStore {
    constructor() {
        this.objvar = new ObjVar(this);
        this.doubler = new Doubler(this);
        this.eventStore = new CalendarEvents(this);
    }
}

export default new RootStore();
