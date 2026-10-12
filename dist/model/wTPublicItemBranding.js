"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPublicItemBranding = void 0;
class WTPublicItemBranding extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPublicItemBranding.attributeTypeMap);
    }
}
exports.WTPublicItemBranding = WTPublicItemBranding;
WTPublicItemBranding.discriminator = undefined;
WTPublicItemBranding.attributeTypeMap = [
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
        "name": "headerImageURL",
        "baseName": "headerImageURL",
        "type": "string"
    }
];
//# sourceMappingURL=wTPublicItemBranding.js.map