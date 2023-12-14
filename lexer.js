/*

DO NOT USE ANY OF THE CODE BELOW. IT IS NOT FINISHED AND HAS LOTS OF NESTED SPEGHETTI POOP!
DO NOT USE ANY OF THE CODE BELOW. IT IS NOT FINISHED AND HAS LOTS OF NESTED SPEGHETTI POOP!
DO NOT USE ANY OF THE CODE BELOW. IT IS NOT FINISHED AND HAS LOTS OF NESTED SPEGHETTI POOP!
DO NOT USE ANY OF THE CODE BELOW. IT IS NOT FINISHED AND HAS LOTS OF NESTED SPEGHETTI POOP!
DO NOT USE ANY OF THE CODE BELOW. IT IS NOT FINISHED AND HAS LOTS OF NESTED SPEGHETTI POOP!
DO NOT USE ANY OF THE CODE BELOW. IT IS NOT FINISHED AND HAS LOTS OF NESTED SPEGHETTI POOP!
DO NOT USE ANY OF THE CODE BELOW. IT IS NOT FINISHED AND HAS LOTS OF NESTED SPEGHETTI POOP!
DO NOT USE ANY OF THE CODE BELOW. IT IS NOT FINISHED AND HAS LOTS OF NESTED SPEGHETTI POOP!
DO NOT USE ANY OF THE CODE BELOW. IT IS NOT FINISHED AND HAS LOTS OF NESTED SPEGHETTI POOP!
DO NOT USE ANY OF THE CODE BELOW. IT IS NOT FINISHED AND HAS LOTS OF NESTED SPEGHETTI POOP!

*/

// An ENUMERATOR as an object in Vanilla JS
const TokenType = {
    VarType: 1,              // Variable Type       (A variable instantiation identifier)
    Identifier: 2,           // Identifier          (A name to a variable)
    Equals: 3,               // Equals              (An equals sign)
    Number: 4,               // Number              (A number)
    OpenPeren: 5,            // Open Perenthesis    (The left perenthesis "(")
    ClosePeren: 6,           // Close Perenthesis   (The right perenthesis ")")
    Operand: 7               // Binary Operand      (Mathematics +,-,*,/)
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
            tokens.push(new Token(src[0].shift(), TokenType.OpenPeren))
        } else if (src[0] == ")") {
            // Push right perenthesis token to tokens array
            tokens.push(new Token(src[0].shift(), TokenType.ClosePeren))
        } else if (src[0] == "=") {
            // Push equal sign token to tokens array
            tokens.push(new Token(src[0].shift(), TokenType.OpenPeren))
        } else if (src[0] == "+" || src[0] == "-" || src[0] == "*" || src[0] == "/") {
            // Push operand tokens to token array
            tokens.push(new Token(src[0].shift(), TokenType.Operand))
        } else {
            // This is the else part of the if statement. All above else if's are for the single char tokens.
            // This will take care of multi char tokens.

            // Number tests
            if (/* SOMETHING WILL GO HERE */) {
                let num = ""

                while (src.length > 0 && Number.isInteger(src[0])) {
                    // This will keep happening if we haven't ran out of characters and the characters we are tokenizing are numbers.
                    // It adds the number it's found to the num var and removes it from source.
                    num += src.shift()
                }

                // Push number token to token array
                tokens.push(new Token(num, TokenType.Number))
            } else if () {

            }
        }
    }

    return tokens
}