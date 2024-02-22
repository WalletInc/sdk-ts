"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthError {
    static getAttributeTypeMap() {
        return AuthError.attributeTypeMap;
    }
}
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
exports.AuthError = AuthError;
//# sourceMappingURL=authError.js.map