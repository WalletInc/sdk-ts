"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPlan = void 0;
class SubscriptionPlan extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionPlan.attributeTypeMap);
    }
}
exports.SubscriptionPlan = SubscriptionPlan;
SubscriptionPlan.discriminator = undefined;
SubscriptionPlan.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "any"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "any"
    },
    {
        "name": "nickname",
        "baseName": "nickname",
        "type": "any"
    },
    {
        "name": "examples",
        "baseName": "examples",
        "type": "any"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "any"
    },
    {
        "name": "allPages",
        "baseName": "allPages",
        "type": "any"
    }
];
//# sourceMappingURL=subscriptionPlan.js.map