"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTConnectRequirements = void 0;
class WTConnectRequirements extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTConnectRequirements.attributeTypeMap);
    }
}
exports.WTConnectRequirements = WTConnectRequirements;
WTConnectRequirements.discriminator = undefined;
WTConnectRequirements.attributeTypeMap = [
    {
        "name": "currentlyDue",
        "baseName": "currentlyDue",
        "type": "any"
    },
    {
        "name": "pastDue",
        "baseName": "pastDue",
        "type": "any"
    },
    {
        "name": "eventuallyDue",
        "baseName": "eventuallyDue",
        "type": "any"
    },
    {
        "name": "pendingVerification",
        "baseName": "pendingVerification",
        "type": "any"
    },
    {
        "name": "disabledReason",
        "baseName": "disabledReason",
        "type": "any"
    }
];
//# sourceMappingURL=wTConnectRequirements.js.map