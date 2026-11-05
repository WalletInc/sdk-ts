"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMemberUpdateRevertResult = void 0;
class WTMemberUpdateRevertResult extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMemberUpdateRevertResult.attributeTypeMap);
    }
}
exports.WTMemberUpdateRevertResult = WTMemberUpdateRevertResult;
WTMemberUpdateRevertResult.discriminator = undefined;
WTMemberUpdateRevertResult.attributeTypeMap = [
    {
        "name": "reverted",
        "baseName": "reverted",
        "type": "number"
    },
    {
        "name": "refused",
        "baseName": "refused",
        "type": "any"
    }
];
//# sourceMappingURL=wTMemberUpdateRevertResult.js.map