"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTShareActivityRow = void 0;
class WTShareActivityRow extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTShareActivityRow.attributeTypeMap);
    }
}
exports.WTShareActivityRow = WTShareActivityRow;
WTShareActivityRow.discriminator = undefined;
WTShareActivityRow.attributeTypeMap = [
    {
        "name": "itemType",
        "baseName": "itemType",
        "type": "any"
    },
    {
        "name": "shares",
        "baseName": "shares",
        "type": "any"
    },
    {
        "name": "clicks",
        "baseName": "clicks",
        "type": "any"
    },
    {
        "name": "newVisitors",
        "baseName": "newVisitors",
        "type": "any"
    },
    {
        "name": "newVisitorsPerShare",
        "baseName": "newVisitorsPerShare",
        "type": "any"
    }
];
//# sourceMappingURL=wTShareActivityRow.js.map