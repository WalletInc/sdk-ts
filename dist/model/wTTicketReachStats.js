"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTicketReachStats = void 0;
class WTTicketReachStats extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTicketReachStats.attributeTypeMap);
    }
}
exports.WTTicketReachStats = WTTicketReachStats;
WTTicketReachStats.discriminator = undefined;
WTTicketReachStats.attributeTypeMap = [
    {
        "name": "issuedCount",
        "baseName": "issuedCount",
        "type": "any"
    },
    {
        "name": "issuedSeats",
        "baseName": "issuedSeats",
        "type": "any"
    },
    {
        "name": "viewedCount",
        "baseName": "viewedCount",
        "type": "any"
    },
    {
        "name": "viewedSeats",
        "baseName": "viewedSeats",
        "type": "any"
    },
    {
        "name": "claimedCount",
        "baseName": "claimedCount",
        "type": "any"
    },
    {
        "name": "claimedSeats",
        "baseName": "claimedSeats",
        "type": "any"
    },
    {
        "name": "redeemedCount",
        "baseName": "redeemedCount",
        "type": "any"
    },
    {
        "name": "redeemedSeats",
        "baseName": "redeemedSeats",
        "type": "any"
    },
    {
        "name": "compCount",
        "baseName": "compCount",
        "type": "any"
    },
    {
        "name": "compSeats",
        "baseName": "compSeats",
        "type": "any"
    },
    {
        "name": "paidCount",
        "baseName": "paidCount",
        "type": "any"
    },
    {
        "name": "paidSeats",
        "baseName": "paidSeats",
        "type": "any"
    },
    {
        "name": "redeemedValue",
        "baseName": "redeemedValue",
        "type": "any"
    }
];
//# sourceMappingURL=wTTicketReachStats.js.map