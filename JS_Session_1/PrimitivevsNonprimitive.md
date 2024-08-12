# Key Differences Between Primitive and Non-Primitive Data Types

| **Feature**              | **Primitive Data Types**                        | **Non-Primitive Data Types**                      |
|--------------------------|--------------------------------------------------|---------------------------------------------------|
| **Storage**              | Stored by value (directly in the variable)      | Stored by reference (reference to memory location) |
| **Mutability**           | Immutable (cannot be changed)                   | Mutable (can be changed)                          |
| **Examples**             | `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `BigInt` | `object`, `array`, `function`                    |
| **Memory Usage**         | Requires less memory as values are stored directly | Requires more memory as references are stored   |
| **Copying Behavior**     | Copies the actual value                         | Copies the reference, not the actual object      |

### **Explanation**

- **Storage**: Primitive types store the actual value directly, while non-primitive types store a reference to the value's location in memory.

- **Mutability**: Primitive values are immutable, meaning their state cannot be altered once created. Non-primitive values are mutable and can be modified.

- **Examples**: Primitive types include simple data types like numbers and strings. Non-primitive types include complex data structures such as objects and arrays.

- **Memory Usage**: Primitive types are typically more memory-efficient because they are directly stored. Non-primitive types use additional memory to store references and the objects they point to.

- **Copying Behavior**: When copying primitive values, the actual value is duplicated. For non-primitive types, copying only duplicates the reference, so both variables point to the same object.

