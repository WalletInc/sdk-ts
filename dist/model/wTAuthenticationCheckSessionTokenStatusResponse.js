"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAuthenticationCheckSessionTokenStatusResponse = void 0;
class WTAuthenticationCheckSessionTokenStatusResponse {
    static getAttributeTypeMap() {
        return WTAuthenticationCheckSessionTokenStatusResponse.attributeTypeMap;
    }
}
exports.WTAuthenticationCheckSessionTokenStatusResponse = WTAuthenticationCheckSessionTokenStatusResponse;
WTAuthenticationCheckSessionTokenStatusResponse.discriminator = undefined;
WTAuthenticationCheckSessionTokenStatusResponse.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum"
    }
];
(function (WTAuthenticationCheckSessionTokenStatusResponse) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Valid"] = 'Valid'] = "Valid";
    })(StatusEnum = WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum || (WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum = {}));
})(WTAuthenticationCheckSessionTokenStatusResponse = exports.WTAuthenticationCheckSessionTokenStatusResponse || (exports.WTAuthenticationCheckSessionTokenStatusResponse = {}));
//# sourceMappingURL=wTAuthenticationCheckSessionTokenStatusResponse.js.map