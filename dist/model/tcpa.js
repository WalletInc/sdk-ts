"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tcpa = void 0;
class Tcpa {
    static getAttributeTypeMap() {
        return Tcpa.attributeTypeMap;
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
        "type": "string"
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