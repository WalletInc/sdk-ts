"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTInfoGenesisLookupRequestErrors = void 0;
class WTInfoGenesisLookupRequestErrors extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTInfoGenesisLookupRequestErrors.attributeTypeMap);
    }
}
exports.WTInfoGenesisLookupRequestErrors = WTInfoGenesisLookupRequestErrors;
WTInfoGenesisLookupRequestErrors.discriminator = undefined;
WTInfoGenesisLookupRequestErrors.attributeTypeMap = [
    {
        "name": "startDateTime",
        "baseName": "startDateTime",
        "type": "any"
    },
    {
        "name": "endDateTime",
        "baseName": "endDateTime",
        "type": "any"
    },
    {
        "name": "selectedRegisters",
        "baseName": "selectedRegisters",
        "type": "any"
    },
    {
        "name": "routingIDs",
        "baseName": "routingIDs",
        "type": "any"
    }
];
//# sourceMappingURL=wTInfoGenesisLookupRequestErrors.js.map