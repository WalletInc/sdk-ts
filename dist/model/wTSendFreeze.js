"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSendFreeze = void 0;
class WTSendFreeze extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSendFreeze.attributeTypeMap);
    }
}
exports.WTSendFreeze = WTSendFreeze;
WTSendFreeze.discriminator = undefined;
WTSendFreeze.attributeTypeMap = [
    {
        "name": "origin",
        "baseName": "origin",
        "type": "any"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "any"
    },
    {
        "name": "frozenBy",
        "baseName": "frozenBy",
        "type": "any"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    }
];
//# sourceMappingURL=wTSendFreeze.js.map