"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTEmployeeScheduleSMSCampaignBroadcast {
    static getAttributeTypeMap() {
        return WTEmployeeScheduleSMSCampaignBroadcast.attributeTypeMap;
    }
}
WTEmployeeScheduleSMSCampaignBroadcast.discriminator = undefined;
WTEmployeeScheduleSMSCampaignBroadcast.attributeTypeMap = [
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "string"
    },
    {
        "name": "messageTemplate",
        "baseName": "messageTemplate",
        "type": "string"
    },
    {
        "name": "sendQRCode",
        "baseName": "sendQRCode",
        "type": "boolean"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "Array<string>"
    },
    {
        "name": "broadcastScheduledAt",
        "baseName": "broadcastScheduledAt",
        "type": "Date"
    },
    {
        "name": "locale",
        "baseName": "locale",
        "type": "string"
    },
    {
        "name": "timezone",
        "baseName": "timezone",
        "type": "string"
    }
];
exports.WTEmployeeScheduleSMSCampaignBroadcast = WTEmployeeScheduleSMSCampaignBroadcast;
//# sourceMappingURL=wTEmployeeScheduleSMSCampaignBroadcast.js.map