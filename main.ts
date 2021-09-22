function getRandomLetter () {
    if (Math.randomBoolean()) {
        return String.fromCharCode(randint(65, 90))
    } else {
        return String.fromCharCode(randint(97, 122))
    }
}
input.onButtonPressed(Button.A, function () {
    letters += 1
    basic.showNumber(letters)
})
input.onGesture(Gesture.Shake, function () {
    letters = 0
    digits = 0
})
input.onButtonPressed(Button.AB, function () {
    if (isInpitValid(digits, letters)) {
        basic.showString("" + (getRandomLetter()))
    } else {
        basic.showIcon(IconNames.Sad)
        music.playMelody("B G G C C G G B ", 270)
    }
})
input.onButtonPressed(Button.B, function () {
    digits += 1
    basic.showNumber(digits)
})
function isInpitValid (numberOfDigits: number, numberOfLetters: number) {
    isVaild = true
    if (numberOfDigits < 2 || numberOfLetters < 4 || numberOfDigits + numberOfLetters < 0) {
        isVaild = false
    }
    return isVaild
}
let isVaild = false
let digits = 0
let letters = 0
letters = 0
digits = 0
