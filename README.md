# Expression Evaluator Demo (Vulnerable)

This repository contains a simple Node.js Express application that is intentionally vulnerable to code execution attacks. The purpose of this code is to demonstrate the potential risks associated with using the `eval()` function with user input.

## Vulnerability

The vulnerability lies in the use of the `eval()` function to evaluate expressions provided by the user without proper validation and sanitization. This can lead to code injection attacks and compromise the security of the application.

## Installation

To install the required packages, run the following commands:

```bash
npm install # yarn install
```

## Usage
1. Run the vulnerable application:

```bash
node main.js
```
2. Open your web browser and visit http://localhost:8080.
3. You will see a simple HTML form that allows you to enter mathematical expressions.

## Exploiting the Vulnerability
### Example Payload

As an attacker, you can exploit the vulnerability by submitting a malicious expression. For example:

```js
res.end('Wation')
```

it's important to note that the vulnerability extends to command injection.

### Disclaimer

This code is intentionally vulnerable and should only be used for educational purposes. Do not deploy this code in a production environment.

### Mitigation

To secure the application, avoid using eval() with user input. Instead, implement a safer method to evaluate expressions.

### License

`NodeJsCeLab` is made with ♥  by [Wation](https://github.com/TheWation) and it's released under the `Apache License 2.0` license.