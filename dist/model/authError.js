"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthError = void 0;
class AuthError {
    static getAttributeTypeMap() {
        return AuthError.attributeTypeMap;
    }
}
exports.AuthError = AuthError;
AuthError.discriminator = undefined;
AuthError.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "stack",
        "baseName": "stack",
        "type": "string"
    },
    {
        "name": "httpErrorCode",
        "baseName": "httpErrorCode",
        "type": "number"
    },
    {
        "name": "trackingCode",
        "baseName": "trackingCode",
        "type": "string"
    }
];
//# sourceMappingURL=authError.js.map