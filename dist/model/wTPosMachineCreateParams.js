"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPosMachineCreateParams = void 0;
class WTPosMachineCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPosMachineCreateParams.attributeTypeMap);
    }
}
exports.WTPosMachineCreateParams = WTPosMachineCreateParams;
WTPosMachineCreateParams.discriminator = undefined;
WTPosMachineCreateParams.attributeTypeMap = [
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "any"
    },
    {
        "name": "registerName",
        "baseName": "registerName",
        "type": "any"
    },
    {
        "name": "outletName",
        "baseName": "outletName",
        "type": "any"
    },
    {
        "name": "outletNumber",
        "baseName": "outletNumber",
        "type": "any"
    },
    {
        "name": "profitCenter",
        "baseName": "profitCenter",
        "type": "any"
    }
];
//# sourceMappingURL=wTPosMachineCreateParams.js.map