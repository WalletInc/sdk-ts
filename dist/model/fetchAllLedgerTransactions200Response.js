"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FetchAllLedgerTransactions200Response {
    static getAttributeTypeMap() {
        return FetchAllLedgerTransactions200Response.attributeTypeMap;
    }
}
FetchAllLedgerTransactions200Response.discriminator = undefined;
FetchAllLedgerTransactions200Response.attributeTypeMap = [
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
exports.FetchAllLedgerTransactions200Response = FetchAllLedgerTransactions200Response;
//# sourceMappingURL=fetchAllLedgerTransactions200Response.js.map