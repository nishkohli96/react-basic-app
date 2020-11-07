import Doubler from './doubler.store';

/* Import all stores here */
class RootStore {
    constructor() {
        this.doubler = new Doubler(this);
    }
}

export default new RootStore();
