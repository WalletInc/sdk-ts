"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCodeDesign = void 0;
class QRCodeDesign extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(QRCodeDesign.attributeTypeMap);
    }
}
exports.QRCodeDesign = QRCodeDesign;
QRCodeDesign.discriminator = undefined;
QRCodeDesign.attributeTypeMap = [
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
//# sourceMappingURL=qRCodeDesign.js.map