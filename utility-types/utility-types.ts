/*
I have an IDE type inference problem with TypeScript sometimes. Take this example:

When there is a function that takes one parameter which is some non-denotable union type like "{foo: string} | {bar: string, baz: number}",
I get IDE auto-completion when I write the argument at the call site. This is auto-completion at its finest. I probably
don't have the data shapes memorized for this function, so it's nice to have the IDE help me out.

But as the program grows, I might need to declare a variable for this argument and instantiate the value ahead of time.
But when I do this, I lose the IDE auto-completion. This is because the IDE can't "look ahead" and infer what the possible
shapes of the variable need/can be. Is there a way to declare a variable and specify the type explicitly be referencing
a function signature?

It turns out there is a way to do this using the Parameters utility type. Here's an example.
*/

/**
 * Pretend this is a function defined in a third-party library, like React or Redux. The function has one parameter and
 * it's of a non-denoted type.
 */
function someFunction(arg: { foo: string } | { bar: string; baz: number }): void {
    if (!("foo" in arg)) {
        console.log(`The function was called with the 'bar/baz' form. bar=${arg.bar}, baz=${arg.baz}`);
    } else {
        console.log(`The function was called with the 'foo' form. foo=${arg.foo}`);

        // Note that at this point in the code, it's possible that 'arg' also included 'bar' and/or 'baz' anyway.
        // TypeScript's flexible type system keeps you on your toes.
    }
}

{
    console.log("Style #1: Invoke the function and inline the argument.");

    someFunction({foo: 'Hello'});
    someFunction({bar: "hi", baz: 1});
    // This is nice because the IDE helped us auto-complete 'foo', 'bar', and 'baz'.
}

{
    console.log("Style #2: Declare a variable for the argument ahead of time.");
    const myArg = {foo: 'Hello'};
    someFunction(myArg);
    // This is not as nice, because the IDE doesn't help us auto-complete 'foo'.
}

{
    console.log("Style #3: Declare a variable for the argument ahead of time and specify the type explicitly.");
    const myArg: { foo: string } | { bar: string, baz: number } = {bar: "hi", baz: 1};
    someFunction(myArg);
    // This is quite silly. While we got IDE auto-completion on the right-hand side, we had to know the exact
    // types anyway and write them on the left hand side. It's very verbose too.
}

{
    console.log("Style #4: Use the 'Parameters' utility type to reference the function signature.");
    const myVar1: Parameters<typeof someFunction>[0] = {foo: 'Hello'};
    someFunction(myVar1);
    const myVar2: Parameters<typeof someFunction>[0] = {bar: "hi", baz: 1};
    someFunction(myVar2);

    // This style give us the best of both worlds: IDE auto-complete and the flexibility to write our code in the order
    // we prefer.

    // The 'Parameters<typeof someFunction>[0]' usage is esoteric, especially if you are coming from another language,
    // but it can come in handy.
}
