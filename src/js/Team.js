'use strict';

export default class Team {
    constructor(array) {
        this.array = array;
        this.iterator = this.array[Symbol.iterator]();
    }

    *getPerson() {
        while (true) {
            let result = this.iterator.next();
            if (result.done) break;
            yield result.value;
        }
    }
}
