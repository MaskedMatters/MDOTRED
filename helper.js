function isLetter(char) {
    return char.toUpperCase() != char.toLowerCase()
}

function isInteger(char) {
    return isSkippable(char) ? false : !isNaN(char);
}

function isSkippable(char) {
    return char == " " || char == "\n" || char == "\t"
}

module.exports = {
    isLetter,
    isInteger,
    isSkippable
}