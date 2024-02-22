"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTAuthenticationSSOLoginForDiscourse {
    static getAttributeTypeMap() {
        return WTAuthenticationSSOLoginForDiscourse.attributeTypeMap;
    }
}
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
exports.WTAuthenticationSSOLoginForDiscourse = WTAuthenticationSSOLoginForDiscourse;
//# sourceMappingURL=wTAuthenticationSSOLoginForDiscourse.js.map