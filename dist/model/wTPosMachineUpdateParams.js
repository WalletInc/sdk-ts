"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPosMachineUpdateParams = void 0;
class WTPosMachineUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPosMachineUpdateParams.attributeTypeMap);
    }
}
exports.WTPosMachineUpdateParams = WTPosMachineUpdateParams;
WTPosMachineUpdateParams.discriminator = undefined;
WTPosMachineUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTPosMachineUpdateParams.js.map