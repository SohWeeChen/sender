radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("y", pins.analogReadPin(AnalogPin.P1))
    radio.sendValue("x", pins.analogReadPin(AnalogPin.P2))
    basic.showNumber(pins.analogReadPin(AnalogPin.P2))
})
