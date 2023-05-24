"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPosMachineCreateParams = void 0;
class WTPosMachineCreateParams {
    static getAttributeTypeMap() {
        return WTPosMachineCreateParams.attributeTypeMap;
    }
}
WTPosMachineCreateParams.discriminator = undefined;
WTPosMachineCreateParams.attributeTypeMap = [
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
exports.WTPosMachineCreateParams = WTPosMachineCreateParams;
//# sourceMappingURL=wTPosMachineCreateParams.js.map