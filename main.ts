basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showString("Sending")
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.clearScreen()
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            basic.showIcon(IconNames.Heart)
        } else if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            basic.clearScreen()
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P1, 2)
        basic.showString("Sending 2")
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.clearScreen()
        if (pins.digitalReadPin(DigitalPin.P0) == 2) {
            basic.showIcon(IconNames.TShirt)
        } else if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            basic.clearScreen()
        }
    }
})
