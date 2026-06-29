"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPosMachine = void 0;
class WTPosMachine extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPosMachine.attributeTypeMap);
    }
}
exports.WTPosMachine = WTPosMachine;
WTPosMachine.discriminator = undefined;
WTPosMachine.attributeTypeMap = [
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=wTPosMachine.js.map