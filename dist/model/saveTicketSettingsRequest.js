"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SaveTicketSettingsRequest {
    static getAttributeTypeMap() {
        return SaveTicketSettingsRequest.attributeTypeMap;
    }
}
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
exports.SaveTicketSettingsRequest = SaveTicketSettingsRequest;
//# sourceMappingURL=saveTicketSettingsRequest.js.map