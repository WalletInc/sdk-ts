"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationCheckSessionTokenStatusResponse = void 0;
class WTAuthenticationCheckSessionTokenStatusResponse {
    static getAttributeTypeMap() {
        return WTAuthenticationCheckSessionTokenStatusResponse.attributeTypeMap;
    }
}
WTAuthenticationCheckSessionTokenStatusResponse.discriminator = undefined;
WTAuthenticationCheckSessionTokenStatusResponse.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum"
    }
];
exports.WTAuthenticationCheckSessionTokenStatusResponse = WTAuthenticationCheckSessionTokenStatusResponse;
(function (WTAuthenticationCheckSessionTokenStatusResponse) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Valid"] = 'Valid'] = "Valid";
    })(StatusEnum = WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum || (WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum = {}));
})(WTAuthenticationCheckSessionTokenStatusResponse = exports.WTAuthenticationCheckSessionTokenStatusResponse || (exports.WTAuthenticationCheckSessionTokenStatusResponse = {}));
exports.WTAuthenticationCheckSessionTokenStatusResponse = WTAuthenticationCheckSessionTokenStatusResponse;
//# sourceMappingURL=wTAuthenticationCheckSessionTokenStatusResponse.js.map