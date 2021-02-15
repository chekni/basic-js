const CustomError = require("../extensions/custom-error");

const separator = '~~';

let chainMaker = {
    chain: new Array(),

    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        value = String(value) || ' ';
        this.chain.push(value);
        return this;
    },
    removeLink(position) {
        if (typeof position == 'number' && position > 0 && position < this.chain.length) {
            this.chain = this.chain.slice(0, position - 1).concat(this.chain.slice(position));
            return this;
        }

        this.chain = [];
        throw new Error();
    },
    reverseChain() {
        this.chain = this.chain.reverse();
        return this;
    },
    finishChain() {
        let result = '';
        this.chain.map(elem => {
            result = result.length ? result + separator + `( ${elem} )` : `( ${elem} )`;
        });
        this.chain = [];
        return result;
    }
};

module.exports = chainMaker;