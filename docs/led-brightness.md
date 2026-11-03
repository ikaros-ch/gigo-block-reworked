# Led brightness

Turn an LED module on or off, with optional brightness.

```sig
sensors.ledBrightness(sensors.LedPortList.B, true, 100)
```

## Parameters

* **port**: the port the LED is plugged into
* **ledstate**: true to turn it on
* **brightness**: brightness from 0 to 100

## Example

```blocks
sensors.ledBrightness(sensors.LedPortList.B, true, 100)
```

```package
gigo-ddm=github:ikaros-ch/gigo-block-reworked
```
