"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTInfoGenesisLookupRequestErrors = void 0;
class WTInfoGenesisLookupRequestErrors {
    static getAttributeTypeMap() {
        return WTInfoGenesisLookupRequestErrors.attributeTypeMap;
    }
}
exports.WTInfoGenesisLookupRequestErrors = WTInfoGenesisLookupRequestErrors;
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
//# sourceMappingURL=wTInfoGenesisLookupRequestErrors.js.map