"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionProduct = void 0;
class SubscriptionProduct {
    static getAttributeTypeMap() {
        return SubscriptionProduct.attributeTypeMap;
    }
}
exports.SubscriptionProduct = SubscriptionProduct;
SubscriptionProduct.discriminator = undefined;
SubscriptionProduct.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "titleFull",
        "baseName": "titleFull",
        "type": "string"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "string"
    },
    {
        "name": "volume",
        "baseName": "volume",
        "type": "number"
    },
    {
        "name": "features",
        "baseName": "features",
        "type": "Array<SubscriptionFeature>"
    },
    {
        "name": "pages",
        "baseName": "pages",
        "type": "Array<PortalPage>"
    },
    {
        "name": "iconName",
        "baseName": "iconName",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "isHourly",
        "baseName": "isHourly",
        "type": "boolean"
    },
    {
        "name": "releaseStatus",
        "baseName": "releaseStatus",
        "type": "string"
    }
];
//# sourceMappingURL=subscriptionProduct.js.map