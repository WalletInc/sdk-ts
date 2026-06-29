"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTCustomerSearchByMemberID = void 0;
class WTCustomerSearchByMemberID extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTCustomerSearchByMemberID.attributeTypeMap);
    }
}
exports.WTCustomerSearchByMemberID = WTCustomerSearchByMemberID;
WTCustomerSearchByMemberID.discriminator = undefined;
WTCustomerSearchByMemberID.attributeTypeMap = [
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "any"
    }
];
//# sourceMappingURL=wTCustomerSearchByMemberID.js.map