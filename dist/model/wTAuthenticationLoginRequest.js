"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationLoginRequest = void 0;
class WTAuthenticationLoginRequest {
    static getAttributeTypeMap() {
        return WTAuthenticationLoginRequest.attributeTypeMap;
    }
}
exports.WTAuthenticationLoginRequest = WTAuthenticationLoginRequest;
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
//# sourceMappingURL=wTAuthenticationLoginRequest.js.map