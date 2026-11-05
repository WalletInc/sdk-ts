"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEarlyOptInSkipCount = void 0;
class WTEarlyOptInSkipCount extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEarlyOptInSkipCount.attributeTypeMap);
    }
}
exports.WTEarlyOptInSkipCount = WTEarlyOptInSkipCount;
WTEarlyOptInSkipCount.discriminator = undefined;
WTEarlyOptInSkipCount.attributeTypeMap = [
    {
        "name": "reason",
        "baseName": "reason",
        "type": "any"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "any"
    }
];
//# sourceMappingURL=wTEarlyOptInSkipCount.js.map