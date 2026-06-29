"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTStaticVoucherCampaignPreviewMessagesByPage = void 0;
class WTStaticVoucherCampaignPreviewMessagesByPage extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTStaticVoucherCampaignPreviewMessagesByPage.attributeTypeMap);
    }
}
exports.WTStaticVoucherCampaignPreviewMessagesByPage = WTStaticVoucherCampaignPreviewMessagesByPage;
WTStaticVoucherCampaignPreviewMessagesByPage.discriminator = undefined;
WTStaticVoucherCampaignPreviewMessagesByPage.attributeTypeMap = [
    {
        "name": "message",
        "baseName": "message",
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
    },
    {
        "name": "pageNum",
        "baseName": "pageNum",
        "type": "any"
    },
    {
        "name": "pageSize",
        "baseName": "pageSize",
        "type": "any"
    }
];
//# sourceMappingURL=wTStaticVoucherCampaignPreviewMessagesByPage.js.map