//% weight=8 color=#ed922b icon="\uf2db" block="GIGO Motors" 
namespace sensors {

	export enum LedPortList {

		//% block="B"
		B,
		//% block="C"
		C,
		//% block="D"
		D,
		//% block="E"
		E,
		//% block="F"
		F,
		//% block="G"
		G,
		//% block="H"
		H

	}

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
   	 //% blockId=stopAllMotor  block="Stop all motors"
   	 export function stopAllMotor(): void {
	        DDMmotor(MotorList.E, 0)
	        DDMmotor(MotorList.F, 0)
	        DDMmotor(MotorList.G, 0)
	        DDMmotor(MotorList.H, 0)
	}
	//% blockId="IR" block="IR sensor %pin detects obstacle"
	export function IR (pinout: SensorPortList): boolean {

		switch(pinout){	

			case SensorPortList.P1:
				
		        	if (pins.digitalReadPin(DigitalPin.P1) == 0) {
		            		return true
		        	}
		        	else {
		            		return false
		       		}
				break;
				
			case SensorPortList.P8:
				
				
		        	if (pins.digitalReadPin(DigitalPin.P8) == 0) {
		            		return true
		        	}
		        	else {
		            		return false
		       		}
				break;
			case SensorPortList.P12:
				
				
		        	if (pins.digitalReadPin(DigitalPin.P12) == 0) {
		            		return true
		        	}
		        	else {
		            		return false
		       		}
				break;
			case SensorPortList.P2:
				
				
		        	if (pins.digitalReadPin(DigitalPin.P2) == 0) {
		            		return true
		        	}
		        	else {
		            		return false
		       		}
				break;
			case SensorPortList.P13:
				
				
		        	if (pins.digitalReadPin(DigitalPin.P13) == 0) {
		            		return true
		        	}
		        	else {
		            		return false
		       		}
				break;
			case SensorPortList.P14:
				
				
		        	if (pins.digitalReadPin(DigitalPin.P14) == 0) {
		            		return true
		        	}
		        	else {
		            		return false
		       		}
				break;
			case SensorPortList.P15:
				
				
		        	if (pins.digitalReadPin(DigitalPin.P15) == 0) {
		            		return true
		        	}
		        	else {
		            		return false
		       		}
				break;
			case SensorPortList.P16:
				
				
		        	if (pins.digitalReadPin(DigitalPin.P16) == 0) {
		            		return true
		        	}
		        	else {
		            		return false
		       		}
				break;
		}
	}

	 //% blockId=LED block="LED %pin toggle to $ledstate || brightness %brightness \\%"
   	 //% brightness.min=0 brightness.max=100
   	 //% ledstate.shadow="toggleOnOff"
   	 //% expandableArgumentMode="toggle"
	export function ledBrightness(port: LedPortList, ledstate: boolean, brightness: number = 100): void {

	switch(port){

		case LedPortList.B:
        		if (ledstate) {
		            pins.analogSetPeriod(AnalogPin.P14, 100)
		            pins.analogWritePin(AnalogPin.P14, Math.map(brightness, 0, 100, 0, 1023))
		        }
        		else {
		            pins.analogWritePin(AnalogPin.P14, 0)
		            brightness = 0
        		}
			break;

		case LedPortList.C:
        		if (ledstate) {
		            pins.analogSetPeriod(AnalogPin.P2, 100)
		            pins.analogWritePin(AnalogPin.P2, Math.map(brightness, 0, 100, 0, 1023))
		        }
        		else {
		            pins.analogWritePin(AnalogPin.P2, 0)
		            brightness = 0
        		}
			break;

		case LedPortList.D:
        		if (ledstate) {
		            pins.analogSetPeriod(AnalogPin.P8, 100)
		            pins.analogWritePin(AnalogPin.P8, Math.map(brightness, 0, 100, 0, 1023))
		        }
        		else {
		            pins.analogWritePin(AnalogPin.P8, 0)
		            brightness = 0
        		}
			break;

		case LedPortList.E:
        		if (ledstate) {
		            pins.analogSetPeriod(AnalogPin.P15, 100)
		            pins.analogWritePin(AnalogPin.P15, Math.map(brightness, 0, 100, 0, 1023))
		        }
        		else {
		            pins.analogWritePin(AnalogPin.P15, 0)
		            brightness = 0
        		}
			break;

		case LedPortList.F:
        		if (ledstate) {
		            pins.analogSetPeriod(AnalogPin.P13, 100)
		            pins.analogWritePin(AnalogPin.P13, Math.map(brightness, 0, 100, 0, 1023))
		        }
        		else {
		            pins.analogWritePin(AnalogPin.P13, 0)
		            brightness = 0
        		}
			break;

		case LedPortList.G:
        		if (ledstate) {
		            pins.analogSetPeriod(AnalogPin.P12, 100)
		            pins.analogWritePin(AnalogPin.P12, Math.map(brightness, 0, 100, 0, 1023))
		        }
        		else {
		            pins.analogWritePin(AnalogPin.P12, 0)
		            brightness = 0
        		}
			break;

		case LedPortList.H:
        		if (ledstate) {
		            pins.analogSetPeriod(AnalogPin.P1, 100)
		            pins.analogWritePin(AnalogPin.P1, Math.map(brightness, 0, 100, 0, 1023))
		        }
        		else {
		            pins.analogWritePin(AnalogPin.P1, 0)
		            brightness = 0
        		}
			break;
			
    		}
	}

}
