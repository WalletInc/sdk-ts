"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginStatus200ResponseAnyOf = void 0;
class LoginStatus200ResponseAnyOf {
    static getAttributeTypeMap() {
        return LoginStatus200ResponseAnyOf.attributeTypeMap;
    }
}
exports.LoginStatus200ResponseAnyOf = LoginStatus200ResponseAnyOf;
LoginStatus200ResponseAnyOf.discriminator = undefined;
LoginStatus200ResponseAnyOf.attributeTypeMap = [
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    }
];
//# sourceMappingURL=loginStatus200ResponseAnyOf.js.map