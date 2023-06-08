"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickFunnelEvent = void 0;
class ClickFunnelEvent {
    static getAttributeTypeMap() {
        return ClickFunnelEvent.attributeTypeMap;
    }
}
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
exports.ClickFunnelEvent = ClickFunnelEvent;
//# sourceMappingURL=clickFunnelEvent.js.map