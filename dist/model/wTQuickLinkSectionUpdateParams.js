"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTQuickLinkSectionUpdateParams = void 0;
class WTQuickLinkSectionUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTQuickLinkSectionUpdateParams.attributeTypeMap);
    }
}
exports.WTQuickLinkSectionUpdateParams = WTQuickLinkSectionUpdateParams;
WTQuickLinkSectionUpdateParams.discriminator = undefined;
WTQuickLinkSectionUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTQuickLinkSectionUpdateParams.js.map