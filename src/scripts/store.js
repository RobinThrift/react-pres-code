// src/scripts/store.js 

import StdData from './data';

class Store {
    constructor() {
        let _data = localStorage.getItem('_data');
        if (_data) {
            this.data = JSON.parse(_data);
        } else {
            this.data = StdData;
            this.save();
        }
    }

    save() {
        localStorage.setItem('_data', JSON.stringify(this.data));
    }

    get(name) {
        return this.data[name];
    }

    set(name, value) {
        this.data[name] = value;
        this.save();
    }
}

export default Store;
