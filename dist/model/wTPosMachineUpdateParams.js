"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPosMachineUpdateParams = void 0;
class WTPosMachineUpdateParams {
    static getAttributeTypeMap() {
        return WTPosMachineUpdateParams.attributeTypeMap;
    }
}
exports.WTPosMachineUpdateParams = WTPosMachineUpdateParams;
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
//# sourceMappingURL=wTPosMachineUpdateParams.js.map