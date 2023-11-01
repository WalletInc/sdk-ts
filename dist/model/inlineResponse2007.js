"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2007 = void 0;
class InlineResponse2007 {
    static getAttributeTypeMap() {
        return InlineResponse2007.attributeTypeMap;
    }
}
exports.InlineResponse2007 = InlineResponse2007;
InlineResponse2007.discriminator = undefined;
InlineResponse2007.attributeTypeMap = [
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
        "type": "Array<ImportedListRecipient>"
    }
];
//# sourceMappingURL=inlineResponse2007.js.map