console.log("Let's learn about union types in TypeScript...")
console.log("")

// TypeScript's sophisticated type features are reminiscent of functional programming.
// Here are some examples of other programming languages that strongly feature functional programming.
//
// Kotlin is not as deeply entrenched in functional programming as Haskell. But amazingly, Kotlin is still planning
// to introduce large functional programming features like denotable union types and intersection types: https://youtrack.jetbrains.com/issue/KT-13108/Denotable-union-and-intersection-types
// I don't claim to understand this really, but I can kind of make sense of it! For such a widely used and developed
// language like Kotlin (11 years old), and with a tradition of backwards compatibility, I'm impressed that they're
// keeping momentum on that effort. In any case, I can't explore denotable union types in Kotlin right now but I can
// certainly explore then in TypeScript!
//
// Here, the strings are actually "unit types" (I think) and they are unioned together.
type FunctionalFriends = "Haskell" | "F#" | "Kotlin"

/**
 * Describe the given programming language in one sentence.
 * @param language
 */
function describe(language: FunctionalFriends) : string {
    switch (language) {
        case "Haskell": return "Haskell is a purely functional programming language."
        case "F#": return "F# is a functional-first programming language."
        case "Kotlin": return "Kotlin is a multi-paradigm programming language."
    }

    // Notice that there isn't a default case statement! The TypeScript compiler is smart enough to verify that that
    // only "Haskell", "F#" or "Kotlin" are allowed to be passed to this function and that for any of these values,
    // the code paths inside the function lead to a return statement. Thus, the function implementation satisfies the
    // function signature. (UPDATE: I learned that there is a phrase for this: "the function is total".) No need to
    // write a do-nothing default case statement or return statement with the value of "This should never happen" just
    // to please the compiler!
}

console.log(describe("Haskell"))
console.log(describe("F#"))
console.log(describe("Kotlin"))

// This line doesn't compile when uncommented. Specifically, it cause the following compiler error.
//
//   TS2345: Argument of type '"Scala"' is not assignable to parameter of type 'FunctionalFriends'.
//
// console.log(describe("Scala"))

// ******************************************************************************************************************
console.log("")
console.log("Ok let's try another example...")
console.log("")
// ******************************************************************************************************************

type StaticFact = string
type DynamicFact = (x: number) => string
type FactSupplier = StaticFact | DynamicFact // This is a denotable union type because it is named. In this case, "FactSupplier"

function getFact(supplier: FactSupplier): string {
    if (typeof supplier === "string") {
        console.log("It looks like we got a static fact. Just return it.")
        return supplier
    } else {
        console.log("It looks like we got a dynamic fact. Let's inject some dynamism by creating a random number as a basis for the dynamic fact.")
        const randomInt = Math.floor(Math.random() * 10)
        return supplier(randomInt)
    }
}

const staticLightFact = getFact("The speed of light can circle the world at 7 times per second")
console.log(`Static light fact: ${staticLightFact}.`)

function squareFact(x: number) { return `The square of ${x} is ${x * x}` }
console.log(`Dynamic square fact: ${getFact(squareFact)}.`)
console.log(`Dynamic square fact: ${getFact(squareFact)}.`)
console.log(`Dynamic square fact: ${getFact(squareFact)}.`)
