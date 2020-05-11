//test

//% weight=10 color=#9F79EE icon="\uf108" block="Light"
namespace light {
    //% blockID = led_on
    //% weight=40
    export function Led_On() {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    //% blockID = led_off
    //% weight=30
    export function Led_Off(): void {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}