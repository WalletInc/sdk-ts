"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VSCampaignGeneratedMessagePagination = void 0;
class VSCampaignGeneratedMessagePagination extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VSCampaignGeneratedMessagePagination.attributeTypeMap);
    }
}
exports.VSCampaignGeneratedMessagePagination = VSCampaignGeneratedMessagePagination;
VSCampaignGeneratedMessagePagination.discriminator = undefined;
VSCampaignGeneratedMessagePagination.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "any"
    },
    {
        "name": "length",
        "baseName": "length",
        "type": "any"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "any"
    }
];
//# sourceMappingURL=vSCampaignGeneratedMessagePagination.js.map