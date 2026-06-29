"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionFeature = void 0;
class SubscriptionFeature extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionFeature.attributeTypeMap);
    }
}
exports.SubscriptionFeature = SubscriptionFeature;
SubscriptionFeature.discriminator = undefined;
SubscriptionFeature.attributeTypeMap = [
    {
        "name": "sortNum",
        "baseName": "sortNum",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "maxVolume",
        "baseName": "maxVolume",
        "type": "string"
    },
    {
        "name": "measurement",
        "baseName": "measurement",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "currentVolume",
        "baseName": "currentVolume",
        "type": "string"
    },
    {
        "name": "isExceeded",
        "baseName": "isExceeded",
        "type": "boolean"
    },
    {
        "name": "isInUse",
        "baseName": "isInUse",
        "type": "boolean"
    },
    {
        "name": "isEnabled",
        "baseName": "isEnabled",
        "type": "boolean"
    }
];
//# sourceMappingURL=subscriptionFeature.js.map