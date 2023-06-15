"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSystemRoleCreate = void 0;
class WTSystemRoleCreate {
    static getAttributeTypeMap() {
        return WTSystemRoleCreate.attributeTypeMap;
    }
}
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
exports.WTSystemRoleCreate = WTSystemRoleCreate;
//# sourceMappingURL=wTSystemRoleCreate.js.map