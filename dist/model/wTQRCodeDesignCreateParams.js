"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTQRCodeDesignCreateParams = void 0;
class WTQRCodeDesignCreateParams {
    static getAttributeTypeMap() {
        return WTQRCodeDesignCreateParams.attributeTypeMap;
    }
}
exports.WTQRCodeDesignCreateParams = WTQRCodeDesignCreateParams;
WTQRCodeDesignCreateParams.discriminator = undefined;
WTQRCodeDesignCreateParams.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=wTQRCodeDesignCreateParams.js.map