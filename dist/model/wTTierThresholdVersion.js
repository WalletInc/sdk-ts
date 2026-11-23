"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTierThresholdVersion = void 0;
class WTTierThresholdVersion extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTierThresholdVersion.attributeTypeMap);
    }
}
exports.WTTierThresholdVersion = WTTierThresholdVersion;
WTTierThresholdVersion.discriminator = undefined;
WTTierThresholdVersion.attributeTypeMap = [
    {
        "name": "versionID",
        "baseName": "versionID",
        "type": "string"
    },
    {
        "name": "previousQualifyPoints",
        "baseName": "previousQualifyPoints",
        "type": "any"
    },
    {
        "name": "qualifyPoints",
        "baseName": "qualifyPoints",
        "type": "any"
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "WTTierThresholdVersionKind"
    },
    {
        "name": "upgradedAtSave",
        "baseName": "upgradedAtSave",
        "type": "number"
    },
    {
        "name": "employeeName",
        "baseName": "employeeName",
        "type": "any"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "undoneAt",
        "baseName": "undoneAt",
        "type": "any"
    },
    {
        "name": "canUndo",
        "baseName": "canUndo",
        "type": "any"
    }
];
//# sourceMappingURL=wTTierThresholdVersion.js.map