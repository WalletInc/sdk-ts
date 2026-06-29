"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionProduct = void 0;
class SubscriptionProduct extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionProduct.attributeTypeMap);
    }
}
exports.SubscriptionProduct = SubscriptionProduct;
SubscriptionProduct.discriminator = undefined;
SubscriptionProduct.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "titleFull",
        "baseName": "titleFull",
        "type": "any"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "any"
    },
    {
        "name": "volume",
        "baseName": "volume",
        "type": "any"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "any"
    },
    {
        "name": "features",
        "baseName": "features",
        "type": "any"
    },
    {
        "name": "pages",
        "baseName": "pages",
        "type": "any"
    },
    {
        "name": "iconName",
        "baseName": "iconName",
        "type": "any"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "any"
    },
    {
        "name": "isHourly",
        "baseName": "isHourly",
        "type": "any"
    },
    {
        "name": "releaseStatus",
        "baseName": "releaseStatus",
        "type": "any"
    }
];
//# sourceMappingURL=subscriptionProduct.js.map