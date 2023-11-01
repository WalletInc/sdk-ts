"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMerchantUpdatePointsOfContact = void 0;
class WTMerchantUpdatePointsOfContact {
    static getAttributeTypeMap() {
        return WTMerchantUpdatePointsOfContact.attributeTypeMap;
    }
}
exports.WTMerchantUpdatePointsOfContact = WTMerchantUpdatePointsOfContact;
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
//# sourceMappingURL=wTMerchantUpdatePointsOfContact.js.map