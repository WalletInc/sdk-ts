"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationRequestResetPassword = void 0;
class WTAuthenticationRequestResetPassword extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAuthenticationRequestResetPassword.attributeTypeMap);
    }
}
exports.WTAuthenticationRequestResetPassword = WTAuthenticationRequestResetPassword;
WTAuthenticationRequestResetPassword.discriminator = undefined;
WTAuthenticationRequestResetPassword.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    }
];
//# sourceMappingURL=wTAuthenticationRequestResetPassword.js.map