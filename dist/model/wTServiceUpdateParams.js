"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTServiceUpdateParams = void 0;
class WTServiceUpdateParams {
    static getAttributeTypeMap() {
        return WTServiceUpdateParams.attributeTypeMap;
    }
}
exports.WTServiceUpdateParams = WTServiceUpdateParams;
WTServiceUpdateParams.discriminator = undefined;
WTServiceUpdateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "displayValue",
        "baseName": "displayValue",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "string"
    }
];
//# sourceMappingURL=wTServiceUpdateParams.js.map