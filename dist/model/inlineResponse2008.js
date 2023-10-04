"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2008 = void 0;
class InlineResponse2008 {
    static getAttributeTypeMap() {
        return InlineResponse2008.attributeTypeMap;
    }
}
exports.InlineResponse2008 = InlineResponse2008;
InlineResponse2008.discriminator = undefined;
InlineResponse2008.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<WTStaticVoucher>"
    },
    {
        "name": "totalRows",
        "baseName": "totalRows",
        "type": "number"
    }
];
//# sourceMappingURL=inlineResponse2008.js.map