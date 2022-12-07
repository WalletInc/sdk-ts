"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationResetPassword = void 0;
class WTAuthenticationResetPassword {
    static getAttributeTypeMap() {
        return WTAuthenticationResetPassword.attributeTypeMap;
    }
}
exports.WTAuthenticationResetPassword = WTAuthenticationResetPassword;
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
//# sourceMappingURL=wTAuthenticationResetPassword.js.map