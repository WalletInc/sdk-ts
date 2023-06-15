"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTwilioRequestAuthyCode = void 0;
class WTTwilioRequestAuthyCode {
    static getAttributeTypeMap() {
        return WTTwilioRequestAuthyCode.attributeTypeMap;
    }
}
exports.WTTwilioRequestAuthyCode = WTTwilioRequestAuthyCode;
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
//# sourceMappingURL=wTTwilioRequestAuthyCode.js.map