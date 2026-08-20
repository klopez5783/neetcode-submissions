class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(arr) {
        let left = 1;
    let right = arr.length - 2;

    // lMax : Maximum in subarray arr[0..left-1]
    // rMax : Maximum in subarray arr[right+1..n-1]
    let lMax = arr[left - 1];
    let rMax = arr[right + 1];

    let res = 0;
    while (left <= right) {
      
        // If rMax is smaller, then we can decide the 
        // amount of water for arr[right]
        if (rMax <= lMax) {
          
            // Add the water for arr[right]
            res += Math.max(0, rMax - arr[right]);

            // Update right max
            rMax = Math.max(rMax, arr[right]);

            // Update right pointer as we have decided 
            // the amount of water for this
            right -= 1;
        } else { 
            // Add the water for arr[left]
            res += Math.max(0, lMax - arr[left]);

            // Update left max
            lMax = Math.max(lMax, arr[left]);

            // Update left pointer as we have decided water for this
            left += 1;
        }
    }
    return res;
}
    }
