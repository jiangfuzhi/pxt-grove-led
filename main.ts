//test

//% weight=10 color=#9F79EE icon="\uf108" block="Light"
namespace light {
    //% block
    export function Led_On() {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }

}