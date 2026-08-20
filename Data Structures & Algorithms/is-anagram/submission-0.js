class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let sMap = new Map();
        let tMap = new Map();
        for (let i = 0; i < s.length; i++) {
            sMap.set(s[i], sMap.get(s[i]) + 1 || 1);
            tMap.set(t[i], tMap.get(t[i]) + 1 || 1);
        }

        console.log("Map s: " , sMap)
        console.log("Map t: " , tMap)

        for (let key of sMap.keys()) {
            if (sMap.get(key) !== tMap.get(key)) {
                return false;
            }
        }
        return true;
    }
}
