"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FetchCustomerTicketsWithTokenRequest {
    static getAttributeTypeMap() {
        return FetchCustomerTicketsWithTokenRequest.attributeTypeMap;
    }
}
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
exports.FetchCustomerTicketsWithTokenRequest = FetchCustomerTicketsWithTokenRequest;
//# sourceMappingURL=fetchCustomerTicketsWithTokenRequest.js.map