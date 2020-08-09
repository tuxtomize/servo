for (let index = 0; index < 4; index++) {
    servos.P2.setAngle(90)
    basic.pause(2000)
    servos.P2.setAngle(0)
    basic.pause(2000)
}
