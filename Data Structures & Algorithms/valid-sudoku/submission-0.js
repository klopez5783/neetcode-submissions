class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const number = board[i][j];
      if (number === ".") continue;

      const keyRow = `${number} in row ${i}`;
      const keyCol = `${number} in column ${j}`;
      const keyBox = `${number} in submatrix ${Math.floor(i / 3)}-${Math.floor(j / 3)}`;

      if (seen.has(keyRow) || seen.has(keyCol) || seen.has(keyBox)) {
        return false;                // duplicate detected
      }

      seen.add(keyRow);
      seen.add(keyCol);
      seen.add(keyBox);
    }
  }

  return true;                       // no duplicates → valid board
    }
}
