"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCodeDesign = void 0;
class QRCodeDesign {
    static getAttributeTypeMap() {
        return QRCodeDesign.attributeTypeMap;
    }
}
QRCodeDesign.discriminator = undefined;
QRCodeDesign.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "size",
        "baseName": "size",
        "type": "number"
    },
    {
        "name": "margin",
        "baseName": "margin",
        "type": "number"
    },
    {
        "name": "cornerRadius",
        "baseName": "cornerRadius",
        "type": "number"
    },
    {
        "name": "colorDarkHex",
        "baseName": "colorDarkHex",
        "type": "string"
    },
    {
        "name": "colorLightHex",
        "baseName": "colorLightHex",
        "type": "string"
    },
    {
        "name": "backgroundDimmingHex",
        "baseName": "backgroundDimmingHex",
        "type": "string"
    },
    {
        "name": "logoImageURL",
        "baseName": "logoImageURL",
        "type": "string"
    },
    {
        "name": "backgroundImageURL",
        "baseName": "backgroundImageURL",
        "type": "string"
    },
    {
        "name": "animatedGifBackgroundURL",
        "baseName": "animatedGifBackgroundURL",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
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
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
exports.QRCodeDesign = QRCodeDesign;
//# sourceMappingURL=qRCodeDesign.js.map