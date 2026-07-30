"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPublicBranding = void 0;
class WTPublicBranding extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPublicBranding.attributeTypeMap);
    }
}
exports.WTPublicBranding = WTPublicBranding;
WTPublicBranding.discriminator = undefined;
WTPublicBranding.attributeTypeMap = [
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "headerBackgroundColor",
        "baseName": "headerBackgroundColor",
        "type": "string"
    },
    {
        "name": "mobileAppIconURL",
        "baseName": "mobileAppIconURL",
        "type": "string"
    },
    {
        "name": "showWalletCredit",
        "baseName": "showWalletCredit",
        "type": "boolean"
    },
    {
        "name": "loginLogoURL",
        "baseName": "loginLogoURL",
        "type": "string"
    },
    {
        "name": "loginPanelImageURL",
        "baseName": "loginPanelImageURL",
        "type": "string"
    },
    {
        "name": "loginHeadline",
        "baseName": "loginHeadline",
        "type": "string"
    },
    {
        "name": "loginSubcopy",
        "baseName": "loginSubcopy",
        "type": "string"
    },
    {
        "name": "loginBackgroundColor",
        "baseName": "loginBackgroundColor",
        "type": "string"
    },
    {
        "name": "loginBackgroundImageURL",
        "baseName": "loginBackgroundImageURL",
        "type": "string"
    },
    {
        "name": "registerURL",
        "baseName": "registerURL",
        "type": "string"
    },
    {
        "name": "loginFooterLinks",
        "baseName": "loginFooterLinks",
        "type": "any"
    },
    {
        "name": "desktopFrameLogoURL",
        "baseName": "desktopFrameLogoURL",
        "type": "string"
    },
    {
        "name": "desktopFrameBackgroundColor",
        "baseName": "desktopFrameBackgroundColor",
        "type": "string"
    },
    {
        "name": "desktopFrameBackgroundImageURL",
        "baseName": "desktopFrameBackgroundImageURL",
        "type": "string"
    },
    {
        "name": "desktopFrameByline",
        "baseName": "desktopFrameByline",
        "type": "string"
    }
];
//# sourceMappingURL=wTPublicBranding.js.map