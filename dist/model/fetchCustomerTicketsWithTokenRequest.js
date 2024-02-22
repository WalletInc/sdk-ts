"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchCustomerTicketsWithTokenRequest = void 0;
class FetchCustomerTicketsWithTokenRequest {
    static getAttributeTypeMap() {
        return FetchCustomerTicketsWithTokenRequest.attributeTypeMap;
    }
}
exports.FetchCustomerTicketsWithTokenRequest = FetchCustomerTicketsWithTokenRequest;
FetchCustomerTicketsWithTokenRequest.discriminator = undefined;
FetchCustomerTicketsWithTokenRequest.attributeTypeMap = [
    {
        "name": "phoneVerificationToken",
        "baseName": "phoneVerificationToken",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    }
];
//# sourceMappingURL=fetchCustomerTicketsWithTokenRequest.js.map