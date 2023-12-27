//% weight=8 color=#bf9c32 icon="\uf2db" block="GIGO motor" 
namespace sensors {

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

	//% blockId=setmotorspeed block="Set Motor %motor Speed %speed \\%" 
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
					pins.digitalWritePin(DigitalPin.P8, 0);
				} else if (speed < 0) {
					pins.digitalWritePin(DigitalPin.P8, 1);
				}
				pins.analogWritePin(AnalogPin.P1, pins.map(Math.abs(speed), 0, 100, 0, 1023));
				break;
		}
	}
}
