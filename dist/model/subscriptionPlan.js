"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubscriptionPlan {
    static getAttributeTypeMap() {
        return SubscriptionPlan.attributeTypeMap;
    }
}
SubscriptionPlan.discriminator = undefined;
SubscriptionPlan.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "number"
    },
    {
        "name": "nickname",
        "baseName": "nickname",
        "type": "string"
    },
    {
        "name": "examples",
        "baseName": "examples",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<SubscriptionProduct>"
    },
    {
        "name": "allPages",
        "baseName": "allPages",
        "type": "Array<PortalPage>"
    }
];
exports.SubscriptionPlan = SubscriptionPlan;
//# sourceMappingURL=subscriptionPlan.js.map