class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0 , right = 0;
        let seen = {}
        let size = 0

        while(right < s.length){
            let char = s[right]
            if (seen[char] !== undefined && seen[char] >= left) {
                left = seen[char] + 1;
            }
            seen[char] = right
            size = Math.max(size , right - left + 1)
            right++
        }

        return size;
    }
}
