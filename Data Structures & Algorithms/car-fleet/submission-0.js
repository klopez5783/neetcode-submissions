class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet = function(target, position, speed) {

const idx = position
  .map((value, index) => ({ value, index })) // pair each value with its original index
  .sort((a, b) => a.value - b.value)         // sort by the values
  .map(item => item.index);                  // extract the sorted indices
  console.log(`array sorted by position : ${idx}\n\n`)
  
  let prev = 0;
  let fleet = 0;
  
  for(let i = idx.length - 1 ; i >= 0 ; i--){
    const pos = position[idx[i]];
    const spd = speed[idx[i]];
    const arrival_Time = (target - pos) / spd;      
      console.log(`Current car ${position[i]}\nArrival Time : ${arrival_Time}\nPrevious Car arrival itme : ${prev}`)
      
      if(arrival_Time > prev){
          console.log(`car ${position[i]} doesn't catch up to previous car -> New Car Fleet`)
          fleet++      
          prev = arrival_Time

      }
      console.log("-".repeat(45))
  }
  
  return fleet
    
};
}
