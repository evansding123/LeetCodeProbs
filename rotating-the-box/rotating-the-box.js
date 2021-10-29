/**
 * @param {character[][]} box
 * @return {character[][]}
 */
let rotateTheBox = (A, B = []) => {
    let M = A.length,
        N = A[0].length;
    for (let row of A) {
        let shifted = [];
        let line = row.join('');
        for (let word of line.split('*')) { // \U0001f4a5 split the line on obstacles
            let n = word.length,
                k = word.split('').filter(c => c == '#').length;
            let t = `${'.'.repeat(n - k)}${'#'.repeat(k)}`; // transformed word (ie. right-shifted)
            shifted.push(t); // right-shifted word
        }
        B.push([...shifted.join('*').split('')]); // join shifted words into a single line which is split into individual characters
    }
    // just go through each column and push onto current row
    let C = [];
    for (let j = 0; j < N; ++j) {
        let row = [];
        for (let i = M - 1; 0 <= i; --i) {
            row.push(B[i][j]);
        }
        C.push([...row]);
    }
    return C; // C is B rotated
};