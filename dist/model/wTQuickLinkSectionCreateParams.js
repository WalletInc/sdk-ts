"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTQuickLinkSectionCreateParams = void 0;
class WTQuickLinkSectionCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTQuickLinkSectionCreateParams.attributeTypeMap);
    }
}
exports.WTQuickLinkSectionCreateParams = WTQuickLinkSectionCreateParams;
WTQuickLinkSectionCreateParams.discriminator = undefined;
WTQuickLinkSectionCreateParams.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    }
];
//# sourceMappingURL=wTQuickLinkSectionCreateParams.js.map