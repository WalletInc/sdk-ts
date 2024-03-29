"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticVoucherCampaignGroup = void 0;
class StaticVoucherCampaignGroup {
    static getAttributeTypeMap() {
        return StaticVoucherCampaignGroup.attributeTypeMap;
    }
}
exports.StaticVoucherCampaignGroup = StaticVoucherCampaignGroup;
StaticVoucherCampaignGroup.discriminator = undefined;
StaticVoucherCampaignGroup.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "voucherType",
        "baseName": "voucherType",
        "type": "number"
    },
    {
        "name": "createdBySourceID",
        "baseName": "createdBySourceID",
        "type": "number"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
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
        "name": "isLoaded",
        "baseName": "isLoaded",
        "type": "boolean"
    }
];
//# sourceMappingURL=staticVoucherCampaignGroup.js.map