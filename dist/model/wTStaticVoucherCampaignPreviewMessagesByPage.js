"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTStaticVoucherCampaignPreviewMessagesByPage {
    static getAttributeTypeMap() {
        return WTStaticVoucherCampaignPreviewMessagesByPage.attributeTypeMap;
    }
}
WTStaticVoucherCampaignPreviewMessagesByPage.discriminator = undefined;
WTStaticVoucherCampaignPreviewMessagesByPage.attributeTypeMap = [
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
    },
    {
        "name": "pageNum",
        "baseName": "pageNum",
        "type": "number"
    },
    {
        "name": "pageSize",
        "baseName": "pageSize",
        "type": "number"
    }
];
exports.WTStaticVoucherCampaignPreviewMessagesByPage = WTStaticVoucherCampaignPreviewMessagesByPage;
//# sourceMappingURL=wTStaticVoucherCampaignPreviewMessagesByPage.js.map