"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPointsLedgerPage = void 0;
class WTPointsLedgerPage extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPointsLedgerPage.attributeTypeMap);
    }
}
exports.WTPointsLedgerPage = WTPointsLedgerPage;
WTPointsLedgerPage.discriminator = undefined;
WTPointsLedgerPage.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "any"
    },
    {
        "name": "length",
        "baseName": "length",
        "type": "number"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    }
];
//# sourceMappingURL=wTPointsLedgerPage.js.map