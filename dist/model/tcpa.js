"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tcpa {
    static getAttributeTypeMap() {
        return Tcpa.attributeTypeMap;
    }
}
Tcpa.discriminator = undefined;
Tcpa.attributeTypeMap = [
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
        "type": "WTWalletPageViewId"
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
exports.Tcpa = Tcpa;
//# sourceMappingURL=tcpa.js.map