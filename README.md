# typescript-playground

📚 Learning and exploring the TypeScript programming language.

> TypeScript is JavaScript with syntax for types.
>
> -- <cite> https://www.typescriptlang.org/ </cite>


## Overview

This repository is my own exploration of TypeScript and the TypeScript ecosystem. It codifies some of the TypeScript
concepts and trivia I've learned into runnable example programs, complete with verbose commentary and references.

**NOTE**: This project was developed on macOS. It is for my own personal use.


## Standalone subprojects

This repository illustrates different concepts, patterns and examples via standalone subprojects. Each subproject is
completely independent of the others and do not depend on the root project. This _standalone subproject constraint_
forces the subprojects to be complete and maximizes the reader's chances of successfully running, understanding, and
re-using the code.

The subprojects include:


### `hello-world/`

A "hello world" TypeScript program compiled directly with the TypeScript compiler: `tsc`.

See the README in [hello-world/](hello-world/).


### `enums/`

A TypeScript program that showcases enums.

See the README in [enums/](enums/).


### `union-types/`

A TypeScript program that showcases union types.

See the README in [union-types/](union-types/).


### `utility-types/`

Exploring TypeScript's *utility types* which enable powerful type designs using *type transformations*.

See the README in [utility-types/](utility-types/).


## Wish List

General clean-ups, TODOs and things I wish to implement for this project:

* [x] DONE Add an enum example. There are a lot of TypeScript features I want to learn but enums are top of my mind.
* [x] DONE Add a dev container definition. I want to be able to run this in GitHub Codespaces or VS Code Remote Containers.
* [x] DONE Add a "union types" (or similar) example.
* [x] DONE Clean up my `tsconfig.json` files. I can't remember what is important and what is right for 2023. 


## Reference

* [GitHub repo: `javascript-playground`](https://github.com/dgroomes/javascript-playground)
    * This is another project of my own. It contains some TypeScript examples which would be better suited for this
      project. I'll migrate them over here in the future.
* [TypeScript docs: *What is a tsconfig.json*](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
    * Interestingly, there are TSConfig *base files*. I didn't know about that before. For example, [@tsconfig/node16](https://www.npmjs.com/package/@tsconfig/node16).
      It's intriguing, but it's community-driven and not driven by the TypeScript and there aren't explanations for the
      configurations. I'm not sure if I want to create a dependency relationship on this. I might prefer copy and paste.
      Update: I'm confused, the TSConfig base I used uses the value "es2022" for "lib" and that isn't even listed
      as a value in the official TSConfig docs. It goes up to "es2021" which maybe that needs updating, but still, I'll
      stick with official guidance for configuration that I don't have a reason to change. Usefully, Intellij is highlighting
      the value with a warning. Update again: ah the official TypeScript docs for `lib` even admits "This list may be out of date"!
      Ok that's fair TypeScript team. Point to you TSConfig base community.
