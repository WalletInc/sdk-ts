"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTTicketCreateParams {
    static getAttributeTypeMap() {
        return WTTicketCreateParams.attributeTypeMap;
    }
}
WTTicketCreateParams.discriminator = undefined;
WTTicketCreateParams.attributeTypeMap = [
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
    },
    {
        "name": "performanceID",
        "baseName": "performanceID",
        "type": "string"
    }
];
exports.WTTicketCreateParams = WTTicketCreateParams;
//# sourceMappingURL=wTTicketCreateParams.js.map