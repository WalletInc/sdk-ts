"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSendFreezeStatus = void 0;
class WTSendFreezeStatus extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSendFreezeStatus.attributeTypeMap);
    }
}
exports.WTSendFreezeStatus = WTSendFreezeStatus;
WTSendFreezeStatus.discriminator = undefined;
WTSendFreezeStatus.attributeTypeMap = [
    {
        "name": "frozen",
        "baseName": "frozen",
        "type": "any"
    },
    {
        "name": "freezes",
        "baseName": "freezes",
        "type": "any"
    }
];
//# sourceMappingURL=wTSendFreezeStatus.js.map