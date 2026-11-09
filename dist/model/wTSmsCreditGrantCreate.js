"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSmsCreditGrantCreate = void 0;
class WTSmsCreditGrantCreate extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSmsCreditGrantCreate.attributeTypeMap);
    }
}
exports.WTSmsCreditGrantCreate = WTSmsCreditGrantCreate;
WTSmsCreditGrantCreate.discriminator = undefined;
WTSmsCreditGrantCreate.attributeTypeMap = [
    {
        "name": "segments",
        "baseName": "segments",
        "type": "any"
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "any"
    },
    {
        "name": "note",
        "baseName": "note",
        "type": "any"
    }
];
//# sourceMappingURL=wTSmsCreditGrantCreate.js.map