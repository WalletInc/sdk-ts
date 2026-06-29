"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchDomainsByIndustry200Response = void 0;
class FetchDomainsByIndustry200Response {
    static getAttributeTypeMap() {
        return FetchDomainsByIndustry200Response.attributeTypeMap;
    }
}
exports.FetchDomainsByIndustry200Response = FetchDomainsByIndustry200Response;
FetchDomainsByIndustry200Response.discriminator = undefined;
FetchDomainsByIndustry200Response.attributeTypeMap = [
    {
        "name": "entertainment",
        "baseName": "entertainment",
        "type": "Array<any>"
    },
    {
        "name": "grocery",
        "baseName": "grocery",
        "type": "any"
    },
    {
        "name": "service",
        "baseName": "service",
        "type": "any"
    },
    {
        "name": "casino",
        "baseName": "casino",
        "type": "any"
    },
    {
        "name": "hospitality",
        "baseName": "hospitality",
        "type": "any"
    },
    {
        "name": "food",
        "baseName": "food",
        "type": "any"
    },
    {
        "name": "retail",
        "baseName": "retail",
        "type": "any"
    }
];
//# sourceMappingURL=fetchDomainsByIndustry200Response.js.map