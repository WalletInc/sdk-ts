"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAutoResponderCreateParams = void 0;
class WTAutoResponderCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAutoResponderCreateParams.attributeTypeMap);
    }
}
exports.WTAutoResponderCreateParams = WTAutoResponderCreateParams;
WTAutoResponderCreateParams.discriminator = undefined;
WTAutoResponderCreateParams.attributeTypeMap = [
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
    },
    {
        "name": "keyword",
        "baseName": "keyword",
        "type": "any"
    },
    {
        "name": "responseBody",
        "baseName": "responseBody",
        "type": "any"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "any"
    }
];
//# sourceMappingURL=wTAutoResponderCreateParams.js.map