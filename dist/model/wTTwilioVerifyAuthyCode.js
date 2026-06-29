"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTwilioVerifyAuthyCode = void 0;
class WTTwilioVerifyAuthyCode extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTwilioVerifyAuthyCode.attributeTypeMap);
    }
}
exports.WTTwilioVerifyAuthyCode = WTTwilioVerifyAuthyCode;
WTTwilioVerifyAuthyCode.discriminator = undefined;
WTTwilioVerifyAuthyCode.attributeTypeMap = [
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "any"
    },
    {
        "name": "otp",
        "baseName": "otp",
        "type": "any"
    }
];
//# sourceMappingURL=wTTwilioVerifyAuthyCode.js.map