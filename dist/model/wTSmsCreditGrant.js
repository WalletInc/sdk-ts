"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSmsCreditGrant = void 0;
class WTSmsCreditGrant extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSmsCreditGrant.attributeTypeMap);
    }
}
exports.WTSmsCreditGrant = WTSmsCreditGrant;
WTSmsCreditGrant.discriminator = undefined;
WTSmsCreditGrant.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
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
    },
    {
        "name": "reference",
        "baseName": "reference",
        "type": "any"
    },
    {
        "name": "grantedBy",
        "baseName": "grantedBy",
        "type": "any"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    }
];
//# sourceMappingURL=wTSmsCreditGrant.js.map