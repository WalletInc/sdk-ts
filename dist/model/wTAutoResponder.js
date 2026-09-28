"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAutoResponder = void 0;
class WTAutoResponder extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAutoResponder.attributeTypeMap);
    }
}
exports.WTAutoResponder = WTAutoResponder;
WTAutoResponder.discriminator = undefined;
WTAutoResponder.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
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
        "name": "keywordCanonical",
        "baseName": "keywordCanonical",
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
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=wTAutoResponder.js.map