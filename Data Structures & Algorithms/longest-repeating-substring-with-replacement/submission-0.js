class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freq = {}
        let maxLength = 0
        let maxFreq = 0
        let l = 0

        for(let r = 0 ; r < s.length ; r++){
            const char = s[r]

            freq[char] = (freq[char] || 0) + 1;

            maxFreq = Math.max(maxFreq, freq[char]);

            while((r - l + 1) - maxFreq > k ){
                freq[s[l]]--;
                l++
            }

            maxLength = Math.max(maxLength, r - l + 1);


        }

        return maxLength;
    }
}
