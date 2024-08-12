# Explain the difference between == and === in JavaScript.

**== (Abstract Equality):** Compares two values after performing type coercion, if necessary. For example, 5 == "5" returns true because the string "5" is coerced into the number 5.
**=== (Strict Equality):**
 Compares two values without type coercion, meaning the types and values must be the same. For example, 5 === "5" returns false because the types are different (number vs. string).