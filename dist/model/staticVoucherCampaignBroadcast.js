"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StaticVoucherCampaignBroadcast {
    static getAttributeTypeMap() {
        return StaticVoucherCampaignBroadcast.attributeTypeMap;
    }
}
StaticVoucherCampaignBroadcast.discriminator = undefined;
StaticVoucherCampaignBroadcast.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "WTWalletPageViewId"
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
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "Array<string>"
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
        "type": "PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus"
    },
    {
        "name": "broadcastQueuedAt",
        "baseName": "broadcastQueuedAt",
        "type": "Date"
    },
    {
        "name": "broadcastStartedAt",
        "baseName": "broadcastStartedAt",
        "type": "Date"
    },
    {
        "name": "broadcastCompletedAt",
        "baseName": "broadcastCompletedAt",
        "type": "Date"
    },
    {
        "name": "paymentObjectPrefix",
        "baseName": "paymentObjectPrefix",
        "type": "PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix"
    },
    {
        "name": "paymentObjectID",
        "baseName": "paymentObjectID",
        "type": "string"
    },
    {
        "name": "messageTemplate",
        "baseName": "messageTemplate",
        "type": "string"
    },
    {
        "name": "broadcastScheduledAt",
        "baseName": "broadcastScheduledAt",
        "type": "Date"
    },
    {
        "name": "staticVoucherCampaign",
        "baseName": "StaticVoucherCampaign",
        "type": "StaticVoucherCampaign"
    }
];
exports.StaticVoucherCampaignBroadcast = StaticVoucherCampaignBroadcast;
//# sourceMappingURL=staticVoucherCampaignBroadcast.js.map