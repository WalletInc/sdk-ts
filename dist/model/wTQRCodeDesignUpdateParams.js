"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTQRCodeDesignUpdateParams = void 0;
class WTQRCodeDesignUpdateParams {
    static getAttributeTypeMap() {
        return WTQRCodeDesignUpdateParams.attributeTypeMap;
    }
}
WTQRCodeDesignUpdateParams.discriminator = undefined;
WTQRCodeDesignUpdateParams.attributeTypeMap = [
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
    }
];
exports.WTQRCodeDesignUpdateParams = WTQRCodeDesignUpdateParams;
//# sourceMappingURL=wTQRCodeDesignUpdateParams.js.map