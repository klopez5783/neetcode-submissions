class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = []

        nums.sort((a,b) => a - b)

        for(let i = 0 ; i < nums.length ; i++){
            if(nums[i] > 0) break;
            if(nums[i] == nums[i - 1] && i > 0) continue;
            
            let left = i + 1,right = nums.length - 1
            while(left < right){
                let sum = nums[i] + nums[left] + nums[right]

                if(sum > 0){
                    right--
                }else if( sum < 0 ){
                    left++
                }else{
                output.push([nums[i], nums[left], nums[right]]);// ✅ use sorted numsay
                left++
                right--
                while( left < right && nums[left] == nums[left - 1]){
                    left++
                }
            }
        }
    }
    return output
    }
}
