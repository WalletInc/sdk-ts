"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTPerformanceCreateParams {
    static getAttributeTypeMap() {
        return WTPerformanceCreateParams.attributeTypeMap;
    }
}
WTPerformanceCreateParams.discriminator = undefined;
WTPerformanceCreateParams.attributeTypeMap = [
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
    },
    {
        "name": "maxCompTickets",
        "baseName": "maxCompTickets",
        "type": "number"
    },
    {
        "name": "ticketExpirationDateTime",
        "baseName": "ticketExpirationDateTime",
        "type": "Date"
    },
    {
        "name": "redemptionInstructions",
        "baseName": "redemptionInstructions",
        "type": "string"
    }
];
exports.WTPerformanceCreateParams = WTPerformanceCreateParams;
//# sourceMappingURL=wTPerformanceCreateParams.js.map