"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPlan = void 0;
class SubscriptionPlan {
    static getAttributeTypeMap() {
        return SubscriptionPlan.attributeTypeMap;
    }
}
exports.SubscriptionPlan = SubscriptionPlan;
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
//# sourceMappingURL=subscriptionPlan.js.map