"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTCPAOpt = void 0;
class WTTCPAOpt extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTCPAOpt.attributeTypeMap);
    }
}
exports.WTTCPAOpt = WTTCPAOpt;
WTTCPAOpt.discriminator = undefined;
WTTCPAOpt.attributeTypeMap = [
    {
        "name": "listID",
        "baseName": "listID",
        "type": "WTTCPAOptListID"
    },
    {
        "name": "sourceID",
        "baseName": "sourceID",
        "type": "WTTCPAOptSourceID"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "any"
    }
];
//# sourceMappingURL=wTTCPAOpt.js.map