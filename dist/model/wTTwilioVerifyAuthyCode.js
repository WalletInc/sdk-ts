"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTTwilioVerifyAuthyCode {
    static getAttributeTypeMap() {
        return WTTwilioVerifyAuthyCode.attributeTypeMap;
    }
}
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
        "type": "string"
    },
    {
        "name": "otp",
        "baseName": "otp",
        "type": "string"
    }
];
exports.WTTwilioVerifyAuthyCode = WTTwilioVerifyAuthyCode;
//# sourceMappingURL=wTTwilioVerifyAuthyCode.js.map