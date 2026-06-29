"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTwilioRequestAuthyCode = void 0;
class WTTwilioRequestAuthyCode extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTwilioRequestAuthyCode.attributeTypeMap);
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
        "type": "any"
    }
];
//# sourceMappingURL=wTTwilioRequestAuthyCode.js.map