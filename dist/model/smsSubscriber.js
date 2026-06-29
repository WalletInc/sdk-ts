"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsSubscriber = void 0;
class SmsSubscriber extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SmsSubscriber.attributeTypeMap);
    }
}
exports.SmsSubscriber = SmsSubscriber;
SmsSubscriber.discriminator = undefined;
SmsSubscriber.attributeTypeMap = [
    {
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "AmenityId"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=smsSubscriber.js.map