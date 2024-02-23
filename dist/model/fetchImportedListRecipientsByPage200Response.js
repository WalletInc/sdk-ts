"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchImportedListRecipientsByPage200Response = void 0;
class FetchImportedListRecipientsByPage200Response {
    static getAttributeTypeMap() {
        return FetchImportedListRecipientsByPage200Response.attributeTypeMap;
    }
}
exports.FetchImportedListRecipientsByPage200Response = FetchImportedListRecipientsByPage200Response;
FetchImportedListRecipientsByPage200Response.discriminator = undefined;
FetchImportedListRecipientsByPage200Response.attributeTypeMap = [
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
//# sourceMappingURL=fetchImportedListRecipientsByPage200Response.js.map