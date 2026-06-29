"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmployeeScheduleSMSCampaignBroadcast = void 0;
class WTEmployeeScheduleSMSCampaignBroadcast extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmployeeScheduleSMSCampaignBroadcast.attributeTypeMap);
    }
}
exports.WTEmployeeScheduleSMSCampaignBroadcast = WTEmployeeScheduleSMSCampaignBroadcast;
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
        "type": "any"
    },
    {
        "name": "sendQRCode",
        "baseName": "sendQRCode",
        "type": "any"
    },
    {
        "name": "mediaURLs",
        "baseName": "mediaURLs",
        "type": "any"
    },
    {
        "name": "broadcastScheduledAt",
        "baseName": "broadcastScheduledAt",
        "type": "any"
    },
    {
        "name": "locale",
        "baseName": "locale",
        "type": "any"
    },
    {
        "name": "timezone",
        "baseName": "timezone",
        "type": "any"
    }
];
//# sourceMappingURL=wTEmployeeScheduleSMSCampaignBroadcast.js.map