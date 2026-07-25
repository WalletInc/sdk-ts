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
        "type": "any"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "slug",
        "baseName": "slug",
        "type": "any"
    },
    {
        "name": "maxVolume",
        "baseName": "maxVolume",
        "type": "any"
    },
    {
        "name": "measurement",
        "baseName": "measurement",
        "type": "any"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "any"
    },
    {
        "name": "currentVolume",
        "baseName": "currentVolume",
        "type": "any"
    },
    {
        "name": "isExceeded",
        "baseName": "isExceeded",
        "type": "any"
    },
    {
        "name": "isInUse",
        "baseName": "isInUse",
        "type": "any"
    },
    {
        "name": "isEnabled",
        "baseName": "isEnabled",
        "type": "any"
    }
];
//# sourceMappingURL=subscriptionFeature.js.map