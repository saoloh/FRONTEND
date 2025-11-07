let nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;

// Use 'reduce' to find the closest number
const closestNum = nums.reduce((closest, current) => {
  // Check which number is closer to the goal:
  // The 'closest' one we've found so far, or the 'current' one?
  
  const currentDiff = Math.abs(current - goal); // e.g., |80 - 100| = 20
  const closestDiff = Math.abs(closest - goal); // e.g., |10 - 100| = 90

  // If the current number's difference is smaller,
  // it becomes the new 'closest' value for the next iteration.
  return currentDiff < closestDiff ? current : closest;
});

console.log(closestNum); // Output: 88