"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPaymentDesignUpdateParams = void 0;
class WTPaymentDesignUpdateParams {
    static getAttributeTypeMap() {
        return WTPaymentDesignUpdateParams.attributeTypeMap;
    }
}
exports.WTPaymentDesignUpdateParams = WTPaymentDesignUpdateParams;
WTPaymentDesignUpdateParams.discriminator = undefined;
WTPaymentDesignUpdateParams.attributeTypeMap = [
    {
        "name": "borderColor",
        "baseName": "borderColor",
        "type": "string"
    },
    {
        "name": "borderStyleType",
        "baseName": "borderStyleType",
        "type": "PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType"
    },
    {
        "name": "borderSize",
        "baseName": "borderSize",
        "type": "string"
    },
    {
        "name": "borderRadius",
        "baseName": "borderRadius",
        "type": "number"
    },
    {
        "name": "fontColor",
        "baseName": "fontColor",
        "type": "string"
    },
    {
        "name": "fontType",
        "baseName": "fontType",
        "type": "string"
    },
    {
        "name": "abbreviation",
        "baseName": "abbreviation",
        "type": "string"
    },
    {
        "name": "acronym",
        "baseName": "acronym",
        "type": "string"
    },
    {
        "name": "icon",
        "baseName": "icon",
        "type": "string"
    },
    {
        "name": "designName",
        "baseName": "designName",
        "type": "string"
    },
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
    },
    {
        "name": "backgroundImageURL",
        "baseName": "backgroundImageURL",
        "type": "string"
    },
    {
        "name": "companyLogoURL",
        "baseName": "companyLogoURL",
        "type": "string"
    }
];
//# sourceMappingURL=wTPaymentDesignUpdateParams.js.map