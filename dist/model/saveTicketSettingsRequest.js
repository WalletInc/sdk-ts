"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveTicketSettingsRequest = void 0;
class SaveTicketSettingsRequest {
    static getAttributeTypeMap() {
        return SaveTicketSettingsRequest.attributeTypeMap;
    }
}
exports.SaveTicketSettingsRequest = SaveTicketSettingsRequest;
SaveTicketSettingsRequest.discriminator = undefined;
SaveTicketSettingsRequest.attributeTypeMap = [
    {
        "name": "redemptionInstructions",
        "baseName": "redemptionInstructions",
        "type": "string"
    },
    {
        "name": "ticketExpirationDateTime",
        "baseName": "ticketExpirationDateTime",
        "type": "Date"
    },
    {
        "name": "maxCompTickets",
        "baseName": "maxCompTickets",
        "type": "number"
    },
    {
        "name": "paymentDesignID",
        "baseName": "paymentDesignID",
        "type": "SaveTicketSettingsRequestPaymentDesignID"
    }
];
//# sourceMappingURL=saveTicketSettingsRequest.js.map