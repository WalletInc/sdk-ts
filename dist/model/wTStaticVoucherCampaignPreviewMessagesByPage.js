"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTStaticVoucherCampaignPreviewMessagesByPage = void 0;
class WTStaticVoucherCampaignPreviewMessagesByPage {
    static getAttributeTypeMap() {
        return WTStaticVoucherCampaignPreviewMessagesByPage.attributeTypeMap;
    }
}
exports.WTStaticVoucherCampaignPreviewMessagesByPage = WTStaticVoucherCampaignPreviewMessagesByPage;
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
//# sourceMappingURL=wTStaticVoucherCampaignPreviewMessagesByPage.js.map