const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    other_symbols = '1234567890!@#$(),./|*-&^%: ';
    isDirect = true;

    constructor(isDirect) {
        if (typeof isDirect == 'boolean')
            this.isDirect = isDirect;
    }

    encrypt(string, key) {
        if (string && key) {
            let encode_string = this.comparator_letter(string.toUpperCase());
            let encode_key = this.comparator_letter(key.toUpperCase());
            let key_length = encode_key.length;
            let result = [];
            for (let i = 0, j = 0; i < encode_string.length; i++, j++) {
                if (j > key_length - 1) {
                    j = 0;
                }
                if (encode_string[i] >= 100) {
                    result.push(this.other_symbols[encode_string[i] - 100]);
                    j--;
                } else
                    result.push(this.alphabet[(encode_string[i] + encode_key[j]) % 26]);
            }
            return this.isDirect ? result.join('') : result.reverse().join('');
        }
        throw new Error();
    }
    decrypt(string, key) {
        if (string && key) {
            let string_numbers = this.comparator_letter(string.toUpperCase());
            let key_numbers = this.comparator_letter(key.toUpperCase());
            let key_length = key_numbers.length;
            let result = [];
            for (let i = 0, j = 0; i < string_numbers.length; i++, j++) {
                if (j > key_length - 1) {
                    j = 0;
                }
                if (string_numbers[i] >= 100) {
                    result.push(this.other_symbols[string_numbers[i] - 100]);
                    j--;
                } else
                    result.push(this.alphabet[(26 + string_numbers[i] - key_numbers[j]) % 26]);
            }
            return this.isDirect ? result.join('') : result.reverse().join('');
        }
        throw new Error();
    }

    comparator_letter(string) {
        let result = [];
        for (let i = 0; i < string.length; i++) {
            let symbol_position = this.alphabet.indexOf(string[i]);
            if (symbol_position < 0) {
                result.push(this.other_symbols.indexOf(string[i]) + 100);
            } else
                result.push(symbol_position);
        }
        return result;
    }
}

module.exports = VigenereCipheringMachine;