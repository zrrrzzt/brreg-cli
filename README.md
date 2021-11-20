[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# brreg-cli

Node CLI for looking up data from the Norwegian Entity Registry.

It makes use of the 'brreg/enhetsregisteret' dataset from [hotell.difi.no API](http://hotell.difi.no/api).

## Installation

From npm

```
$ npm install brreg-cli -g
```

## Usage


```sh
$ brreg <query>
```

Optional you can specify format.

Valid options: csv, json, jsonp, xml and yaml (default)

```sh
$ brreg <query> --format=csv
```

To display help

```sh
$ brreg --help
```

To display version

```sh
$ brreg --version
```

## Related

- [brreg](https://github.com/zrrrzzt/brreg) API for this module

## License

[MIT](LICENSE)