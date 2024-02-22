"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTAuthenticationResetPassword {
    static getAttributeTypeMap() {
        return WTAuthenticationResetPassword.attributeTypeMap;
    }
}
WTAuthenticationResetPassword.discriminator = undefined;
WTAuthenticationResetPassword.attributeTypeMap = [
    {
        "name": "username",
        "baseName": "username",
        "type": "string"
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "string"
    },
    {
        "name": "token",
        "baseName": "token",
        "type": "string"
    }
];
exports.WTAuthenticationResetPassword = WTAuthenticationResetPassword;
//# sourceMappingURL=wTAuthenticationResetPassword.js.map