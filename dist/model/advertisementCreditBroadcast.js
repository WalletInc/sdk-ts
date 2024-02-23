"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreditBroadcast = void 0;
class AdvertisementCreditBroadcast {
    static getAttributeTypeMap() {
        return AdvertisementCreditBroadcast.attributeTypeMap;
    }
}
exports.AdvertisementCreditBroadcast = AdvertisementCreditBroadcast;
AdvertisementCreditBroadcast.discriminator = undefined;
AdvertisementCreditBroadcast.attributeTypeMap = [
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
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
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "Array<string>"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "broadcastScheduledAt",
        "baseName": "broadcastScheduledAt",
        "type": "Date"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "WTWalletPageViewId"
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
    },
    {
        "name": "advertisementCredit",
        "baseName": "AdvertisementCredit",
        "type": "AdvertisementCredit"
    }
];
//# sourceMappingURL=advertisementCreditBroadcast.js.map