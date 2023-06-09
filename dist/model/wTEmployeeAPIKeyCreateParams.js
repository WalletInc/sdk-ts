"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeAPIKeyCreateParams = void 0;
class WTEmployeeAPIKeyCreateParams {
    static getAttributeTypeMap() {
        return WTEmployeeAPIKeyCreateParams.attributeTypeMap;
    }
}
WTEmployeeAPIKeyCreateParams.discriminator = undefined;
WTEmployeeAPIKeyCreateParams.attributeTypeMap = [
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    }
];
exports.WTEmployeeAPIKeyCreateParams = WTEmployeeAPIKeyCreateParams;
//# sourceMappingURL=wTEmployeeAPIKeyCreateParams.js.map