"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationForgotPassword = void 0;
class WTAuthenticationForgotPassword extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAuthenticationForgotPassword.attributeTypeMap);
    }
}
exports.WTAuthenticationForgotPassword = WTAuthenticationForgotPassword;
WTAuthenticationForgotPassword.discriminator = undefined;
WTAuthenticationForgotPassword.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    }
];
//# sourceMappingURL=wTAuthenticationForgotPassword.js.map