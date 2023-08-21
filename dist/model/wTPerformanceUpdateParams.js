"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPerformanceUpdateParams = void 0;
class WTPerformanceUpdateParams {
    static getAttributeTypeMap() {
        return WTPerformanceUpdateParams.attributeTypeMap;
    }
}
exports.WTPerformanceUpdateParams = WTPerformanceUpdateParams;
WTPerformanceUpdateParams.discriminator = undefined;
WTPerformanceUpdateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "startDateTime",
        "baseName": "startDateTime",
        "type": "Date"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "number"
    },
    {
        "name": "isSoldOut",
        "baseName": "isSoldOut",
        "type": "boolean"
    },
    {
        "name": "mediaURL",
        "baseName": "mediaURL",
        "type": "string"
    },
    {
        "name": "paymentDesignID",
        "baseName": "paymentDesignID",
        "type": "string"
    }
];
//# sourceMappingURL=wTPerformanceUpdateParams.js.map