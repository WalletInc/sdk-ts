"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTInfoGenesisRecordFilterParameters = void 0;
class WTInfoGenesisRecordFilterParameters {
    static getAttributeTypeMap() {
        return WTInfoGenesisRecordFilterParameters.attributeTypeMap;
    }
}
exports.WTInfoGenesisRecordFilterParameters = WTInfoGenesisRecordFilterParameters;
WTInfoGenesisRecordFilterParameters.discriminator = undefined;
WTInfoGenesisRecordFilterParameters.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=wTInfoGenesisRecordFilterParameters.js.map