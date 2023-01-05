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
      Let's learn about enums in TypeScript by simulating a text-based adventure game.
      
      You are facing forward.
      You moved forward.
      You are facing right.
      You did a 180! You are facing left now.
      'Diagonally is not a legal command.
      ```
    * Read the source code and make some changes to "learn by doing".


## Notes

The items defined in a TypeScript enum are called *members*. This is important for me to remember because I'm tempted to
call them fields or entries.

TypeScript enums are a bit unusual. They are significantly different than enums in other languages and [in many cases
you can still get the effect of enums by using object types](https://www.typescriptlang.org/docs/handbook/enums.html?azure-portal=true#objects-vs-enums).
I'm probably going to stay away from enums until I grok TypeScript better.


## Reference

* [TypeScript Reference: *Enums*](https://www.typescriptlang.org/docs/handbook/enums.html?azure-portal=true)
