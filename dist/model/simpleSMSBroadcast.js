"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleSMSBroadcast = void 0;
class SimpleSMSBroadcast extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SimpleSMSBroadcast.attributeTypeMap);
    }
}
exports.SimpleSMSBroadcast = SimpleSMSBroadcast;
SimpleSMSBroadcast.discriminator = undefined;
SimpleSMSBroadcast.attributeTypeMap = [
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
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
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "any"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "broadcastScheduledAt",
        "baseName": "broadcastScheduledAt",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "StaticVoucherId"
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
        "name": "listType",
        "baseName": "listType",
        "type": "DynamicVoucherBroadcastListType"
    },
    {
        "name": "listID",
        "baseName": "listID",
        "type": "string"
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
    }
];
//# sourceMappingURL=simpleSMSBroadcast.js.map