"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSubscriber = void 0;
class EmailSubscriber {
    static getAttributeTypeMap() {
        return EmailSubscriber.attributeTypeMap;
    }
}
exports.EmailSubscriber = EmailSubscriber;
EmailSubscriber.discriminator = undefined;
EmailSubscriber.attributeTypeMap = [
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "emailAddress",
        "baseName": "emailAddress",
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
//# sourceMappingURL=emailSubscriber.js.map