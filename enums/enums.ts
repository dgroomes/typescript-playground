console.log("Let's learn about enums in TypeScript...")
console.log("")

enum Direction {
    Up,
    Down,
    Left,
    Right
}

for (const direction in Direction) {
    const message = `${direction} is a direction.`
    console.log(message)
}

console.log("")
