"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptInListSubscriber = void 0;
class OptInListSubscriber extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OptInListSubscriber.attributeTypeMap);
    }
}
exports.OptInListSubscriber = OptInListSubscriber;
OptInListSubscriber.discriminator = undefined;
OptInListSubscriber.attributeTypeMap = [
    {
        "name": "callerName",
        "baseName": "callerName",
        "type": "any"
    },
    {
        "name": "callerType",
        "baseName": "callerType",
        "type": "any"
    },
    {
        "name": "optInListID",
        "baseName": "optInListID",
        "type": "string"
    },
    {
        "name": "optInSourceID",
        "baseName": "optInSourceID",
        "type": "OptInListSubscriberOptInSourceID"
    },
    {
        "name": "isSubscribed",
        "baseName": "isSubscribed",
        "type": "any"
    },
    {
        "name": "isPendingAge21Verification",
        "baseName": "isPendingAge21Verification",
        "type": "any"
    },
    {
        "name": "mobilePhoneNumber",
        "baseName": "mobilePhoneNumber",
        "type": "any"
    },
    {
        "name": "referringURL",
        "baseName": "referringURL",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
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
        "name": "optedStatus",
        "baseName": "optedStatus",
        "type": "any"
    },
    {
        "name": "source",
        "baseName": "Source",
        "type": "SSOptInSource"
    }
];
//# sourceMappingURL=optInListSubscriber.js.map