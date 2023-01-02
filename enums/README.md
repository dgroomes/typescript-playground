# enums

A TypeScript program that showcases enums.


## Overview

How do enums work in TypeScript? How do they differ from enums in other programming languages? This codebase explores
TypeScript enums in a runnable program.

Enums are a feature of many programming languages and the word is an abbreviation of "enumerations".


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
      0 is a direction.
      1 is a direction.
      2 is a direction.
      3 is a direction.
      Up is a direction.
      Down is a direction.
      Left is a direction.
      Right is a direction.
      ```
    * That's a bit strange. Why does it output the name of the enum value and the ordinal as if they are two separate
      entries in the enum? That's not what I'm used to in other programming languages. Is there a way to iterate over
      just the named entries?


## Reference

* [TypeScript Reference: *Enums*](https://www.typescriptlang.org/docs/handbook/enums.html?azure-portal=true)
