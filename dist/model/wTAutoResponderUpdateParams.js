"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAutoResponderUpdateParams = void 0;
class WTAutoResponderUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAutoResponderUpdateParams.attributeTypeMap);
    }
}
exports.WTAutoResponderUpdateParams = WTAutoResponderUpdateParams;
WTAutoResponderUpdateParams.discriminator = undefined;
WTAutoResponderUpdateParams.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
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
//# sourceMappingURL=wTAutoResponderUpdateParams.js.map