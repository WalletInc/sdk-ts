"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTicketCreateParams = void 0;
class WTTicketCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTicketCreateParams.attributeTypeMap);
    }
}
exports.WTTicketCreateParams = WTTicketCreateParams;
WTTicketCreateParams.discriminator = undefined;
WTTicketCreateParams.attributeTypeMap = [
    {
        "name": "recipientPhoneNumber",
        "baseName": "recipientPhoneNumber",
        "type": "any"
    },
    {
        "name": "recipientEmailAddress",
        "baseName": "recipientEmailAddress",
        "type": "any"
    },
    {
        "name": "recipientMemberID",
        "baseName": "recipientMemberID",
        "type": "any"
    },
    {
        "name": "isComp",
        "baseName": "isComp",
        "type": "any"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "any"
    },
    {
        "name": "performanceID",
        "baseName": "performanceID",
        "type": "any"
    }
];
//# sourceMappingURL=wTTicketCreateParams.js.map