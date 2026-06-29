"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMerchantUpdate = void 0;
class WTMerchantUpdate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMerchantUpdate.attributeTypeMap);
    }
}
exports.WTMerchantUpdate = WTMerchantUpdate;
WTMerchantUpdate.discriminator = undefined;
WTMerchantUpdate.attributeTypeMap = [
    {
        "name": "companyName",
        "baseName": "companyName",
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
        "name": "country",
        "baseName": "country",
        "type": "any"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "any"
    },
    {
        "name": "zip",
        "baseName": "zip",
        "type": "any"
    },
    {
        "name": "currencyAbbreviation",
        "baseName": "currencyAbbreviation",
        "type": "any"
    }
];
//# sourceMappingURL=wTMerchantUpdate.js.map