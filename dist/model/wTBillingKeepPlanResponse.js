"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTBillingKeepPlanResponse = void 0;
class WTBillingKeepPlanResponse extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTBillingKeepPlanResponse.attributeTypeMap);
    }
}
exports.WTBillingKeepPlanResponse = WTBillingKeepPlanResponse;
WTBillingKeepPlanResponse.discriminator = undefined;
WTBillingKeepPlanResponse.attributeTypeMap = [
    {
        "name": "isDowngradeCancelled",
        "baseName": "isDowngradeCancelled",
        "type": "any"
    },
    {
        "name": "planName",
        "baseName": "planName",
        "type": "any"
    },
    {
        "name": "scheduledDowngradeAt",
        "baseName": "scheduledDowngradeAt",
        "type": "any"
    }
];
//# sourceMappingURL=wTBillingKeepPlanResponse.js.map