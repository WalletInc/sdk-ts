"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEarlyOptIn = void 0;
class WTEarlyOptIn extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEarlyOptIn.attributeTypeMap);
    }
}
exports.WTEarlyOptIn = WTEarlyOptIn;
WTEarlyOptIn.discriminator = undefined;
WTEarlyOptIn.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "any"
    },
    {
        "name": "joinedAt",
        "baseName": "joinedAt",
        "type": "any"
    },
    {
        "name": "tier",
        "baseName": "tier",
        "type": "WTEarlyOptInTier"
    },
    {
        "name": "optInSource",
        "baseName": "optInSource",
        "type": "any"
    },
    {
        "name": "disclosureVersion",
        "baseName": "disclosureVersion",
        "type": "any"
    },
    {
        "name": "disclosureBasis",
        "baseName": "disclosureBasis",
        "type": "WTDisclosureBasis"
    }
];
//# sourceMappingURL=wTEarlyOptIn.js.map