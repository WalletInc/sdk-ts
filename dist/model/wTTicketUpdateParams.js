"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTTicketUpdateParams {
    static getAttributeTypeMap() {
        return WTTicketUpdateParams.attributeTypeMap;
    }
}
WTTicketUpdateParams.discriminator = undefined;
WTTicketUpdateParams.attributeTypeMap = [
    {
        "name": "recipientPhoneNumber",
        "baseName": "recipientPhoneNumber",
        "type": "string"
    },
    {
        "name": "recipientEmailAddress",
        "baseName": "recipientEmailAddress",
        "type": "string"
    },
    {
        "name": "recipientMemberID",
        "baseName": "recipientMemberID",
        "type": "string"
    },
    {
        "name": "isComp",
        "baseName": "isComp",
        "type": "boolean"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    }
];
exports.WTTicketUpdateParams = WTTicketUpdateParams;
//# sourceMappingURL=wTTicketUpdateParams.js.map