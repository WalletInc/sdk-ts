"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSPViolationSummaryRow = void 0;
class CSPViolationSummaryRow extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CSPViolationSummaryRow.attributeTypeMap);
    }
}
exports.CSPViolationSummaryRow = CSPViolationSummaryRow;
CSPViolationSummaryRow.discriminator = undefined;
CSPViolationSummaryRow.attributeTypeMap = [
    {
        "name": "violatedDirective",
        "baseName": "violatedDirective",
        "type": "string"
    },
    {
        "name": "blockedHost",
        "baseName": "blockedHost",
        "type": "any"
    },
    {
        "name": "disposition",
        "baseName": "disposition",
        "type": "any"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "any"
    },
    {
        "name": "sampleDocumentURI",
        "baseName": "sampleDocumentURI",
        "type": "string"
    },
    {
        "name": "firstSeen",
        "baseName": "firstSeen",
        "type": "Date"
    },
    {
        "name": "lastSeen",
        "baseName": "lastSeen",
        "type": "Date"
    }
];
//# sourceMappingURL=cSPViolationSummaryRow.js.map