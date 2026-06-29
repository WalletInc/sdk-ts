"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTQuickLinkCreateParams = void 0;
class WTQuickLinkCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTQuickLinkCreateParams.attributeTypeMap);
    }
}
exports.WTQuickLinkCreateParams = WTQuickLinkCreateParams;
WTQuickLinkCreateParams.discriminator = undefined;
WTQuickLinkCreateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTQuickLinkCreateParams.js.map