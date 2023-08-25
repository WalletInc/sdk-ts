"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTicketUpdateParams = void 0;
class WTTicketUpdateParams {
    static getAttributeTypeMap() {
        return WTTicketUpdateParams.attributeTypeMap;
    }
}
exports.WTTicketUpdateParams = WTTicketUpdateParams;
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
    }
];
//# sourceMappingURL=wTTicketUpdateParams.js.map