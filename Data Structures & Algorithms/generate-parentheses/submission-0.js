class Solution {

    backTrack(openN, closedN, n, res, stack){
        if(openN === closedN && openN === n){
            res.push(stack)
            return
        }

        if(openN < n){
            this.backTrack(openN + 1, closedN , n, res, stack + "(")
        }
        if (closedN < openN) {
            this.backTrack(openN, closedN + 1, n, res, stack + ')');
        }
    }

    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res= []
        this.backTrack(0,0,n,res,"")
        return res
       
    }
}
