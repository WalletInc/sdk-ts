"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptInListSubscriber = void 0;
class OptInListSubscriber {
    static getAttributeTypeMap() {
        return OptInListSubscriber.attributeTypeMap;
    }
}
exports.OptInListSubscriber = OptInListSubscriber;
OptInListSubscriber.discriminator = undefined;
OptInListSubscriber.attributeTypeMap = [
    {
        "name": "optInListID",
        "baseName": "optInListID",
        "type": "string"
    },
    {
        "name": "optInSourceID",
        "baseName": "optInSourceID",
        "type": "string"
    },
    {
        "name": "isSubscribed",
        "baseName": "isSubscribed",
        "type": "boolean"
    },
    {
        "name": "isPendingAge21Verification",
        "baseName": "isPendingAge21Verification",
        "type": "boolean"
    },
    {
        "name": "mobilePhoneNumber",
        "baseName": "mobilePhoneNumber",
        "type": "string"
    },
    {
        "name": "referringURL",
        "baseName": "referringURL",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
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
        "name": "optedStatus",
        "baseName": "optedStatus",
        "type": "boolean"
    },
    {
        "name": "source",
        "baseName": "Source",
        "type": "SSOptInSource"
    }
];
//# sourceMappingURL=optInListSubscriber.js.map