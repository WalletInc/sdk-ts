"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineObject1 = void 0;
class InlineObject1 {
    static getAttributeTypeMap() {
        return InlineObject1.attributeTypeMap;
    }
}
exports.InlineObject1 = InlineObject1;
InlineObject1.discriminator = undefined;
InlineObject1.attributeTypeMap = [
    {
        "name": "redemptionInstructions",
        "baseName": "redemptionInstructions",
        "type": "string"
    },
    {
        "name": "ticketExpirationDateTime",
        "baseName": "ticketExpirationDateTime",
        "type": "Date"
    },
    {
        "name": "maxCompTickets",
        "baseName": "maxCompTickets",
        "type": "number"
    },
    {
        "name": "paymentDesignID",
        "baseName": "paymentDesignID",
        "type": "string"
    }
];
//# sourceMappingURL=inlineObject1.js.map