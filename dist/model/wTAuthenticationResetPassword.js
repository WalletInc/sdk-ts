"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationResetPassword = void 0;
class WTAuthenticationResetPassword extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAuthenticationResetPassword.attributeTypeMap);
    }
}
exports.WTAuthenticationResetPassword = WTAuthenticationResetPassword;
WTAuthenticationResetPassword.discriminator = undefined;
WTAuthenticationResetPassword.attributeTypeMap = [
    {
        "name": "username",
        "baseName": "username",
        "type": "any"
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "any"
    },
    {
        "name": "token",
        "baseName": "token",
        "type": "any"
    }
];
//# sourceMappingURL=wTAuthenticationResetPassword.js.map