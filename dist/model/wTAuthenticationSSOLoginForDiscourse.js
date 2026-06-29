"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationSSOLoginForDiscourse = void 0;
class WTAuthenticationSSOLoginForDiscourse extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAuthenticationSSOLoginForDiscourse.attributeTypeMap);
    }
}
exports.WTAuthenticationSSOLoginForDiscourse = WTAuthenticationSSOLoginForDiscourse;
WTAuthenticationSSOLoginForDiscourse.discriminator = undefined;
WTAuthenticationSSOLoginForDiscourse.attributeTypeMap = [
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
        "name": "ssoPayload",
        "baseName": "ssoPayload",
        "type": "string"
    },
    {
        "name": "sigPayload",
        "baseName": "sigPayload",
        "type": "string"
    }
];
//# sourceMappingURL=wTAuthenticationSSOLoginForDiscourse.js.map