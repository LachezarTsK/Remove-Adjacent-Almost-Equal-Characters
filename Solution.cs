
using System;

public class Solution
{
    public int RemoveAlmostEqualCharacters(string word)
    {
        int minNumberOfOperations = 0;
        bool previousCharacterChanged = false;

        for (int i = 1; i < word.Length; ++i)
        {
            if (CharactersAreAlmostEqual(word[i - 1], word[i]) && !previousCharacterChanged)
            {
                ++minNumberOfOperations;
                previousCharacterChanged = true;
                continue;
            }
            previousCharacterChanged = false;
        }
        return minNumberOfOperations;
    }

    private bool CharactersAreAlmostEqual(char first, char second)
    {
        return Math.Abs(first - second) < 2;
    }
}
