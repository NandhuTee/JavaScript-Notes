# Hoisting
 It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

# Variable Hoisting in JavaScript
- Definition: Variable hoisting in JavaScript refers to the behavior where variable declarations are moved (or "hoisted") to the top of their containing scope during the compilation phase. This means that a variable can be used before it is declared in the code.

- Key Points:
        -Declarations are Hoisted, Not Initializations:

        -Only the declaration of the variable is hoisted to the top, not the assignment or initialization.

        -If a variable is used before it is assigned a value, it will return undefined.
# Behavior with var, let, and const:

- var: Variables declared with var are hoisted to the top of their function or global scope. They are initialized with undefined.
- let and const: Variables declared with let and const are hoisted but are not initialized. Accessing them before their declaration results in a ReferenceError. This behavior is known as the "Temporal Dead Zone (TDZ)".

# Hoisting in Functions:
- Function declarations are fully hoisted, allowing them to be called before their declaration in the code.

# Summary:
- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
- var declarations are hoisted and initialized with undefined.
- let and const declarations are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.
- Function declarations are fully hoisted, allowing them to be called before their declaration in the code.