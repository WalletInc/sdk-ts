"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCustomerSearchByPhoneNumber = void 0;
class WTCustomerSearchByPhoneNumber extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCustomerSearchByPhoneNumber.attributeTypeMap);
    }
}
exports.WTCustomerSearchByPhoneNumber = WTCustomerSearchByPhoneNumber;
WTCustomerSearchByPhoneNumber.discriminator = undefined;
WTCustomerSearchByPhoneNumber.attributeTypeMap = [
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "any"
    }
];
//# sourceMappingURL=wTCustomerSearchByPhoneNumber.js.map