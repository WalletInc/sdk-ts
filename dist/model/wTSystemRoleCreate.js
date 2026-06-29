"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSystemRoleCreate = void 0;
class WTSystemRoleCreate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSystemRoleCreate.attributeTypeMap);
    }
}
exports.WTSystemRoleCreate = WTSystemRoleCreate;
WTSystemRoleCreate.discriminator = undefined;
WTSystemRoleCreate.attributeTypeMap = [
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "any"
    },
    {
        "name": "webpagesToAdd",
        "baseName": "webpagesToAdd",
        "type": "any"
    }
];
//# sourceMappingURL=wTSystemRoleCreate.js.map