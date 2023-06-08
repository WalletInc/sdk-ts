"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2005 = void 0;
class InlineResponse2005 {
    static getAttributeTypeMap() {
        return InlineResponse2005.attributeTypeMap;
    }
}
exports.InlineResponse2005 = InlineResponse2005;
InlineResponse2005.discriminator = undefined;
InlineResponse2005.attributeTypeMap = [
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
//# sourceMappingURL=inlineResponse2005.js.map