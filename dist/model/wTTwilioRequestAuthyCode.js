"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTwilioRequestAuthyCode = void 0;
class WTTwilioRequestAuthyCode {
    static getAttributeTypeMap() {
        return WTTwilioRequestAuthyCode.attributeTypeMap;
    }
}
WTTwilioRequestAuthyCode.discriminator = undefined;
WTTwilioRequestAuthyCode.attributeTypeMap = [
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    }
];
exports.WTTwilioRequestAuthyCode = WTTwilioRequestAuthyCode;
//# sourceMappingURL=wTTwilioRequestAuthyCode.js.map