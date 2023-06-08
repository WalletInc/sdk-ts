"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTCPAOpt = void 0;
class WTTCPAOpt {
    static getAttributeTypeMap() {
        return WTTCPAOpt.attributeTypeMap;
    }
}
exports.WTTCPAOpt = WTTCPAOpt;
WTTCPAOpt.discriminator = undefined;
WTTCPAOpt.attributeTypeMap = [
    {
        "name": "listID",
        "baseName": "listID",
        "type": "string"
    },
    {
        "name": "sourceID",
        "baseName": "sourceID",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
    }
];
//# sourceMappingURL=wTTCPAOpt.js.map