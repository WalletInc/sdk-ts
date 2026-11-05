"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tcpa = void 0;
class Tcpa extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Tcpa.attributeTypeMap);
    }
}
exports.Tcpa = Tcpa;
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
//# sourceMappingURL=tcpa.js.map