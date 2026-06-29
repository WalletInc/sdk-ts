"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchIndustry200Response = void 0;
class FetchIndustry200Response {
    static getAttributeTypeMap() {
        return FetchIndustry200Response.attributeTypeMap;
    }
}
exports.FetchIndustry200Response = FetchIndustry200Response;
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
//# sourceMappingURL=fetchIndustry200Response.js.map