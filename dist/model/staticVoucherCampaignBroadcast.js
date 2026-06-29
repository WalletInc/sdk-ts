"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticVoucherCampaignBroadcast = void 0;
class StaticVoucherCampaignBroadcast extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StaticVoucherCampaignBroadcast.attributeTypeMap);
    }
}
exports.StaticVoucherCampaignBroadcast = StaticVoucherCampaignBroadcast;
StaticVoucherCampaignBroadcast.discriminator = undefined;
StaticVoucherCampaignBroadcast.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "any"
    },
    {
        "name": "optInList",
        "baseName": "OptInList",
        "type": "WTOptInList"
    },
    {
        "name": "importedList",
        "baseName": "ImportedList",
        "type": "WTImportedList"
    },
    {
        "name": "broadcastStatus",
        "baseName": "broadcastStatus",
        "type": "StaticVoucherCampaignBroadcastBroadcastStatus"
    },
    {
        "name": "broadcastQueuedAt",
        "baseName": "broadcastQueuedAt",
        "type": "any"
    },
    {
        "name": "broadcastStartedAt",
        "baseName": "broadcastStartedAt",
        "type": "any"
    },
    {
        "name": "broadcastCompletedAt",
        "baseName": "broadcastCompletedAt",
        "type": "any"
    },
    {
        "name": "paymentObjectPrefix",
        "baseName": "paymentObjectPrefix",
        "type": "StaticVoucherCampaignBroadcastPaymentObjectPrefix"
    },
    {
        "name": "paymentObjectID",
        "baseName": "paymentObjectID",
        "type": "string"
    },
    {
        "name": "messageTemplate",
        "baseName": "messageTemplate",
        "type": "any"
    },
    {
        "name": "broadcastScheduledAt",
        "baseName": "broadcastScheduledAt",
        "type": "any"
    },
    {
        "name": "staticVoucherCampaign",
        "baseName": "StaticVoucherCampaign",
        "type": "StaticVoucherCampaign"
    }
];
//# sourceMappingURL=staticVoucherCampaignBroadcast.js.map