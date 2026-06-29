"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeAPIKeyUpdateParams = void 0;
class WTEmployeeAPIKeyUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeAPIKeyUpdateParams.attributeTypeMap);
    }
}
exports.WTEmployeeAPIKeyUpdateParams = WTEmployeeAPIKeyUpdateParams;
WTEmployeeAPIKeyUpdateParams.discriminator = undefined;
WTEmployeeAPIKeyUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTEmployeeAPIKeyUpdateParams.js.map