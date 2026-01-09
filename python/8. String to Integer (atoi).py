def myAtoi(s: str) -> int:
        # Constants for 32-bit integer limits
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31

        # Step 1: Skip leading whitespace
        i = 0   
        n = len(s)
        while i < n and s[i] == ' ':
            i += 1

        # Step 2: Check if string is empty after whitespace
        if i == n:
            return 0

        # Step 3: Check sign
        sign = 1
        if s[i] == '-':
            sign = -1
            i += 1
        elif s[i] == '+':
            i += 1

        # Step 4: Convert digits
        result = 0
        while i < n and s[i].isdigit():
            digit = int(s[i])

            # Check for overflow before multiplying
            if result > (INT_MAX - digit) // 10:
                return INT_MAX if sign == 1 else INT_MIN

            result = result * 10 + digit
            i += 1

        # Step 5: Apply sign and return
        return sign * result
p= "-91283472332"
print(myAtoi(p))