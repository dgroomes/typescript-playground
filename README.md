# typescript-playground

📚 Learning and exploring the TypeScript programming language.

> TypeScript is JavaScript with syntax for types.
>
> -- <cite> https://www.typescriptlang.org/ </cite>


## Overview

This repository is my own exploration of TypeScript and the TypeScript ecosystem. It codifies some of the TypeScript
concepts and trivia I've learned into runnable example programs, complete with verbose commentary and references.

**NOTE**: This project was developed on macOS. It is for my own personal use.


## Standalone sub-projects

This repository illustrates different concepts, patterns and examples via standalone sub-projects. Each sub-project is
completely independent of the others and do not depend on the root project. This _standalone sub-project constraint_
forces the sub-projects to be complete and maximizes the reader's chances of successfully running, understanding, and
re-using the code.

The sub-projects include:


### `hello-world/`

A "hello world" TypeScript program compiled directly with the TypeScript compiler: `tsc`.

See the README in [hello-world/](hello-world/).


### `enums/`

A TypeScript program that showcases enums.

See the README in [enums/](enums/).


## Wish List

General clean ups, TODOs and things I wish to implement for this project:

* [x] DONE Add an enum example. There are a lot of TypeScript features I want to learn but enums are top of my mind.
* [x] DONE Add a dev container definition. I want to be able to run this in GitHub Codespaces or VS Code Remote Containers.
* [ ] Add a "union types" (or similar) example.

## Reference

* [GitHub repo: `javascript-playground`](https://github.com/dgroomes/javascript-playground)
    * This is another project of my own. It contains some TypeScript examples which would be better suited for this
      project. I'll migrate them over here in the future.
