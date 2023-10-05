radio.onReceivedNumber(function (receivedNumber) {
    if (choice == receivedNumber) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (choice == 0 && receivedNumber == 2 || choice == 1 && receivedNumber == 0 || choice == 2 && receivedNumber == 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
    if (choice == 0 && receivedNumber == 1 || choice == 1 && receivedNumber == 2 || choice == 2 && receivedNumber == 0) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    }
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    choice += 1
    if (choice == 3) {
        choice = 0
    }
    if (choice == 0) {
        basic.showLeds(`
            . . . . #
            # # . # .
            . # # . .
            # # . # .
            . . . . #
            `)
    }
    if (choice == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . . . . .
            `)
    }
    if (choice == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    choice += -1
    if (choice == -1) {
        choice = 2
    }
    if (choice == 0) {
        basic.showLeds(`
            . . . . #
            # # . # .
            . # # . .
            # # . # .
            . . . . #
            `)
    }
    if (choice == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . . . . .
            `)
    }
    if (choice == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(choice)
})
let choice = 0
radio.setGroup(1)
choice = 0
