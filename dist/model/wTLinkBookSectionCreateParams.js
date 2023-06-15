"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTLinkBookSectionCreateParams = void 0;
class WTLinkBookSectionCreateParams {
    static getAttributeTypeMap() {
        return WTLinkBookSectionCreateParams.attributeTypeMap;
    }
}
WTLinkBookSectionCreateParams.discriminator = undefined;
WTLinkBookSectionCreateParams.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    }
];
exports.WTLinkBookSectionCreateParams = WTLinkBookSectionCreateParams;
//# sourceMappingURL=wTLinkBookSectionCreateParams.js.map