"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTPaymentDesign {
    static getAttributeTypeMap() {
        return WTPaymentDesign.attributeTypeMap;
    }
}
WTPaymentDesign.discriminator = undefined;
WTPaymentDesign.attributeTypeMap = [
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
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "WTWalletPageViewId"
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
exports.WTPaymentDesign = WTPaymentDesign;
//# sourceMappingURL=wTPaymentDesign.js.map