class StringBuilder {
    constructor(str) {
        this._value = str;
    }
    getValue() {
        return this._value;
    }
    append(str) {
        return this._value += str;
    }
    prepend(str) {
        return this._value = str + this._value;
    }
    pad(str) {
        return this._value = str + this._value + str;
    }
}

const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.getValue()); // '.^'
builder.prepend('^');
console.log(builder.getValue()); // '^.^'
builder.pad('=');
console.log(builder.getValue()); // '=^.^='