function unveilMagic(sequence) {
  let currentSum = 0;
  let highestSum = 0;
  let currentStreak = [];
  let bestStreak = [];

  for (let i = 0; i < sequence.length; i++) {
    if (i === 0 || sequence[i] === sequence[i - 1] + 1) {
      // Current number is part of the streak
      currentSum += sequence[i];
      currentStreak.push(sequence[i]);
    } else {
      // Current streak is broken
      if (currentStreak.length > 1 && currentSum > highestSum) {
        highestSum = currentSum;
        bestStreak = currentStreak.slice();
      }

      currentSum = sequence[i];
      currentStreak = [sequence[i]];
    }
  }

  // Check if the last streak has the highest sum
  if (currentStreak.length > 1 && currentSum > highestSum) {
    bestStreak = currentStreak.slice();
  }

  return {
    bestStreak,
    highestSum,
  };
}

// Example usage with the provided sequences
const sequence1 = [1, 2, 3, 6, 9, 34, 2, 6];
const sequence2 = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];

const result1 = unveilMagic(sequence1);
const result2 = unveilMagic(sequence2);

// Displaying the results
console.log("Result Set 1:");
console.log("Longest Streak:", result1.bestStreak);
console.log("Sum of Longest Streak:", result1.highestSum);
console.log();

console.log("Result Set 2:");
console.log("Longest Streak:", result2.bestStreak);
console.log("Sum of Longest Streak:", result2.highestSum);
