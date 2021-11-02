input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . . . . .
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . . . . .
            . # . # .
            # . # . #
            `)
    }
    basic.showLeds(`
        # . # . #
        # # . # .
        # . . . .
        # . # . #
        # # . # .
        `)
    basic.showLeds(`
        # # . # .
        # # # . #
        # # . . .
        # # . # .
        # # # . #
        `)
    basic.showLeds(`
        # # # . #
        # # # # .
        # # # . .
        # # # . #
        # # # # .
        `)
    basic.showLeds(`
        # # # # .
        # # # # #
        # # # # .
        # # # # .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showString("DO YOUR HOMEWORK")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.showString("Check your work!")
})
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # . # . #
        . # . # .
        . . . . .
        # . # . #
        . # . # .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        . # . # .
        # . # . #
        `)
}
basic.showLeds(`
    # . # . #
    # # . # .
    # . . . .
    # . # . #
    # # . # .
    `)
basic.showLeds(`
    # # . # .
    # # # . #
    # # . . .
    # # . # .
    # # # . #
    `)
basic.showLeds(`
    # # # . #
    # # # # .
    # # # . .
    # # # . #
    # # # # .
    `)
basic.showLeds(`
    # # # # .
    # # # # #
    # # # # .
    # # # # .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showString("DO YOUR HOMEWORK")
