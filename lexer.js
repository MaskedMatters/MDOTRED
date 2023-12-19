/*

WARNING: THE CODE BELOW IS NOT UP TO THE DEVELOPERS STANDARDS. PLEASE WAIT 'TILL THIS GOES AWAY UNTIL USE.

Changelog - 
    1. The warning message has been changed
    2. A changelog has been added
    3. isInteger function now uses the isNaN JS function
    4. A keyword object has been added
    5. Check if token is integer finished
    6. Check if token is letter added
        6a. If ident is a reserved keyword add VarType TokenType
    7. Check if token is skippable or "\s", "\n", "\t"
    8. Character not recognized method

    I also added the code at the end to run a test MDOTRED file and display the tokens

*/

const fs = require('fs')

const helper = require('./helper')

// An ENUMERATOR as an object in Vanilla JS
const TokenType = {
    VarType: 1,              // Variable Type       (A variable instantiation identifier)
    Identifier: 2,           // Identifier          (A name to a variable)
    Equals: 3,               // Equals              (An equals sign)
    Number: 4,               // Number              (A number)
    OpenPeren: 5,            // Open Perenthesis    (The left perenthesis "(")
    ClosePeren: 6,           // Close Perenthesis   (The right perenthesis ")")
    Operand: 7               // Binary Operand      (Mathematic Operator +,-,*,/)
}

const Keywords = {
    "int": TokenType.VarType,
    "str": TokenType.VarType,
    "char": TokenType.VarType,
    "bool": TokenType.VarType
}

// Each tokens will be a class with a value and type
class Token {
    constructor(value, type) {
        this.value = value,
        this.type = type
    }
}

function tokenize(sourceCode) {
    let tokens = []
    let src = sourceCode.split("")

    while (src.length > 0) {
        /*
            While there is still characters in the source code there are if statements that check for specific characters.
            If that character is something that the programming language cares about, it will push an object that is instantiated from the token class.
            The token class takes in two arguments.
            The character that was found (and once it's finished that character will be removed from the src) and the token type.
        */
        if (src[0] == "(") {
            // Push left perenthesis token to tokens array
            tokens.push(new Token(src.shift(), TokenType.OpenPeren))
        } else if (src[0] == ")") {
            // Push right perenthesis token to tokens array
            tokens.push(new Token(src.shift(), TokenType.ClosePeren))
        } else if (src[0] == "=") {
            // Push equal sign token to tokens array
            tokens.push(new Token(src.shift(), TokenType.OpenPeren))
        } else if (src[0] == "+" || src[0] == "-" || src[0] == "*" || src[0] == "/") {
            // Push operand tokens to token array
            tokens.push(new Token(src.shift(), TokenType.Operand))
        } else {
            // This is the else part of the if statement. All above else if's are for the single char tokens.
            // This will take care of multi char tokens.

            // Number tests
            if (helper.isInteger(src[0])) {
                let num = ""

                while (src.length > 0 && helper.isInteger(src[0])) {
                    // This will keep happening if we haven't ran out of characters and the characters we are tokenizing are numbers.
                    // It adds the number it's found to the num var and removes it from source.
                    num += src.shift()
                }

                // Push number token to token array
                tokens.push(new Token(num, TokenType.Number))
            } else if (helper.isLetter(src[0])) {
                let ident = ""

                while (src.length > 0 && helper.isLetter(src[0])) {
                    // This will keep happening if we haven't ran out of characters and the characters we are tokenizing are letters.
                    // It adds the letter it's found to the ident var and removes it from source.
                    ident += src.shift()
                }

                const reserved = Keywords[ident]

                if (reserved) {
                    // If the ident is reserved push the ident with reserved type
                    tokens.push(new Token(ident, reserved))
                } else {
                    // If the ident is not reserved push the ident with identifier type
                    tokens.push(new Token(ident, TokenType.Identifier))
                }

            } else if (helper.isSkippable) {
                src.shift()
            } else {
                console.log("THAT IS A BIG FAT UNIDENTIFIABLE CHARACTER: " + src[0])
            }
        }
    }

    return tokens
}

// RUN THE ACTUAL CODE!!!
const source = fs.readFileSync('test.mdr', 'utf-8')
for (const token of tokenize(source)) {
    console.log(token)
}