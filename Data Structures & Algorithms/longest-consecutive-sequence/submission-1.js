class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
    nums.sort((a, b) => a - b)

    let count = 0;
    let longest = 0;
    let curr = nums[0]

    for (let i = 0; i <= nums.length; i++) {

        if (nums[i] === nums[i - 1]) continue;

        if (nums[i] == curr) {
            console.log(`curr: ${curr} == element: ${nums[i]}`)
            count++
            curr++
        } else {
            console.log(`curr: ${curr} != element: ${nums[i]}`)
            longest = count >= longest ? count : longest;
            console.log(`longest set to : ${longest}`)
            count = 0
            curr = nums[i]
            console.log(`counter reset, curr is now ${curr}`)
            i--
        }

    }

    return longest
    }
}
