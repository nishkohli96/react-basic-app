import { makeObservable, observable, computed, action } from 'mobx';
import store from 'store'; // store.js exposes a simple API for cross-browser local storage

class Doubler {
    /* Prefer initializing the counterValue */
    counterValue = 0;

    constructor() {
        const existingStore = store.get('counter');

        if (existingStore) {
            this.counterValue = existingStore;
        }

        /*  Just write makeAutoObservable(this) if importing makeAutoObservable from mobx.
            It will itself infer the types */
        makeObservable(this, {
            counterValue: observable,
            double: computed,
            increment: action,
            doubleNum: action,
        });
    }

    get double() {
        return this.counterValue * 2;
    }

    doubleNum() {
        this.counterValue *= 2;
        store.set('counter', this.counterValue);
    }

    increment() {
        this.counterValue++;
        store.set('counter', this.counterValue);
    }

    /* Can use a fn like this if your observable changes by an API call */
    // async addItem({ _id }) {
    //     try {
    //       const response = await ItemService({ _id });
    //       if (response.success) {
    //         this.itemUpdate = response;
    //       }
    //     } catch (err) {
    //       return;
    //     }
    //   }
}

export default Doubler;
