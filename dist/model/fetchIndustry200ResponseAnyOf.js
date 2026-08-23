"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchIndustry200ResponseAnyOf = void 0;
class FetchIndustry200ResponseAnyOf {
    static getAttributeTypeMap() {
        return FetchIndustry200ResponseAnyOf.attributeTypeMap;
    }
}
exports.FetchIndustry200ResponseAnyOf = FetchIndustry200ResponseAnyOf;
FetchIndustry200ResponseAnyOf.discriminator = undefined;
FetchIndustry200ResponseAnyOf.attributeTypeMap = [
    {
        "name": "plans",
        "baseName": "plans",
        "type": "Array<SubscriptionPlan>"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "icon",
        "baseName": "icon",
        "type": "string"
    },
    {
        "name": "sortNumber",
        "baseName": "sortNumber",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    }
];
//# sourceMappingURL=fetchIndustry200ResponseAnyOf.js.map