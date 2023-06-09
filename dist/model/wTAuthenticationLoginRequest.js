"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationLoginRequest = void 0;
class WTAuthenticationLoginRequest {
    static getAttributeTypeMap() {
        return WTAuthenticationLoginRequest.attributeTypeMap;
    }
}
WTAuthenticationLoginRequest.discriminator = undefined;
WTAuthenticationLoginRequest.attributeTypeMap = [
    {
        "name": "username",
        "baseName": "username",
        "type": "string"
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "string"
    }
];
exports.WTAuthenticationLoginRequest = WTAuthenticationLoginRequest;
//# sourceMappingURL=wTAuthenticationLoginRequest.js.map