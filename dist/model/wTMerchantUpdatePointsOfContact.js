"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTMerchantUpdatePointsOfContact {
    static getAttributeTypeMap() {
        return WTMerchantUpdatePointsOfContact.attributeTypeMap;
    }
}
WTMerchantUpdatePointsOfContact.discriminator = undefined;
WTMerchantUpdatePointsOfContact.attributeTypeMap = [
    {
        "name": "billingEmployeeID",
        "baseName": "billingEmployeeID",
        "type": "string"
    },
    {
        "name": "marketingEmployeeID",
        "baseName": "marketingEmployeeID",
        "type": "string"
    },
    {
        "name": "technicalEmployeeID",
        "baseName": "technicalEmployeeID",
        "type": "string"
    },
    {
        "name": "customerServiceEmployeeID",
        "baseName": "customerServiceEmployeeID",
        "type": "string"
    }
];
exports.WTMerchantUpdatePointsOfContact = WTMerchantUpdatePointsOfContact;
//# sourceMappingURL=wTMerchantUpdatePointsOfContact.js.map