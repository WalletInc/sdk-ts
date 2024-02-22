"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLinkBookUpdateParams = void 0;
class WTLinkBookUpdateParams {
    static getAttributeTypeMap() {
        return WTLinkBookUpdateParams.attributeTypeMap;
    }
}
exports.WTLinkBookUpdateParams = WTLinkBookUpdateParams;
WTLinkBookUpdateParams.discriminator = undefined;
WTLinkBookUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTLinkBookUpdateParams.js.map