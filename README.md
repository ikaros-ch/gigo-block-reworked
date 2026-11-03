# GIGO DDM motors and sensors

MakeCode blocks for the **GIGO #1269 Robotics Workshop for micro:bit** set ([building guide](https://issuu.com/gigotoys/docs/_1269-en)): drive the **DDM 50x planetary gearbox motors** and read the IR, force and LED modules plugged into the set's ports.

This is a rework of GIGO's own [gigo-block](https://github.com/gigotoys/gigo-block) extension (MIT): simpler motor control with speed -100 to 100, a stop-all block, LED brightness, and English and Greek block text.

## Use as extension

In [MakeCode for micro:bit](https://makecode.microbit.org/): **Extensions** → paste `https://github.com/ikaros-ch/gigo-block-reworked`.

```package
gigo-ddm=github:ikaros-ch/gigo-block-reworked
```

## Ports

| Port | Pins | Use for |
|---|---|---|
| E | P16, P15 | DDM motor, force sensor, LED |
| F | P14, P13 | DDM motor, force sensor, LED |
| G | P2, P12 | DDM motor, force sensor, LED |
| H | P8, P1 | DDM motor, force sensor, LED |
| B, C, D | P14, P2, P8 | LED |
| P1, P2, P8, P12-P16 | single pin | IR sensor |

## Examples

### Drive forward and stop at an obstacle

```blocks
basic.forever(function () {
    if (sensors.irSensor(sensors.SensorPortList.P1)) {
        // Something in front: stop both wheels
        sensors.stopAllMotor()
    } else {
        // Clear road: both DDM motors forward at 70%
        sensors.ddmMotor(sensors.DualPortList.E, 70)
        sensors.ddmMotor(sensors.DualPortList.F, -70)
    }
})
```

### Press to light up

```blocks
basic.forever(function () {
    // LED on port B lights while the force sensor on port G is pressed
    sensors.ledBrightness(sensors.LedPortList.B, sensors.forceSensor(sensors.DualPortList.G), 100)
})
```

The two motors in the first example face opposite ways on the chassis, so one gets a negative speed to drive forward.

## Blocks

* [set motor speed](docs/ddm-motor.md), [stop all motors](docs/stop-all-motor.md)
* [IR sensor detects obstacle](docs/ir-sensor.md), [force sensor pushed](docs/force-sensor.md)
* [LED toggle / brightness](docs/led-brightness.md)

## Learn more

* [GIGO #1269 building guide](https://issuu.com/gigotoys/docs/_1269-en)
* [Original gigo-block extension](https://github.com/gigotoys/gigo-block)
* [micro:bit analog write (PWM) reference](https://makecode.microbit.org/reference/pins/analog-write-pin)

## License

MIT. Original blocks © GIGO Toys, rework © ikaros-ch.

## Supported targets

* for PXT/microbit
