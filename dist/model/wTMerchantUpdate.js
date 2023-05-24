"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMerchantUpdate = void 0;
class WTMerchantUpdate {
    static getAttributeTypeMap() {
        return WTMerchantUpdate.attributeTypeMap;
    }
}
WTMerchantUpdate.discriminator = undefined;
WTMerchantUpdate.attributeTypeMap = [
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "address1",
        "baseName": "address1",
        "type": "string"
    },
    {
        "name": "address2",
        "baseName": "address2",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    },
    {
        "name": "zip",
        "baseName": "zip",
        "type": "string"
    },
    {
        "name": "currencyAbbreviation",
        "baseName": "currencyAbbreviation",
        "type": "string"
    }
];
exports.WTMerchantUpdate = WTMerchantUpdate;
//# sourceMappingURL=wTMerchantUpdate.js.map