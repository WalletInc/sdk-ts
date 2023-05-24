"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLinkBookUpdateParams = void 0;
class WTLinkBookUpdateParams {
    static getAttributeTypeMap() {
        return WTLinkBookUpdateParams.attributeTypeMap;
    }
}
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
        "type": "string | number"
    }
];
exports.WTLinkBookUpdateParams = WTLinkBookUpdateParams;
//# sourceMappingURL=wTLinkBookUpdateParams.js.map