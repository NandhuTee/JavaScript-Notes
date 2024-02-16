// Pure function (calculates area without modifying input)
// Calculate area without modifying global variables
function calculateArea(width, height) {
    return width * height;
  }
  
  // Create a counter without using global variables
  const createCounter = () => {
    let count = 0; // Use `const` for immutability
    return () => {
      count++; // Increment count
      return count; // Return the current count
    };
  };
  
  // Print area:
  const area = calculateArea(5, 3);
  console.log("Area:", area); // Output: Area: 15
  
  // Create and increment counter:
  const counter = createCounter();
  console.log("Initial count:", counter()); // Output: Initial count: 1
  console.log("Incremented count:", counter()); // Output: Incremented count: 2
  
/*Deterministic: They always return the same output for the same input, regardless of external factors.
No Side Effects: They don't directly mutate data outside their scope (e.g., global variables, DOM elements).*/