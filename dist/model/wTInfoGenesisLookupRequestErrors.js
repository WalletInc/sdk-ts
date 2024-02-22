"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTInfoGenesisLookupRequestErrors {
    static getAttributeTypeMap() {
        return WTInfoGenesisLookupRequestErrors.attributeTypeMap;
    }
}
WTInfoGenesisLookupRequestErrors.discriminator = undefined;
WTInfoGenesisLookupRequestErrors.attributeTypeMap = [
    {
        "name": "startDateTime",
        "baseName": "startDateTime",
        "type": "Date"
    },
    {
        "name": "endDateTime",
        "baseName": "endDateTime",
        "type": "Date"
    },
    {
        "name": "selectedRegisters",
        "baseName": "selectedRegisters",
        "type": "Array<string>"
    },
    {
        "name": "routingIDs",
        "baseName": "routingIDs",
        "type": "Array<string>"
    }
];
exports.WTInfoGenesisLookupRequestErrors = WTInfoGenesisLookupRequestErrors;
//# sourceMappingURL=wTInfoGenesisLookupRequestErrors.js.map