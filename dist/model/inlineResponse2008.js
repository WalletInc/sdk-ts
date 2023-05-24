"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2008 = void 0;
class InlineResponse2008 {
    static getAttributeTypeMap() {
        return InlineResponse2008.attributeTypeMap;
    }
}
InlineResponse2008.discriminator = undefined;
InlineResponse2008.attributeTypeMap = [
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
exports.InlineResponse2008 = InlineResponse2008;
//# sourceMappingURL=inlineResponse2008.js.map