input.onButtonPressed(Button.A, function () {
    hackbitmotors.MotorStop(hackbitmotors.Motors.M1A)
    hackbitmotors.MotorStop(hackbitmotors.Motors.M1B)
})
input.onButtonPressed(Button.B, function () {
    hackbitmotors.MotorRunDual(
    hackbitmotors.Motors.M1A,
    50,
    hackbitmotors.Motors.M1B,
    50
    )
})
radio.setGroup(1)
radio.sendString("R U OK")
