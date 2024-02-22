"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginStatus200Response {
    static getAttributeTypeMap() {
        return LoginStatus200Response.attributeTypeMap;
    }
}
LoginStatus200Response.discriminator = undefined;
LoginStatus200Response.attributeTypeMap = [
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "LoginStatus200Response.StatusEnum"
    }
];
exports.LoginStatus200Response = LoginStatus200Response;
(function (LoginStatus200Response) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Valid"] = 'Valid'] = "Valid";
    })(StatusEnum = LoginStatus200Response.StatusEnum || (LoginStatus200Response.StatusEnum = {}));
})(LoginStatus200Response = exports.LoginStatus200Response || (exports.LoginStatus200Response = {}));
//# sourceMappingURL=loginStatus200Response.js.map