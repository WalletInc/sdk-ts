"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTTCPAOpt {
    static getAttributeTypeMap() {
        return WTTCPAOpt.attributeTypeMap;
    }
}
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
        "type": "string"
    }
];
exports.WTTCPAOpt = WTTCPAOpt;
//# sourceMappingURL=wTTCPAOpt.js.map