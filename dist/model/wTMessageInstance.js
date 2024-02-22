"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTMessageInstance {
    static getAttributeTypeMap() {
        return WTMessageInstance.attributeTypeMap;
    }
}
WTMessageInstance.discriminator = undefined;
WTMessageInstance.attributeTypeMap = [
    {
        "name": "subresourceUris",
        "baseName": "subresourceUris",
        "type": "object"
    },
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string"
    },
    {
        "name": "priceUnit",
        "baseName": "priceUnit",
        "type": "string"
    },
    {
        "name": "errorCode",
        "baseName": "errorCode",
        "type": "number"
    },
    {
        "name": "dateCreated",
        "baseName": "dateCreated",
        "type": "Date"
    },
    {
        "name": "dateSent",
        "baseName": "dateSent",
        "type": "Date"
    },
    {
        "name": "sid",
        "baseName": "sid",
        "type": "string"
    },
    {
        "name": "messagingServiceSid",
        "baseName": "messagingServiceSid",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "MessageStatus"
    },
    {
        "name": "numMedia",
        "baseName": "numMedia",
        "type": "string"
    },
    {
        "name": "accountSid",
        "baseName": "accountSid",
        "type": "string"
    },
    {
        "name": "uri",
        "baseName": "uri",
        "type": "string"
    },
    {
        "name": "errorMessage",
        "baseName": "errorMessage",
        "type": "string"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string"
    },
    {
        "name": "dateUpdated",
        "baseName": "dateUpdated",
        "type": "Date"
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "string"
    },
    {
        "name": "from",
        "baseName": "from",
        "type": "string"
    },
    {
        "name": "direction",
        "baseName": "direction",
        "type": "MessageDirection"
    },
    {
        "name": "numSegments",
        "baseName": "numSegments",
        "type": "string"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    }
];
exports.WTMessageInstance = WTMessageInstance;
//# sourceMappingURL=wTMessageInstance.js.map