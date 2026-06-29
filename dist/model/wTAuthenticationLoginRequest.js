"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationLoginRequest = void 0;
class WTAuthenticationLoginRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAuthenticationLoginRequest.attributeTypeMap);
    }
}
exports.WTAuthenticationLoginRequest = WTAuthenticationLoginRequest;
WTAuthenticationLoginRequest.discriminator = undefined;
WTAuthenticationLoginRequest.attributeTypeMap = [
    {
        "name": "username",
        "baseName": "username",
        "type": "any"
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "any"
    }
];
//# sourceMappingURL=wTAuthenticationLoginRequest.js.map