'use strict';

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(...characters) {
        this.members = new Set([...this.members, ...characters]);
    }

    get() {
        return Array.from(this.members);
    }

    * [Symbol.iterator]() {
        yield* this.get();
    }

}
