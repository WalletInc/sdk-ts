"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Performance = void 0;
class Performance {
    static getAttributeTypeMap() {
        return Performance.attributeTypeMap;
    }
}
exports.Performance = Performance;
Performance.discriminator = undefined;
Performance.attributeTypeMap = [
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "SaveTicketSettingsRequestPaymentDesignID"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=performance.js.map