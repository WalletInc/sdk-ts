"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTOrderingSettingsUpdateParams = void 0;
class WTOrderingSettingsUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTOrderingSettingsUpdateParams.attributeTypeMap);
    }
}
exports.WTOrderingSettingsUpdateParams = WTOrderingSettingsUpdateParams;
WTOrderingSettingsUpdateParams.discriminator = undefined;
WTOrderingSettingsUpdateParams.attributeTypeMap = [
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
        "type": "boolean"
    },
    {
        "name": "pausedReason",
        "baseName": "pausedReason",
        "type": "any"
    },
    {
        "name": "autoAccept",
        "baseName": "autoAccept",
        "type": "boolean"
    },
    {
        "name": "scheduledPickup",
        "baseName": "scheduledPickup",
        "type": "boolean"
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
//# sourceMappingURL=wTOrderingSettingsUpdateParams.js.map