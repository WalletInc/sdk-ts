"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPlanAnnual = void 0;
class SubscriptionPlanAnnual {
    static getAttributeTypeMap() {
        return SubscriptionPlanAnnual.attributeTypeMap;
    }
}
exports.SubscriptionPlanAnnual = SubscriptionPlanAnnual;
SubscriptionPlanAnnual.discriminator = undefined;
SubscriptionPlanAnnual.attributeTypeMap = [
    {
        "name": "price",
        "baseName": "price",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    }
];
//# sourceMappingURL=subscriptionPlanAnnual.js.map