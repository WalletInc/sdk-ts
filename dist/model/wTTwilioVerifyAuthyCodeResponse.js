"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTwilioVerifyAuthyCodeResponse = void 0;
class WTTwilioVerifyAuthyCodeResponse extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTwilioVerifyAuthyCodeResponse.attributeTypeMap);
    }
}
exports.WTTwilioVerifyAuthyCodeResponse = WTTwilioVerifyAuthyCodeResponse;
WTTwilioVerifyAuthyCodeResponse.discriminator = undefined;
WTTwilioVerifyAuthyCodeResponse.attributeTypeMap = [
    {
        "name": "success",
        "baseName": "success",
        "type": "boolean"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "token",
        "baseName": "token",
        "type": "string"
    },
    {
        "name": "chatUserID",
        "baseName": "chatUserID",
        "type": "string"
    }
];
//# sourceMappingURL=wTTwilioVerifyAuthyCodeResponse.js.map