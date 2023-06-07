"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTProductUpdateParams = void 0;
class WTProductUpdateParams {
    static getAttributeTypeMap() {
        return WTProductUpdateParams.attributeTypeMap;
    }
}
WTProductUpdateParams.discriminator = undefined;
WTProductUpdateParams.attributeTypeMap = [
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
exports.WTProductUpdateParams = WTProductUpdateParams;
//# sourceMappingURL=wTProductUpdateParams.js.map