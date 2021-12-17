/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits || digits.length <= 0) return []
    
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    
    const res = []
    
    const dfs = (level, s) => {
        if (level === digits.length) {
            res.push(s)
            return
        }
        const digMap = [...map[digits[level]]]
        digMap.map(v => dfs(level+1, s+v))
    }
    
    dfs(0, '')
    return res
};