"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FetchImportedListRecipientsByPage200Response {
    static getAttributeTypeMap() {
        return FetchImportedListRecipientsByPage200Response.attributeTypeMap;
    }
}
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
exports.FetchImportedListRecipientsByPage200Response = FetchImportedListRecipientsByPage200Response;
//# sourceMappingURL=fetchImportedListRecipientsByPage200Response.js.map