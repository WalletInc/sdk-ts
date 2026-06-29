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
        "type": "any"
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
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=tcpa.js.map