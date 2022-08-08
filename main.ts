GHBit.onKey(GHBit.enButton.B3, function () {
    radio.sendNumber(8)
})
GHBit.onKey(GHBit.enButton.B1, function () {
    radio.sendNumber(6)
})
GHBit.onKey(GHBit.enButton.B4, function () {
    radio.sendNumber(9)
})
GHBit.onKey(GHBit.enButton.B2, function () {
    radio.sendNumber(7)
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
radio.setTransmitPower(7)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendNumber(1)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendNumber(2)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendNumber(3)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendNumber(4)
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendNumber(5)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(10)
    } else {
        radio.sendNumber(0)
    }
})
