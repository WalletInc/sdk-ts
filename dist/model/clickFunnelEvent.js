"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickFunnelEvent = void 0;
class ClickFunnelEvent extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ClickFunnelEvent.attributeTypeMap);
    }
}
exports.ClickFunnelEvent = ClickFunnelEvent;
ClickFunnelEvent.discriminator = undefined;
ClickFunnelEvent.attributeTypeMap = [
    {
        "name": "purchase",
        "baseName": "purchase",
        "type": "ClickFunnelPurchase"
    },
    {
        "name": "event",
        "baseName": "event",
        "type": "string"
    }
];
//# sourceMappingURL=clickFunnelEvent.js.map