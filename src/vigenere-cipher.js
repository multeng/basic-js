class VigenereCipheringMachine {
    constructor(reverse) {
        this.reverse = reverse;
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error();
        }
        let k = key.toUpperCase().split('');
        let m = message.toUpperCase().split('');
        let answer = [];
        let l = 0;

        for (let i = 0; i < m.length; i++) {
            if (m[i].charCodeAt() >= 65 && m[i].charCodeAt() <= 90) {
                let letter = (m[i].charCodeAt() + k[l % key.length].charCodeAt()) % 26;
                answer.push(String.fromCharCode(letter + 65));
                l++;
            } else {
                answer.push(m[i]);
            }
        }

        if (this.reverse === false) {
            return answer.reverse().join('');
        } else {
            return answer.join('');
        }

    }

    decrypt(message, key) {
        if (!message || !key) {
            throw new Error();
        }
        if (!message || !key) {
            throw new Error();
        }
        let k = key.toUpperCase().split('');
        let m = message.toUpperCase().split('');
        let answer = [];
        let l = 0;
        for (let i = 0; i < m.length; i++) {
            if (m[i].charCodeAt() >= 65 && m[i].charCodeAt() <= 90) {
                let letter = (m[i].charCodeAt() + 26 - k[l % key.length].charCodeAt()) % 26;
                answer.push(String.fromCharCode(letter + 65));
                l++;
            } else {
                answer.push(m[i]);
            }
        }
        if (this.reverse === false) {
            return answer.reverse().join('');
        } else {
            return answer.join('');
        }
    }
}

module.exports = VigenereCipheringMachine;
