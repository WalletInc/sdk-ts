"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTBillingSetIndustry = void 0;
class WTBillingSetIndustry extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTBillingSetIndustry.attributeTypeMap);
    }
}
exports.WTBillingSetIndustry = WTBillingSetIndustry;
WTBillingSetIndustry.discriminator = undefined;
WTBillingSetIndustry.attributeTypeMap = [
    {
        "name": "industryID",
        "baseName": "industryID",
        "type": "any"
    }
];
//# sourceMappingURL=wTBillingSetIndustry.js.map