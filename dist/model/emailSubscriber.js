"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSubscriber = void 0;
class EmailSubscriber extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmailSubscriber.attributeTypeMap);
    }
}
exports.EmailSubscriber = EmailSubscriber;
EmailSubscriber.discriminator = undefined;
EmailSubscriber.attributeTypeMap = [
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "any"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "any"
    },
    {
        "name": "emailAddress",
        "baseName": "emailAddress",
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
//# sourceMappingURL=emailSubscriber.js.map