console.log("Let's learn about enums in TypeScript.")

enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log("Let's iterate over the `Direction` enum using the `for in` syntax...")

for (const value in Direction) {
    const message = `Found value '${value}'. The type of this value is '${typeof value}'.`
    console.log(message)
}

console.log("")
