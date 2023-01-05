console.log("Let's learn about enums in TypeScript by simulating a text-based adventure game.")
console.log("")

enum Direction {
    Up,
    Down,
    Left,
    Right
}

/*
Let's pretend we're writing a text-based adventure game. The user types in a command using the keyboard to describe what
their character should do next. For the sake of simplicity, we'll only allow the user to move in one of four directions:
up, down, left, or right.

The "handleCommand" function takes the user's input and asserts that it is a legal command. If it is, it calls into
the core of the "business logic" of the game which is the "executeCommand" function. If the command is not legal, it
prints an error.

Notice the progression of a text-based command to an enum-based command. Our core business logic can code to the enum
which represents a limited set of possible values. This constrained set of values reduces the surface area for introducing
bugs in the program. By contrast, the text-based command may be any value in an unlimited set of possible values. We
want to progress from chaos to order in programs, and enums are one tool to help us do that.
*/

let lastCommand : Direction | null = null

/**
 * Execute the command and return a reaction.
 * @param command
 */
function executeCommand(command: Direction) : string {
    const _lastCommand = lastCommand
    lastCommand = command

    if (_lastCommand === Direction.Up && command === Direction.Up) {
        return "You moved forward."
    } else if (_lastCommand === Direction.Down && command === Direction.Down) {
        return "You moved backward."
    } else if (_lastCommand === Direction.Left && command === Direction.Left) {
        return "You moved to the left."
    } else if (_lastCommand === Direction.Right && command === Direction.Right) {
        return "You moved to the right."
    }

    if (
        (_lastCommand === Direction.Up && command === Direction.Down) ||
        (_lastCommand === Direction.Down && command === Direction.Up) ||
        (_lastCommand === Direction.Left && command === Direction.Right) ||
        (_lastCommand === Direction.Right && command === Direction.Left)) {
        return `You did a 180! You are facing ${Direction[command].toString().toLowerCase()} now.`
    }

    switch (command) {
        case Direction.Up: return "You are facing forward."
        case Direction.Down: return "You are facing backward."
        case Direction.Left: return "You are facing left."
        case Direction.Right: return "You are facing right."
    }

    // Note: there are so many ways to write this kind of conditional logic. The way I wrote it is just one of many. It's
    // not special. At first, I assumed I could some kind of pattern matching and I wanted to write a conditional that
    // matches something like [Up, Right, Down, Left, Up] and then react with "You did a spin move!". But TypeScript and
    // JavaScript don't have pattern matching. The silver lining is that I learned that there is a TC39 proposal to add
    // pattern matching to ECMAScript: https://github.com/tc39/proposal-pattern-matching
}
function handleCommand(rawCommand: string) {
    if (!(rawCommand in Direction)) {
        console.log(`'${rawCommand} is not a legal command.`)
        return
    }

    // @ts-ignore
    const command = Direction[rawCommand] as Direction
    const reaction = executeCommand(command)
    console.error(reaction)
}


handleCommand("Up")
handleCommand("Up")
handleCommand("Right")
handleCommand("Left")
handleCommand("Diagonally")
