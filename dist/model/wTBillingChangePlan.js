"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTBillingChangePlan = void 0;
class WTBillingChangePlan extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTBillingChangePlan.attributeTypeMap);
    }
}
exports.WTBillingChangePlan = WTBillingChangePlan;
WTBillingChangePlan.discriminator = undefined;
WTBillingChangePlan.attributeTypeMap = [
    {
        "name": "planName",
        "baseName": "planName",
        "type": "any"
    }
];
//# sourceMappingURL=wTBillingChangePlan.js.map