"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEarlyOptInCount = void 0;
class WTEarlyOptInCount extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEarlyOptInCount.attributeTypeMap);
    }
}
exports.WTEarlyOptInCount = WTEarlyOptInCount;
WTEarlyOptInCount.discriminator = undefined;
WTEarlyOptInCount.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "any"
    },
    {
        "name": "lastJoinedAt",
        "baseName": "lastJoinedAt",
        "type": "any"
    },
    {
        "name": "readyCount",
        "baseName": "readyCount",
        "type": "any"
    },
    {
        "name": "needsConfirmationCount",
        "baseName": "needsConfirmationCount",
        "type": "any"
    }
];
//# sourceMappingURL=wTEarlyOptInCount.js.map