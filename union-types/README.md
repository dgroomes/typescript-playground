# union-types

A TypeScript program that showcases union types.


## Overview

TypeScript [supports union types](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unions).
I haven't used union types much in my own programming experience. Java and Kotlin don't support union types except in
some small ways like the fact that nullable variables are actually a union type between some type and null. For example,
in Kotlin, you might express a variable as type `String?` and in other languages you might express this with something
like `String | Null`. Also where type inference happens in Java's `var` keyword (and tons of places in Kotlin) union
types may also be happening. But neither Java nor Kotlin have what is called *denotable* union types. Denotable types
are types that can be expressed explicitly in the program. Here is an example of a denotable union type written in
TypeScript:

```typescript
type FavoriteThing = string | number // The union of string and number is captured in a denotable type named 'FavoriteThing'

function describeFavoriteThing(thing: FavoriteThing) {
    if (typeof thing === 'string') {
        console.log(`Your favorite thing is a phrase: '${thing}'`)
    } else {
        console.log(`Your favorite thing is a number: ${thing}`)
    }
}

describeFavoriteThing("Catching lightning in a bottle")
describeFavoriteThing(7)
```

I want to start grokking union types in TypeScript. I want to know the syntax and the idioms. This codebase is me doing
that.


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
    * Notice the `dist/union-types.js` file. 
5. Run the program
    * ```shell
      node dist/union-types.js
      ```
    * The output will look like this:
      ```text
      Let's learn about union types in TypeScript...
      
      Haskell is a purely functional programming language.
      F# is a functional-first programming language.
      Kotlin is a multi-paradigm programming language.
      
      Ok let's try another example...
      
      It looks like we got a static fact. Just return it.
      Static light fact: The speed of light can circle the world at 7 times per second.
      It looks like we got a dynamic fact. Let's inject some dynamism by creating a random number as a basis for the dynamic fact.
      Dynamic square fact: The square of 5 is 25.
      It looks like we got a dynamic fact. Let's inject some dynamism by creating a random number as a basis for the dynamic fact.
      Dynamic square fact: The square of 4 is 16.
      It looks like we got a dynamic fact. Let's inject some dynamism by creating a random number as a basis for the dynamic fact.
      Dynamic square fact: The square of 9 is 81.
      ```


## Reference

* [TypeScript docs: *TypeScript for Functional Programmers*](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html)
  * This is an awesome document. I quickly introduced me to some concepts I never knew about and it did it very concisely.
    In fact, it's so dense and terse that I needed to look up other references to actually understand concepts like
    "discriminated" and "tagging". I'm glad I have a name for these concepts which I already knew but didn't have a
    name for. That said, the fact that TypeScript discriminates on the `arg` variable example in the *Unions* section
    using `Array.isArray` is wild. Wisely, that same section warns about this language feature with the following.

    > It is possible, however, to generate unions that are difficult to differentiate at runtime. For new code, it’s best to build only discriminated unions.
   
    I'm not 100% sure what it means to build a discriminated union though. Does that mean name all my types before using
    them in a union?
