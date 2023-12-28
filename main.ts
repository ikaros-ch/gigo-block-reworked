//% weight=8 color=#bf9c32 icon="\uf2db" block="GIGO Motors" 
namespace sensors {

	export enum SensorPortList {
		//% block="P1(Analog)"
		P1,
		//% block="P8"
		P8,
		//% block="P12"
		P12,
		//% block="P2(Analog)"
		P2,
		//% block="P13"
		P13,
		//% block="P14"
		P14,
		//% block="P15"
		P15,
		//% block="P16"
		P16,
		
	}

	export enum MotorList {
		//% block="E"
		E,
		//% block="F"
		F,
		//% block="G"
		G,
		//% block="H"
		H
	}

	//% blockId=setMotorSpeed block="Set Motor %motor Speed %speed \\%" 
	//% speed.min=-100 speed.max=100
	export function DDMmotor(motor: MotorList, speed: number): void {
		
		if (speed > 100) {
            			speed = 100
		        }
		else if(speed < -100){
		                speed = -100
		        }
		
		switch (motor) {
			
			case MotorList.E:
				if (speed >= 0) {
					pins.digitalWritePin(DigitalPin.P15, 0);
				} else if (speed < 0) {
					pins.digitalWritePin(DigitalPin.P15, 1);
				}
				pins.analogWritePin(AnalogPin.P16, pins.map(Math.abs(speed), 0, 100, 0, 1023));
				break;
			case MotorList.F:
				if (speed >= 0) {
					pins.digitalWritePin(DigitalPin.P13, 0);
				} else if (speed < 0) {
					pins.digitalWritePin(DigitalPin.P13, 1);
				}
				pins.analogWritePin(AnalogPin.P14, pins.map(Math.abs(speed), 0, 100, 0, 1023));
				break;
			case MotorList.G:
				if (speed >= 0) {
					pins.digitalWritePin(DigitalPin.P12, 0);
				} else if (speed < 0) {
					pins.digitalWritePin(DigitalPin.P12, 1);
				}
				pins.analogWritePin(AnalogPin.P2, pins.map(Math.abs(speed), 0, 100, 0, 1023));
				break;
			case MotorList.H:
				if (speed >= 0) {
					pins.digitalWritePin(DigitalPin.P1, 0);
				} else if (speed < 0) {
					pins.digitalWritePin(DigitalPin.P1, 1);
				}
				pins.analogWritePin(AnalogPin.P8, pins.map(Math.abs(speed), 0, 100, 0, 1023));
				break;
		}
	}
	//% weight=85
   	 //% blockId=stopAllMotor  block="Stop all motor"
   	 export function stopAllMotor(): void {
	        DDMmotor(MotorList.E, 0)
	        DDMmotor(MotorList.F, 0)
	        DDMmotor(MotorList.G, 0)
	        DDMmotor(MotorList.H, 0)
	}
	//% blockId="IR" block="IR sensor %pin detects something"
	export function IR (pin: SensorPortList): boolean {
			
        if (pins.digitalReadPin(pin) == 1) {
            return true
        }
        else {
            return false
        }
}
