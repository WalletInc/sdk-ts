"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeAPIKeyCreateParams = void 0;
class WTEmployeeAPIKeyCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeAPIKeyCreateParams.attributeTypeMap);
    }
}
exports.WTEmployeeAPIKeyCreateParams = WTEmployeeAPIKeyCreateParams;
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
//# sourceMappingURL=wTEmployeeAPIKeyCreateParams.js.map