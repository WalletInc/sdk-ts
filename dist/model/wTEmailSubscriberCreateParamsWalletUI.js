"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmailSubscriberCreateParamsWalletUI = void 0;
class WTEmailSubscriberCreateParamsWalletUI extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmailSubscriberCreateParamsWalletUI.attributeTypeMap);
    }
}
exports.WTEmailSubscriberCreateParamsWalletUI = WTEmailSubscriberCreateParamsWalletUI;
WTEmailSubscriberCreateParamsWalletUI.discriminator = undefined;
WTEmailSubscriberCreateParamsWalletUI.attributeTypeMap = [
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "any"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "any"
    },
    {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=wTEmailSubscriberCreateParamsWalletUI.js.map