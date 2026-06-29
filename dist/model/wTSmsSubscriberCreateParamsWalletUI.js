"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSmsSubscriberCreateParamsWalletUI = void 0;
class WTSmsSubscriberCreateParamsWalletUI extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSmsSubscriberCreateParamsWalletUI.attributeTypeMap);
    }
}
exports.WTSmsSubscriberCreateParamsWalletUI = WTSmsSubscriberCreateParamsWalletUI;
WTSmsSubscriberCreateParamsWalletUI.discriminator = undefined;
WTSmsSubscriberCreateParamsWalletUI.attributeTypeMap = [
    {
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=wTSmsSubscriberCreateParamsWalletUI.js.map