"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSMSAcquirePhoneNumber = void 0;
class WTSMSAcquirePhoneNumber extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSMSAcquirePhoneNumber.attributeTypeMap);
    }
}
exports.WTSMSAcquirePhoneNumber = WTSMSAcquirePhoneNumber;
WTSMSAcquirePhoneNumber.discriminator = undefined;
WTSMSAcquirePhoneNumber.attributeTypeMap = [
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "any"
    }
];
//# sourceMappingURL=wTSMSAcquirePhoneNumber.js.map