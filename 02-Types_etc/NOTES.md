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

## Types

    number - numerical data type
    string - string data type
    boolean - boolean data type
    any - any data type
    void - absence of any type (often used with functions that don't return anything)

## Variables

    let - used to declare a variable that can be reassigned
    const - used to declare a constant variable that cannot be reassigned
    var - similar to let, but has a function scope instead of a block scope

## Functions

    function functionName(parameters): returnType { ... } - defines a function with the specified name, parameters, and return type
    Optional parameters: function functionName(parameter1, parameter2?)
    Default parameter values: function functionName(parameter1 = defaultValue)
    Rest parameters: function functionName(...rest: type[])

## Interfaces

    interface InterfaceName { ... } - defines an interface with the specified properties
    Optional properties: propertyName?: type
    Readonly properties: readonly propertyName: type
    Index signatures: { [index: string]: type }

## Classes

    class ClassName { ... } - defines a class with the specified properties and methods
    constructor(parameters) { ... } - defines a constructor for the class
    public, private, and protected access modifiers
    Inheritance: class ChildClass extends ParentClass { ... }

## Generics

    function functionName<T>(parameter: T): T - defines a function with a generic type parameter
    interface InterfaceName<T> { ... } - defines an interface with a generic type parameter
    class ClassName<T> { ... } - defines a class with a generic type parameter

This is just a brief overview of some of the basic syntax and features of TypeScript. For more information, you can check out the official TypeScript documentation.
