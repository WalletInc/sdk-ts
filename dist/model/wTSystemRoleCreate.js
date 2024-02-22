"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSystemRoleCreate = void 0;
class WTSystemRoleCreate {
    static getAttributeTypeMap() {
        return WTSystemRoleCreate.attributeTypeMap;
    }
}
exports.WTSystemRoleCreate = WTSystemRoleCreate;
WTSystemRoleCreate.discriminator = undefined;
WTSystemRoleCreate.attributeTypeMap = [
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
    },
    {
        "name": "webpagesToAdd",
        "baseName": "webpagesToAdd",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=wTSystemRoleCreate.js.map