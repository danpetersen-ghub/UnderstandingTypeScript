# TypeScript Core Types

TypeScript comes with a set of core types that are used to define variable types in TypeScript.

Here are some of the most commonly used core types:

## Boolean

The Boolean type represents a boolean value (`true` or `false`).

```typescript
let isDone: boolean = false;
```

## Number

The Number type represents a numeric value, either integer or floating-point.

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## String

The String type represents a sequence of characters.

```typescript
let color: string = "blue";
let fullName: string = `John Smith`;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ 10 + 5 } years old next month.`;
```

## Array

The Array type represents an array of values of a specified type.

```typescript
let list: number[] = [1, 2, 3];
let anotherList: Array<number> = [1, 2, 3];
```

## Tuple

The Tuple type represents an array of values where each element has a specific type.

```typescript
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
```
