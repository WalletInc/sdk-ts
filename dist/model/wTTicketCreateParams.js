"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTicketCreateParams = void 0;
class WTTicketCreateParams {
    static getAttributeTypeMap() {
        return WTTicketCreateParams.attributeTypeMap;
    }
}
exports.WTTicketCreateParams = WTTicketCreateParams;
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
//# sourceMappingURL=wTTicketCreateParams.js.map