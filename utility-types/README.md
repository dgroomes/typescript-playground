# utility-types

Exploring TypeScript's *utility types* which enable powerful type designs using *type transformations*.


## Overview

TypeScript's type system is one of the most feature-rich among programming languages. One facet of this is in the [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
like `Partial`, `Omit`, `Exclude`, `Extract`, `Parameters`, etc. The core idea with these is to reference some type and
transform it into a new type. For me, this is hard to grasp. I'd like to learn and explore these utility types by way
of runnable example programs.


## Instructions

Follow these instructions to build and run the program.

1. Pre-requisite: Node.js
    * I used version 20.11.0
2. Install dependencies
    * ```shell
      npm install
      ```
3. Compile the TypeScript source code into JavaScript
    * ```shell
      npm run build
      ```
    * Notice the `dist/utility-types.js` file. 
4. Run the program
    * ```shell
      node dist/utility-types.js
      ```
    * The output will look like this:
      ```text
      Style #1: Invoke the function and inline the argument.
      The function was called with the 'foo' form. foo=Hello
      The function was called with the 'bar/baz' form. bar=hi, baz=1
      Style #2: Declare a variable for the argument ahead of time.
      The function was called with the 'foo' form. foo=Hello
      Style #3: Declare a variable for the argument ahead of time and specify the type explicitly.
      The function was called with the 'bar/baz' form. bar=hi, baz=1
      Style #4: Use the 'Parameters' utility type to reference the function signature.
      The function was called with the 'foo' form. foo=Hello
      The function was called with the 'bar/baz' form. bar=hi, baz=1
      ```


## Reference

* [TypeScript handbook: *Parameters<Type>*](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)
  * > Constructs a tuple type from the types used in the parameters of a function type `Type`.
