"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTQRCodeDesign {
    static getAttributeTypeMap() {
        return WTQRCodeDesign.attributeTypeMap;
    }
}
WTQRCodeDesign.discriminator = undefined;
WTQRCodeDesign.attributeTypeMap = [
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
        "name": "isMarginWhite",
        "baseName": "isMarginWhite",
        "type": "boolean"
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
        "type": "SaveTicketSettingsRequestPaymentDesignID"
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
exports.WTQRCodeDesign = WTQRCodeDesign;
//# sourceMappingURL=wTQRCodeDesign.js.map