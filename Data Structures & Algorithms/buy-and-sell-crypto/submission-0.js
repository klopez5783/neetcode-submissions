class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let roi = 0;

        let left = 0 , right = 1;

        while(left < prices.length){
            if(prices[left] < prices[right]){
                let profit = prices[right] - prices[left];
                roi = Math.max(roi, profit)
            }else{
                left = right;
            }
            right++
        }
        return roi;
    }
}

