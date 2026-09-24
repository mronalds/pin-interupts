/**
 * Custom Pins Fix for Students
 */
//% weight=100 color=#e67e22 icon="\uf0e7" block="Hardware Hacks"
namespace hardwareHacks {
    /**
     * Instantly unlocks a specific digital pin so it can broadcast high-speed events.
     */
    //% block="enable broadcasting on %pin"
    export function unlockPin(pin: DigitalPin): void {
        pins.setEvents(pin, PinEventType.Pulse)
    }

    /**
     * Unlocks all primary safe digital pins (P0, P1, P2, P8, P13, P14, P15, P16) at once.
     */
    //% block="enable broadcasting on ALL pins"
    export function unlockAllPins(): void {
        const safePins = [
            DigitalPin.P0, DigitalPin.P1, DigitalPin.P2,
            DigitalPin.P8, DigitalPin.P13, DigitalPin.P14,
            DigitalPin.P15, DigitalPin.P16
        ];
        for (let pin of safePins) {
            pins.setEvents(pin, PinEventType.Pulse)
        }
    }
}
