"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTQuickLinkUpdateParams = void 0;
class WTQuickLinkUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTQuickLinkUpdateParams.attributeTypeMap);
    }
}
exports.WTQuickLinkUpdateParams = WTQuickLinkUpdateParams;
WTQuickLinkUpdateParams.discriminator = undefined;
WTQuickLinkUpdateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "icon",
        "baseName": "icon",
        "type": "any"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "linkBookSectionID",
        "baseName": "linkBookSectionID",
        "type": "WTQuickLinkLinkBookSectionID"
    }
];
//# sourceMappingURL=wTQuickLinkUpdateParams.js.map