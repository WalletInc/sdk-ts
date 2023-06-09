"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTStaticVoucherCampaignPreviewMessages = void 0;
class WTStaticVoucherCampaignPreviewMessages {
    static getAttributeTypeMap() {
        return WTStaticVoucherCampaignPreviewMessages.attributeTypeMap;
    }
}
WTStaticVoucherCampaignPreviewMessages.discriminator = undefined;
WTStaticVoucherCampaignPreviewMessages.attributeTypeMap = [
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
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
exports.WTStaticVoucherCampaignPreviewMessages = WTStaticVoucherCampaignPreviewMessages;
//# sourceMappingURL=wTStaticVoucherCampaignPreviewMessages.js.map