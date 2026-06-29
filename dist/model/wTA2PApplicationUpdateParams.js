"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTA2PApplicationUpdateParams = void 0;
class WTA2PApplicationUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTA2PApplicationUpdateParams.attributeTypeMap);
    }
}
exports.WTA2PApplicationUpdateParams = WTA2PApplicationUpdateParams;
WTA2PApplicationUpdateParams.discriminator = undefined;
WTA2PApplicationUpdateParams.attributeTypeMap = [
    {
        "name": "businessName",
        "baseName": "businessName",
        "type": "any"
    },
    {
        "name": "businessType",
        "baseName": "businessType",
        "type": "BusinessType"
    },
    {
        "name": "businessClassification",
        "baseName": "businessClassification",
        "type": "BusinessClassification"
    },
    {
        "name": "businessIndustry",
        "baseName": "businessIndustry",
        "type": "BusinessIndustry"
    },
    {
        "name": "taxIDType",
        "baseName": "taxIDType",
        "type": "BusinessRegistrationIdentifier"
    },
    {
        "name": "taxID",
        "baseName": "taxID",
        "type": "any"
    },
    {
        "name": "websiteURL",
        "baseName": "websiteURL",
        "type": "any"
    },
    {
        "name": "socialMediaURL",
        "baseName": "socialMediaURL",
        "type": "any"
    },
    {
        "name": "regionsOfOperation",
        "baseName": "regionsOfOperation",
        "type": "any"
    },
    {
        "name": "stockExchange",
        "baseName": "stockExchange",
        "type": "BusinessStockExchanges"
    },
    {
        "name": "stockTicker",
        "baseName": "stockTicker",
        "type": "any"
    },
    {
        "name": "messagingVolumeHigh",
        "baseName": "messagingVolumeHigh",
        "type": "any"
    },
    {
        "name": "address1",
        "baseName": "address1",
        "type": "any"
    },
    {
        "name": "address2",
        "baseName": "address2",
        "type": "any"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "any"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "any"
    },
    {
        "name": "postalCode",
        "baseName": "postalCode",
        "type": "any"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "any"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "any"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "any"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "any"
    },
    {
        "name": "jobTitle",
        "baseName": "jobTitle",
        "type": "any"
    },
    {
        "name": "jobPosition",
        "baseName": "jobPosition",
        "type": "JobPosition"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "any"
    }
];
//# sourceMappingURL=wTA2PApplicationUpdateParams.js.map