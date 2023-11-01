"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2009 = void 0;
class InlineResponse2009 {
    static getAttributeTypeMap() {
        return InlineResponse2009.attributeTypeMap;
    }
}
exports.InlineResponse2009 = InlineResponse2009;
InlineResponse2009.discriminator = undefined;
InlineResponse2009.attributeTypeMap = [
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
//# sourceMappingURL=inlineResponse2009.js.map