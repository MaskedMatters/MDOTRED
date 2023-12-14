function isLetter(char) {
    return char.toUpperCase() != char.toLowerCase()
}

function isInteger(char) {
    return char >= "0".charCodeAt(0) && char <= "9".charCodeAt(0)
}

module.exports = {
    isLetter,
    isInteger
}