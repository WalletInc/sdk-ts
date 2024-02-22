"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationSSOLoginForDiscourse = void 0;
class WTAuthenticationSSOLoginForDiscourse {
    static getAttributeTypeMap() {
        return WTAuthenticationSSOLoginForDiscourse.attributeTypeMap;
    }
}
exports.WTAuthenticationSSOLoginForDiscourse = WTAuthenticationSSOLoginForDiscourse;
WTAuthenticationSSOLoginForDiscourse.discriminator = undefined;
WTAuthenticationSSOLoginForDiscourse.attributeTypeMap = [
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