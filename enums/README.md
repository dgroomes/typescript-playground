# enums

A TypeScript program that showcases enums.


## Overview

How do enums work in TypeScript? How do they differ from enums in other programming languages? This codebase explores
TypeScript enums in a runnable program.

Enums are a feature of many programming languages and the word is an abbreviation of ["enumerated type"](https://en.wikipedia.org/wiki/Enumerated_type).


## Instructions

Follow these instructions to build and run the program.

1. Pre-requisite: npm
    * I used npm version 8.19.2
2. Pre-requisite: Node.js
    * I used version 18.12.1
3. Install dependencies
    * ```shell
      npm install
      ```
4. Compile the TypeScript source code into JavaScript
    * ```shell
      npm run build
      ```
    * Notice the `dist/enums.js` file. 
5. Run the program
    * ```shell
      node dist/enums.js
      ```
    * The output will look like this:
      ```text
      Let's learn about enums in TypeScript.
      Let's iterate over the `Direction` enum using the `for in` syntax...
      Found value '0'. The type of this value is 'string'.
      Found value '1'. The type of this value is 'string'.
      Found value '2'. The type of this value is 'string'.
      Found value '3'. The type of this value is 'string'.
      Found value 'Up'. The type of this value is 'string'.
      Found value 'Down'. The type of this value is 'string'.
      Found value 'Left'. The type of this value is 'string'.
      Found value 'Right'. The type of this value is 'string'.
      ```
    * That was interesting. We got the enum member names like 'Up' and 'Down' but we also got the enum member values
      like '1' and '2'. Even stranger is that the enum member values (I think I'm using the right terminology but not
      100%) for 1 and 2 are of type string and not number. I think I need to inspect the compiled JavaScript to better
      understand why it works this way.


## Notes

The items defined in a TypeScript enum are called *members*. This is important for me to remember because I'm tempted to
call them fields or entries.

TypeScript enums are a bit unusual. They are significantly different than enums in other languages and [in many cases
you can still get the effect of enums by using object types](https://www.typescriptlang.org/docs/handbook/enums.html?azure-portal=true#objects-vs-enums).
I'm probably going to stay away from enums until I grok TypeScript better.


## Reference

* [TypeScript Reference: *Enums*](https://www.typescriptlang.org/docs/handbook/enums.html?azure-portal=true)
