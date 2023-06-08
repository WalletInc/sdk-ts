"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTBillingChangePlan = void 0;
class WTBillingChangePlan {
    static getAttributeTypeMap() {
        return WTBillingChangePlan.attributeTypeMap;
    }
}
WTBillingChangePlan.discriminator = undefined;
WTBillingChangePlan.attributeTypeMap = [
    {
        "name": "planName",
        "baseName": "planName",
        "type": "string"
    }
];
exports.WTBillingChangePlan = WTBillingChangePlan;
//# sourceMappingURL=wTBillingChangePlan.js.map