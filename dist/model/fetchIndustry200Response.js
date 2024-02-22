"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FetchIndustry200Response {
    static getAttributeTypeMap() {
        return FetchIndustry200Response.attributeTypeMap;
    }
}
FetchIndustry200Response.discriminator = undefined;
FetchIndustry200Response.attributeTypeMap = [
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
exports.FetchIndustry200Response = FetchIndustry200Response;
//# sourceMappingURL=fetchIndustry200Response.js.map