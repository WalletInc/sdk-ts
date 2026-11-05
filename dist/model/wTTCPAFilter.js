"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTCPAFilter = void 0;
class WTTCPAFilter extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTCPAFilter.attributeTypeMap);
    }
}
exports.WTTCPAFilter = WTTCPAFilter;
WTTCPAFilter.discriminator = undefined;
WTTCPAFilter.attributeTypeMap = [
    {
        "name": "cellPhone",
        "baseName": "cellPhone",
        "type": "string"
    },
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    }
];
//# sourceMappingURL=wTTCPAFilter.js.map