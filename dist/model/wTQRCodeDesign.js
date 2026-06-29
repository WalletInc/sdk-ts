"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTQRCodeDesign = void 0;
class WTQRCodeDesign extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTQRCodeDesign.attributeTypeMap);
    }
}
exports.WTQRCodeDesign = WTQRCodeDesign;
WTQRCodeDesign.discriminator = undefined;
WTQRCodeDesign.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "serializedJsonConfiguration",
        "baseName": "serializedJsonConfiguration",
        "type": "object"
    },
    {
        "name": "serializedJsonBorder",
        "baseName": "serializedJsonBorder",
        "type": "object"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "AmenityId"
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
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=wTQRCodeDesign.js.map