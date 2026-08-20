class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for (const char of tokens){
            if(char == "+"){
                stack.push(stack.pop() + stack.pop() )
            }else if(char == "-"){
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b - a)
            }else if (char == "*"){
                stack.push(stack.pop() * stack.pop() )
            }else if( char == "/"){
                const a = stack.pop()
                const b = stack.pop()
                stack.push(Math.trunc(b / a));
            }else{
                stack.push(parseInt(char));
            }
        }

        return stack[0]
    }
}
