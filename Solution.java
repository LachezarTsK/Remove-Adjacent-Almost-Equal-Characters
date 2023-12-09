
public class Solution {

    public int removeAlmostEqualCharacters(String word) {
        int minNumberOfOperations = 0;
        boolean previousCharacterChanged = false;

        for (int i = 1; i < word.length(); ++i) {
            if (charactersAreAlmostEqual(word.charAt(i - 1), word.charAt(i)) && !previousCharacterChanged) {
                ++minNumberOfOperations;
                previousCharacterChanged = true;
                continue;
            }
            previousCharacterChanged = false;
        }
        return minNumberOfOperations;
    }

    private boolean charactersAreAlmostEqual(char first, char second) {
        return Math.abs(first - second) < 2;
    }
}
