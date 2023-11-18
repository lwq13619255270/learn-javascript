class Store {
    constructor() {
        this._state = {}
    }

    get(key) {
        if(key in this._state) {
            return this._state[key]
        } else {
            throw new Error(`${key} is not defined`)
        }
    }

    set(key, val) {
        this._state[key] = val
    }

    /**
     * 让其他类直接使用该类的方法和属性
     * @param {*} cls 其他类
     */
    connect(cls) {
        let store = this;
        return class extends cls {
            constructor(...args) {
                super(...args)
                this.get = store.get.bind(store);
                this.set = store.set.bind(store);
            }
        }
    }
}

let store = new Store();