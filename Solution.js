
/**
 * @param {string} word
 * @return {number}
 */
var removeAlmostEqualCharacters = function (word) {
    let minNumberOfOperations = 0;
    let previousCharacterChanged = false;

    for (let i = 1; i < word.length; ++i) {
        if (charactersAreAlmostEqual(word.codePointAt(i - 1), word.codePointAt(i)) && !previousCharacterChanged) {
            ++minNumberOfOperations;
            previousCharacterChanged = true;
            continue;
        }
        previousCharacterChanged = false;
    }
    return minNumberOfOperations;
};

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function charactersAreAlmostEqual(first, second) {
    return Math.abs(first - second) < 2;
}
