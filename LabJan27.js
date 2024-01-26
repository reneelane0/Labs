function unveilMagic(sequence) {
  let currentStreakStart = 0;
  let longestStreakStart = 0;
  let longestStreakLength = 0;
  let currentStreakLength = 1;
  let currentSum = sequence[0];
  let highestSum = sequence[0];

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] === sequence[i - 1] + 1) {
      // Current number is part of the streak
      currentStreakLength++;
      currentSum += sequence[i];
    } else {
      // Current streak is broken
      if (currentStreakLength > longestStreakLength || (currentStreakLength === longestStreakLength && currentSum > highestSum)) {
        longestStreakLength = currentStreakLength;
        longestStreakStart = currentStreakStart;
        highestSum = currentSum;
      }

      currentStreakStart = i;
      currentStreakLength = 1;
      currentSum = sequence[i];
    }
  }

  // Check if the last streak is the longest
  if (currentStreakLength > longestStreakLength || (currentStreakLength === longestStreakLength && currentSum > highestSum)) {
    longestStreakStart = currentStreakStart;
    longestStreakLength = currentStreakLength;
  }

  const longestStreak = sequence.slice(longestStreakStart, longestStreakStart + longestStreakLength);
  const sumOfLongestStreak = longestStreak.reduce((sum, num) => sum + num, 0);

  return {
    longestStreak,
    sumOfLongestStreak,
    longestStreakStart,
    longestStreakLength,
  };
}

// Example usage with the provided sequences
const sequence1 = [1, 2, 3, 6, 9, 34, 2, 6];
const sequence2 = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
const sequence3 = [100, 101, 102, 3, 4, 5, 6, 9];

const result1 = unveilMagic(sequence1);
const result2 = unveilMagic(sequence2);
const result3 = unveilMagic(sequence3);

// Displaying the results
console.log("Result Set 1:");
console.log("Longest Streak:", result1.longestStreak);
console.log("Sum of Longest Streak:", result1.sumOfLongestStreak);
console.log();

console.log("Result Set 2:");
console.log("Longest Streak:", result2.longestStreak);
console.log("Sum of Longest Streak:", result2.sumOfLongestStreak);
console.log();

console.log("Result Set 3:");
console.log("Longest Streak:", result3.longestStreak);
console.log("Sum of Longest Streak:", result3.sumOfLongestStreak);

