// Test suite for the gigo-ddm extension.
// How to test: build the GIGO #1269 base with a DDM motor on port E, an IR sensor on P1,
// an LED on port B and a force sensor on port F. Flash and check each EXPECT line.
// PASS = every EXPECT matches. In the simulator: PASS = runs with no errors.

sensors.ddmMotor(sensors.DualPortList.E, 60)
basic.pause(2000)
// EXPECT: motor on port E turns one way at about 60%

sensors.ddmMotor(sensors.DualPortList.E, -60)
basic.pause(2000)
// EXPECT: motor on port E turns the other way

sensors.stopAllMotor()
// EXPECT: all motors stop

sensors.ledBrightness(sensors.LedPortList.B, true, 30)
basic.pause(1000)
// EXPECT: LED on port B on, dim
sensors.ledBrightness(sensors.LedPortList.B, true, 100)
basic.pause(1000)
// EXPECT: LED bright
sensors.ledBrightness(sensors.LedPortList.B, false)
// EXPECT: LED off

basic.forever(function () {
    if (sensors.irSensor(sensors.SensorPortList.P1)) {
        basic.showIcon(IconNames.No)
        // EXPECT: cross while a hand is in front of the IR sensor
    } else if (sensors.forceSensor(sensors.DualPortList.F)) {
        basic.showIcon(IconNames.Yes)
        // EXPECT: tick while the force sensor is pressed
    } else {
        basic.clearScreen()
    }
})
