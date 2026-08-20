class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let left = 0 , right = heights.length - 1
        while(left < right){
            let height = Math.min(heights[left],heights[right])
            let area = height * (right - left)
            console.log(`height : ${height}\n
            length: ${right - left}\n
            area: ${area}`)
            max = area > max ? area : max;
            console.log("max set to : " + max)
            console.log("*".repeat(40))
            if(heights[left] < heights[right]){
                left++
            }else{
                right--
            }
        }

        return max;
    }
}
