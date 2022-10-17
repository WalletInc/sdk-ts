"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTwilioVerifyAuthyCode = void 0;
class WTTwilioVerifyAuthyCode {
    static getAttributeTypeMap() {
        return WTTwilioVerifyAuthyCode.attributeTypeMap;
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
        "type": "string"
    },
    {
        "name": "otp",
        "baseName": "otp",
        "type": "string"
    }
];
//# sourceMappingURL=wTTwilioVerifyAuthyCode.js.map