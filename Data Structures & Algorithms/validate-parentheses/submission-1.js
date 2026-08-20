class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for (let bracket of s){
            console.log(`Bracket : ${bracket}`)
            if(closeToOpen[bracket]){
                console.log(`Bracket is in closeToOpen\ncloseToOpen[bracket] returns : ${closeToOpen[bracket]}`)
                if(stack.length > 0 && stack[stack.length - 1] == closeToOpen[bracket]){
                    console.log("Stack popped")
                    stack.pop();
                }else{
                    return false
                }
            }else{
                console.log(`adding ${bracket} to stack `)
                stack.push(bracket)
            }
            console.log("*".repeat(50))
        }
        return stack.length === 0;
    }
}
