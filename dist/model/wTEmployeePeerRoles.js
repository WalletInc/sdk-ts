"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeePeerRoles = void 0;
class WTEmployeePeerRoles extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeePeerRoles.attributeTypeMap);
    }
}
exports.WTEmployeePeerRoles = WTEmployeePeerRoles;
WTEmployeePeerRoles.discriminator = undefined;
WTEmployeePeerRoles.attributeTypeMap = [
    {
        "name": "rolesArray",
        "baseName": "rolesArray",
        "type": "any"
    }
];
//# sourceMappingURL=wTEmployeePeerRoles.js.map