"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsSubscriber = void 0;
class SmsSubscriber {
    static getAttributeTypeMap() {
        return SmsSubscriber.attributeTypeMap;
    }
}
exports.SmsSubscriber = SmsSubscriber;
SmsSubscriber.discriminator = undefined;
SmsSubscriber.attributeTypeMap = [
    {
        "name": "mobileNumber",
        "baseName": "mobileNumber",
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
//# sourceMappingURL=smsSubscriber.js.map