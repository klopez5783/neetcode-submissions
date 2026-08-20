class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
         let output = "";

        strs.map((x) => {
        let length = x.length;
        output += x !== null ? length + "!" + x : x;
    });

    return output.trim(); // to remove the trailing space
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        
        
       let arr = []
       
       let strLen = str.length;
       let word = ""
       let i = 0
       while ( i < str.length ){
           
       
        //   if ( str[i] == "!" ){
        //       let length = parseInt(str[i-1])
        //       console.log(`Length ${length} `)
        //       word += str.substring( i + 1 , i + 1 + length )
        //       arr.push(word)
        //       console.log(`Word : ${word}`);
        //       word = ""
        //   }
        let j = i;
        while ( str[j] != "!") j++
        let length = parseInt(str.substring(i,j))
        i = j + 1;
        j = i + length;
        arr.push(str.substring(i, j));
        i = j;
       
       }
       return arr;
    }
}
