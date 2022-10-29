"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2003 = void 0;
class InlineResponse2003 {
    static getAttributeTypeMap() {
        return InlineResponse2003.attributeTypeMap;
    }
}
exports.InlineResponse2003 = InlineResponse2003;
InlineResponse2003.discriminator = undefined;
InlineResponse2003.attributeTypeMap = [
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
//# sourceMappingURL=inlineResponse2003.js.map