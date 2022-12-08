let str = '';
let n = 26;
for (let i = 0; i < n * n + n - 1; i++) {
    if (i === 1 || i % 2 === 0) {
        str += '#';
    } else {
        str += ' ';
    }
    if ((str.length + 2) % (n + 11) === 0) {
        str += '\n';
        i += 1;
    }
}
console.log(str);
console.log(str.length);