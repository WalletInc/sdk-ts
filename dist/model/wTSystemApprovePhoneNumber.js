"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSystemApprovePhoneNumber = void 0;
class WTSystemApprovePhoneNumber {
    static getAttributeTypeMap() {
        return WTSystemApprovePhoneNumber.attributeTypeMap;
    }
}
WTSystemApprovePhoneNumber.discriminator = undefined;
WTSystemApprovePhoneNumber.attributeTypeMap = [
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
    }
];
exports.WTSystemApprovePhoneNumber = WTSystemApprovePhoneNumber;
//# sourceMappingURL=wTSystemApprovePhoneNumber.js.map