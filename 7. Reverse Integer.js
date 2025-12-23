var reverse = function (x) {
  // Line 1: Check if the input number is negative
  const isNegative = x < 0;

  // Line 2: Get the absolute value of the number (make it positive)
  let num = Math.abs(x);

  // Line 3: Initialize variable to store the reversed number
  let reversed = 0;

  // Line 4: Start the while loop - will run as long as num is greater than 0
  while (num > 0) {
    // Line 5: Get the last digit of num using modulo operator
    const digit = num % 10; // Example: 123 % 10 = 3

    // Line 6: Build the reversed number
    reversed = reversed * 10 + digit;
    // First iteration: 0 * 10 + 3 = 3
    // Second iteration: 3 * 10 + 2 = 32
    // Third iteration: 32 * 10 + 1 = 321

    // Line 7: Remove the last digit from num using division and floor
    num = Math.floor(num / 10); // Example: Math.floor(123 / 10) = 12
  }

  // Line 8: If the original number was negative, make reversed negative
  if (isNegative) {
    reversed = -reversed;
  }

  // Line 9: Define 32-bit integer limits
  const INT_MAX = Math.pow(2, 31) - 1; // 2,147,483,647
  const INT_MIN = -Math.pow(2, 31); // -2,147,483,648

  // Line 10: Check if reversed number is within 32-bit integer range
  if (reversed > INT_MAX || reversed < INT_MIN) {
    return 0; // Return 0 if it overflows
  }

  // Line 11: Return the valid reversed number
  return reversed;
};
