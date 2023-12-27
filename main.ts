//% weight=8 color=#bf9c32 icon="\uf2db" block="GIGO DDM motor" 
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
	//% blockId=DDMmotor block=" Set Motor %motor direction (0~1) %McontrolValue Speed(0~100) %MSpeedValue" blockExternalInputs=false
    	//% McontrolValue.min=0 McontrolValue.max=1 
	//% MSpeedValue.min=0 MSpeedValue.max=100

	



    
    export function DDMmotor(motor: MotorList,McontrolValue: number,MSpeedValue: number): void {

	        switch (motor) {
            case MotorList.E:
                pins.analogWritePin(AnalogPin.P15, pins.map(McontrolValue, 0, 1, 0, 1023));
        	pins.analogWritePin(AnalogPin.P16, pins.map(MSpeedValue, 0, 100, 0, 1023));
		break;
            case MotorList.F:
              	pins.analogWritePin(AnalogPin.P13, pins.map(McontrolValue, 0, 1, 0, 1023));
        	pins.analogWritePin(AnalogPin.P14, pins.map(MSpeedValue, 0, 100, 0, 1023));
		break;
            case MotorList.G:
                pins.analogWritePin(AnalogPin.P12, pins.map(McontrolValue, 0, 1, 0, 1023));
        	pins.analogWritePin(AnalogPin.P2, pins.map(MSpeedValue, 0, 100, 0, 1023));
		break;
            case MotorList.H:
                pins.analogWritePin(AnalogPin.P8, pins.map(McontrolValue, 0, 1, 0, 1023));
        	pins.analogWritePin(AnalogPin.P1, pins.map(MSpeedValue, 0, 100, 0, 1023));
		break;
                }    
	    
   
    }
}
