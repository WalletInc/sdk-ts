"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClaimTicketRequest {
    static getAttributeTypeMap() {
        return ClaimTicketRequest.attributeTypeMap;
    }
}
ClaimTicketRequest.discriminator = undefined;
ClaimTicketRequest.attributeTypeMap = [
    {
        "name": "claimedByPhoneNumber",
        "baseName": "claimedByPhoneNumber",
        "type": "string"
    }
];
exports.ClaimTicketRequest = ClaimTicketRequest;
//# sourceMappingURL=claimTicketRequest.js.map