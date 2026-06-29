"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPerformanceUpdateParams = void 0;
class WTPerformanceUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPerformanceUpdateParams.attributeTypeMap);
    }
}
exports.WTPerformanceUpdateParams = WTPerformanceUpdateParams;
WTPerformanceUpdateParams.discriminator = undefined;
WTPerformanceUpdateParams.attributeTypeMap = [
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
        "type": "any"
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
        "type": "any"
    },
    {
        "name": "paymentDesignID",
        "baseName": "paymentDesignID",
        "type": "string"
    },
    {
        "name": "maxCompTickets",
        "baseName": "maxCompTickets",
        "type": "any"
    },
    {
        "name": "ticketExpirationDateTime",
        "baseName": "ticketExpirationDateTime",
        "type": "any"
    },
    {
        "name": "redemptionInstructions",
        "baseName": "redemptionInstructions",
        "type": "any"
    }
];
//# sourceMappingURL=wTPerformanceUpdateParams.js.map