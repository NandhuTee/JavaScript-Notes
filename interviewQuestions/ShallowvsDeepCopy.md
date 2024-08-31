# Shallow Copy vs Deep Copy Diagram

```mermaid
graph LR
    subgraph Shallow Copy
        A1[Original Object] --> B1[Nested Object 1]
        A1 --> C1[Nested Object 2]
        A2[Shallow Copy] --> B1
        A2 --> C1
    end

    subgraph Deep Copy
        D1[Original Object] --> E1[Nested Object 1]
        D1 --> F1[Nested Object 2]
        D2[Deep Copy] --> G1[Copied Nested Object 1]
        D2 --> H1[Copied Nested Object 2]
    end

    classDef original fill:#f9f,stroke:#333,stroke-width:2px;
    classDef copy fill:#bbf,stroke:#333,stroke-width:2px;

    class A1,D1 original;
    class A2,D2 copy;
