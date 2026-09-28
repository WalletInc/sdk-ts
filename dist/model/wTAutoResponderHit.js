"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTAutoResponderHit = void 0;
class WTAutoResponderHit extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTAutoResponderHit.attributeTypeMap);
    }
}
exports.WTAutoResponderHit = WTAutoResponderHit;
WTAutoResponderHit.discriminator = undefined;
WTAutoResponderHit.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "autoResponderID",
        "baseName": "autoResponderID",
        "type": "string"
    },
    {
        "name": "keyword",
        "baseName": "keyword",
        "type": "any"
    },
    {
        "name": "consumerPhone",
        "baseName": "consumerPhone",
        "type": "any"
    },
    {
        "name": "inboundMessageID",
        "baseName": "inboundMessageID",
        "type": "any"
    },
    {
        "name": "outboundMessageID",
        "baseName": "outboundMessageID",
        "type": "any"
    },
    {
        "name": "outcome",
        "baseName": "outcome",
        "type": "WTAutoResponderHitOutcome"
    },
    {
        "name": "outcomeDetail",
        "baseName": "outcomeDetail",
        "type": "any"
    },
    {
        "name": "messageStatus",
        "baseName": "messageStatus",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    }
];
//# sourceMappingURL=wTAutoResponderHit.js.map