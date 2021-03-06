# ESLint Config

A set of custom ESLint configs inspired by Standard, AirBnB, and Formidable Labs.

## Contents

- [Usage](#Usage)
- [Installation](#Installation)
- [Configs](#Configs)
- [License](#License)

## Usage

```json
{
    "extends": [
        "@epiphany/eslint-config/es2017",
        "@epiphany/eslint-config/node"
    ]
}
```

## Installation

### yarn

```
$ yarn add -D @epiphany/eslint-config
```

### npm

```
$ npm i -D @epiphany/eslint-config
```

## Configs

| Name | Type |
|:-|:-:|
| @epiphany/eslint-config/es2017 | Base |
| @epiphany/eslint-config/es2020 | Base |
| @epiphany/eslint-config/typescript | Base |
| @epiphany/eslint-config/typescript-types | Base |
| @epiphany/eslint-config/node | Addon |
| @epiphany/eslint-config/jest | Addon |

**NOTE:** None of the rules in `typescript` require type-checking in order to run. For those, you'll want to use `typescript-types`.

## License

[MIT](LICENSE)
