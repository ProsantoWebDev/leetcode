var myAtoi = function (s) {
  // STEP 1: Remove leading whitespace
  s = s.trim();
  // If string is empty after trimming, return 0
  if (s.length === 0) return 0;
  // STEP 2: Determine sign
  let sign = 1; // Default to positive
  let i = 0; // Index pointer

  if (s[0] === "-") {
    sign = -1; // Negative number
    i++; // Move past the sign character
  } else if (s[0] === "+") {
    i++; // Move past the sign character
  }

  // STEP 3: Convert characters to number
  let result = 0; // We'll build our number here

  // Define 32-bit signed integer limits
  const INT_MAX = 2 ** 31 - 1; // 2147483647
  const INT_MIN = -(2 ** 31); // -2147483648

  // STEP 4: Process digit characters
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    // Convert character to numeric digit
    // '0'.charCodeAt(0) = 48, '1' = 49, etc.
    const digit = s.charCodeAt(i) - "0".charCodeAt(0);

    // STEP 5: Check for overflow BEFORE we multiply
    // This is the critical overflow check
    // We check: result * 10 + digit > INT_MAX
    // Rearranged: result > (INT_MAX - digit) / 10
    if (result > Math.floor((INT_MAX - digit) / 10)) {
      // If overflow would occur, return clamped value
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    // Safe to add the digit
    result = result * 10 + digit;
    i++; // Move to next character
  }

  // Apply the sign
  result *= sign;

  // Final range check (belt and suspenders approach)
  if (result > INT_MAX) return INT_MAX;
  if (result < INT_MIN) return INT_MIN;

  return result;
};

console.log(myAtoi("-042"));
