"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTInfoGenesisRecordFilterParameters {
    static getAttributeTypeMap() {
        return WTInfoGenesisRecordFilterParameters.attributeTypeMap;
    }
}
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
exports.WTInfoGenesisRecordFilterParameters = WTInfoGenesisRecordFilterParameters;
//# sourceMappingURL=wTInfoGenesisRecordFilterParameters.js.map