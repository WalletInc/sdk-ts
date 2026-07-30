"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTBrandingFooterLink = void 0;
class WTBrandingFooterLink extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTBrandingFooterLink.attributeTypeMap);
    }
}
exports.WTBrandingFooterLink = WTBrandingFooterLink;
WTBrandingFooterLink.discriminator = undefined;
WTBrandingFooterLink.attributeTypeMap = [
    {
        "name": "label",
        "baseName": "label",
        "type": "any"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "any"
    }
];
//# sourceMappingURL=wTBrandingFooterLink.js.map