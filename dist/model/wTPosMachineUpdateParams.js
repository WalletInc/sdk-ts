"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTPosMachineUpdateParams {
    static getAttributeTypeMap() {
        return WTPosMachineUpdateParams.attributeTypeMap;
    }
}
WTPosMachineUpdateParams.discriminator = undefined;
WTPosMachineUpdateParams.attributeTypeMap = [
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "string"
    },
    {
        "name": "registerName",
        "baseName": "registerName",
        "type": "string"
    },
    {
        "name": "outletName",
        "baseName": "outletName",
        "type": "string"
    },
    {
        "name": "outletNumber",
        "baseName": "outletNumber",
        "type": "number"
    },
    {
        "name": "profitCenter",
        "baseName": "profitCenter",
        "type": "string"
    }
];
exports.WTPosMachineUpdateParams = WTPosMachineUpdateParams;
//# sourceMappingURL=wTPosMachineUpdateParams.js.map