class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0 , right = s.length - 1;
        
        while(left < right){
            while(left < right && !this.alphaNum( s[left]) ) {
                left++;
            }
            while(left < right && !this.alphaNum( s[right]) ) {
                right--;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase() ){
                return false
            }

            left++
            right--

        }

        return true;

    }

    alphaNum(char) {
        return /[a-zA-Z0-9]/.test(char);
    }
}
