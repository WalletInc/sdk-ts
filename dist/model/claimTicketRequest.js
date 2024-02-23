"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimTicketRequest = void 0;
class ClaimTicketRequest {
    static getAttributeTypeMap() {
        return ClaimTicketRequest.attributeTypeMap;
    }
}
exports.ClaimTicketRequest = ClaimTicketRequest;
ClaimTicketRequest.discriminator = undefined;
ClaimTicketRequest.attributeTypeMap = [
    {
        "name": "claimedByPhoneNumber",
        "baseName": "claimedByPhoneNumber",
        "type": "string"
    }
];
//# sourceMappingURL=claimTicketRequest.js.map