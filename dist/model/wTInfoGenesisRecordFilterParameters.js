"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTInfoGenesisRecordFilterParameters = void 0;
class WTInfoGenesisRecordFilterParameters extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTInfoGenesisRecordFilterParameters.attributeTypeMap);
    }
}
exports.WTInfoGenesisRecordFilterParameters = WTInfoGenesisRecordFilterParameters;
WTInfoGenesisRecordFilterParameters.discriminator = undefined;
WTInfoGenesisRecordFilterParameters.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=wTInfoGenesisRecordFilterParameters.js.map