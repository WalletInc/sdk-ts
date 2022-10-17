"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLinkBookCreateParams = void 0;
class WTLinkBookCreateParams {
    static getAttributeTypeMap() {
        return WTLinkBookCreateParams.attributeTypeMap;
    }
}
exports.WTLinkBookCreateParams = WTLinkBookCreateParams;
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
        "type": "string | number"
    }
];
//# sourceMappingURL=wTLinkBookCreateParams.js.map