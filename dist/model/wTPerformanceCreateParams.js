"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPerformanceCreateParams = void 0;
class WTPerformanceCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPerformanceCreateParams.attributeTypeMap);
    }
}
exports.WTPerformanceCreateParams = WTPerformanceCreateParams;
WTPerformanceCreateParams.discriminator = undefined;
WTPerformanceCreateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "any"
    },
    {
        "name": "startDateTime",
        "baseName": "startDateTime",
        "type": "Date"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "any"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "any"
    },
    {
        "name": "orderNumber",
        "baseName": "orderNumber",
        "type": "any"
    },
    {
        "name": "isSoldOut",
        "baseName": "isSoldOut",
        "type": "any"
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
//# sourceMappingURL=wTPerformanceCreateParams.js.map