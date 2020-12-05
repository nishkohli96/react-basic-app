import { makeAutoObservable, toJS } from 'mobx';

class ObjVar {
    obj = {
        name: 'nish',
        favLang: 'React',
        music: ['Vicetone', 'Chelsea Cutler', 'Thomas Rhett'],
    };

    constructor() {
        makeAutoObservable(this);
    }

    /*  Required to use toJS(value) to convert obj to a JS object, else wud show it as 
        some proxy object */
    get objValue() {
        return toJS(this.obj);
    }
}

export default ObjVar;
