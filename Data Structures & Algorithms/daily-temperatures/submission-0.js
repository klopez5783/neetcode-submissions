class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let stack = [];


        for(let i = 0 ; i < temperatures.length ; i++){
            const temp = temperatures[i]
            while(stack.length > 0 && temp > stack[stack.length - 1][0]){
                const [stackT, stackInd] = stack.pop();
                res[stackInd] = i - stackInd;
            }
            stack.push([temp,i]);
        }

        return res;

       
    }
}
