"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTicket = void 0;
class WTTicket {
    static getAttributeTypeMap() {
        return WTTicket.attributeTypeMap;
    }
}
exports.WTTicket = WTTicket;
WTTicket.discriminator = undefined;
WTTicket.attributeTypeMap = [
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
        "name": "performanceID",
        "baseName": "performanceID",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "isClaimed",
        "baseName": "isClaimed",
        "type": "boolean"
    },
    {
        "name": "dateTimeClaimed",
        "baseName": "dateTimeClaimed",
        "type": "Date"
    },
    {
        "name": "claimedByPhoneNumber",
        "baseName": "claimedByPhoneNumber",
        "type": "string"
    },
    {
        "name": "redeemedSource",
        "baseName": "redeemedSource",
        "type": "string"
    },
    {
        "name": "redeemedTransactionID",
        "baseName": "redeemedTransactionID",
        "type": "string"
    },
    {
        "name": "transactionType",
        "baseName": "transactionType",
        "type": "string"
    },
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "string"
    },
    {
        "name": "isRedeemed",
        "baseName": "isRedeemed",
        "type": "boolean"
    },
    {
        "name": "dateTimeRedeemed",
        "baseName": "dateTimeRedeemed",
        "type": "Date"
    }
];
//# sourceMappingURL=wTTicket.js.map