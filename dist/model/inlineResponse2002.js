"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2002 = void 0;
class InlineResponse2002 {
    static getAttributeTypeMap() {
        return InlineResponse2002.attributeTypeMap;
    }
}
exports.InlineResponse2002 = InlineResponse2002;
InlineResponse2002.discriminator = undefined;
InlineResponse2002.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "length",
        "baseName": "length",
        "type": "number"
    },
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<InboundSMS>"
    }
];
//# sourceMappingURL=inlineResponse2002.js.map