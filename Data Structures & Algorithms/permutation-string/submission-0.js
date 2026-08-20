class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const need = {};
    const window = {};

    // Step 1: Build frequency map for s1
    for (let char of s1) {
        need[char] = (need[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    let matches = 0;

    // Step 2: Start sliding window
    while (right < s2.length) {
        const char = s2[right];
        window[char] = (window[char] || 0) + 1;

        // If the char count matches what we need, count as a match
        if (need[char] && window[char] === need[char]) {
            matches++;
        }

        // Step 3: Once window is the size of s1, check and slide
        if (right - left + 1 > s1.length) {
            const leftChar = s2[left];
            if (need[leftChar] && window[leftChar] === need[leftChar]) {
                matches--;
            }
            window[leftChar]--;
            if (window[leftChar] === 0) delete window[leftChar];
            left++;
        }

        // Step 4: If all needed chars match in count, return true
        if (matches === Object.keys(need).length) return true;

        right++;
    }

    return false;
}

}
