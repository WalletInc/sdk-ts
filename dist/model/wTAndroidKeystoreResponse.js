"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAndroidKeystoreResponse = void 0;
class WTAndroidKeystoreResponse extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAndroidKeystoreResponse.attributeTypeMap);
    }
}
exports.WTAndroidKeystoreResponse = WTAndroidKeystoreResponse;
WTAndroidKeystoreResponse.discriminator = undefined;
WTAndroidKeystoreResponse.attributeTypeMap = [
    {
        "name": "keystoreBase64",
        "baseName": "keystoreBase64",
        "type": "any"
    },
    {
        "name": "fingerprint",
        "baseName": "fingerprint",
        "type": "any"
    }
];
//# sourceMappingURL=wTAndroidKeystoreResponse.js.map