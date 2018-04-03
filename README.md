# credential-generator.js
This is my basic credential generator, written in node.

Designed for installation globally, provides a `credential-generator` command line tool.

# Requirements

* nodejs

# Dependencies (internal)
* commander - used to parse command line arguments.

# Installation

To clone the repo locally, and install using `nvm`, or `yarn` with the -g flag.

    $ git clone https://github.com/dmblack/credential-generator.js

Then install globally

    $ npm install -g


# Usage

The tool exports a `credential-generator` function when installed globally.

```
$ credential-generator
Username: qUR-h+p->4J-m2^
Password: Pt]-vc#-rY6-4!q
```

A list of optional arguments can be found with the `-h` flag.

```
$ credential-generator -h

  Usage: credential-generator [options]

  Generates a password, and username, that includes special, but not similar, characters.


  Options:

    -V, --version     output the version number
    -p, --password    Generate a password - Default
    -u, --username    Generate a username - Default
    -s, --no-special  Disallow special characters in username or password - Default: Include special characters.
    -S, --similar     Allow similar characters in username or password - Default: We ignore simialr characters (Eg; O0, I1l)
    -h, --help        output usage information
```
