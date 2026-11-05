"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMemberUpdateRevertRefusal = void 0;
class WTMemberUpdateRevertRefusal extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMemberUpdateRevertRefusal.attributeTypeMap);
    }
}
exports.WTMemberUpdateRevertRefusal = WTMemberUpdateRevertRefusal;
WTMemberUpdateRevertRefusal.discriminator = undefined;
WTMemberUpdateRevertRefusal.attributeTypeMap = [
    {
        "name": "memberID",
        "baseName": "memberID",
        "type": "string"
    },
    {
        "name": "memberIdentifier",
        "baseName": "memberIdentifier",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "WTMemberUpdateRevertRefusalReason"
    }
];
//# sourceMappingURL=wTMemberUpdateRevertRefusal.js.map