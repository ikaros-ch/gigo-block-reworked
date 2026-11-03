# Ddm motor

GIGO #1269 Robotics Workshop (micro:bit) blocks: DDM motors, IR, LED and force sensors. Based on https://github.com/gigotoys/gigo-block (MIT), reworked by ikaros-ch. / //% weight=8 color=#ed922b icon="\uf2db" block="GIGO Motors" namespace sensors { export enum LedPortList { //% block="B(P14)" B, //% block="C(P2)" C, //% block="D(P8)" D, //% block="E(P16,P15)" E, //% block="F(P14,P13)" F, //% block="G(P2,P12)" G, //% block="H(P8,P1)" H } export enum SensorPortList { //% block="P1(Analog)" P1, //% block="P8" P8, //% block="P12" P12, //% block="P2(Analog)" P2, //% block="P13" P13, //% block="P14" P14, //% block="P15" P15, //% block="P16" P16, } export enum DualPortList { //% block="E(P16,P15)" E, //% block="F(P14,P13)" F, //% block="G(P2,P12)" G, //% block="H(P8,P1)" H } /** Run a DDM (50x planetary gearbox) motor plugged into a dual port. Negative speeds run it backwards.

```sig
sensors.ddmMotor(sensors.DualPortList.E, 50)
```

## Parameters

* **motor**: the dual port the motor is plugged into
* **speed**: speed from -100 to 100

## Example

```blocks
sensors.ddmMotor(sensors.DualPortList.E, 50)
```

```package
gigo-ddm=github:ikaros-ch/gigo-block-reworked
```
