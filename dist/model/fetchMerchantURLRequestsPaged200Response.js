"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchMerchantURLRequestsPaged200Response = void 0;
class FetchMerchantURLRequestsPaged200Response {
    static getAttributeTypeMap() {
        return FetchMerchantURLRequestsPaged200Response.attributeTypeMap;
    }
}
exports.FetchMerchantURLRequestsPaged200Response = FetchMerchantURLRequestsPaged200Response;
FetchMerchantURLRequestsPaged200Response.discriminator = undefined;
FetchMerchantURLRequestsPaged200Response.attributeTypeMap = [
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
        "type": "Array<WalletPageView>"
    }
];
//# sourceMappingURL=fetchMerchantURLRequestsPaged200Response.js.map