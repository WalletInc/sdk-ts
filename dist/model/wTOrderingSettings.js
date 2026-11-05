"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTOrderingSettings = void 0;
class WTOrderingSettings extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTOrderingSettings.attributeTypeMap);
    }
}
exports.WTOrderingSettings = WTOrderingSettings;
WTOrderingSettings.discriminator = undefined;
WTOrderingSettings.attributeTypeMap = [
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "taxRatePercent",
        "baseName": "taxRatePercent",
        "type": "any"
    },
    {
        "name": "alcoholTaxRatePercent",
        "baseName": "alcoholTaxRatePercent",
        "type": "any"
    },
    {
        "name": "defaultPrepMinutes",
        "baseName": "defaultPrepMinutes",
        "type": "any"
    },
    {
        "name": "busyExtraMinutes",
        "baseName": "busyExtraMinutes",
        "type": "any"
    },
    {
        "name": "isPaused",
        "baseName": "isPaused",
        "type": "any"
    },
    {
        "name": "pausedReason",
        "baseName": "pausedReason",
        "type": "any"
    },
    {
        "name": "autoAccept",
        "baseName": "autoAccept",
        "type": "any"
    },
    {
        "name": "scheduledPickup",
        "baseName": "scheduledPickup",
        "type": "any"
    },
    {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "any"
    },
    {
        "name": "hours",
        "baseName": "hours",
        "type": "any"
    }
];
//# sourceMappingURL=wTOrderingSettings.js.map