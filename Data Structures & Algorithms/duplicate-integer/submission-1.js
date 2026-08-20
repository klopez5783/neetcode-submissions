class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = new Map();
        for (let key of nums) {
            if (hash.get(key)) {
                return true;
            } else {
                hash.set(key, 1);
            }
        }
        return false;
    }
}
