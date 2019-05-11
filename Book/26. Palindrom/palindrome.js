String.prototype.palindrome = function() {
    if (this.valueOf() === this.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
};



let str = ['coma', 'please', 'porop', 'stand', 'pilip', 'constrtsnoc'];

for (let i = 0; i < str.length; i++) {
    let word = str[i];

    if (word.palindrome()) {
        console.log(`PALINDROME: ${word}`);
    }
}