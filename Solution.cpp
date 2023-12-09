
#include <cmath>
#include <vector>
using namespace std;

class Solution {
    
public:
    int removeAlmostEqualCharacters(const string& word) const {
        int minNumberOfOperations = 0;
        bool previousCharacterChanged = false;

        for (size_t i = 1; i < word.length(); ++i) {
            if (charactersAreAlmostEqual(word[i - 1], word[i]) && !previousCharacterChanged) {
                ++minNumberOfOperations;
                previousCharacterChanged = true;
                continue;
            }
            previousCharacterChanged = false;
        }
        return minNumberOfOperations;
    }

private:
    bool charactersAreAlmostEqual(char first, char second) const {
        return abs(first - second) < 2;
    }
};
