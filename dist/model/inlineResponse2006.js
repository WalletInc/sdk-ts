"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2006 = void 0;
class InlineResponse2006 {
    static getAttributeTypeMap() {
        return InlineResponse2006.attributeTypeMap;
    }
}
exports.InlineResponse2006 = InlineResponse2006;
InlineResponse2006.discriminator = undefined;
InlineResponse2006.attributeTypeMap = [
    {
        "name": "entries",
        "baseName": "entries",
        "type": "Array<LedgerEntry>"
    },
    {
        "name": "pageCount",
        "baseName": "pageCount",
        "type": "number"
    },
    {
        "name": "totalRecords",
        "baseName": "totalRecords",
        "type": "number"
    }
];
//# sourceMappingURL=inlineResponse2006.js.map