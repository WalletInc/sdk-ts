"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTLinkBookCreateParams {
    static getAttributeTypeMap() {
        return WTLinkBookCreateParams.attributeTypeMap;
    }
}
WTLinkBookCreateParams.discriminator = undefined;
WTLinkBookCreateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "icon",
        "baseName": "icon",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "linkBookSectionID",
        "baseName": "linkBookSectionID",
        "type": "WTLinkBookLinkBookSectionID"
    }
];
exports.WTLinkBookCreateParams = WTLinkBookCreateParams;
//# sourceMappingURL=wTLinkBookCreateParams.js.map