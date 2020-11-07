import { makeObservable, observable, computed, action } from 'mobx';

class Doubler {
    /* Prefer initializing the counterValue */
    counterValue = 0;

    constructor() {
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
    }

    increment() {
        this.counterValue++;
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
