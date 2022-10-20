"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VSCampaignGeneratedMessagePagination = void 0;
class VSCampaignGeneratedMessagePagination {
    static getAttributeTypeMap() {
        return VSCampaignGeneratedMessagePagination.attributeTypeMap;
    }
}
exports.VSCampaignGeneratedMessagePagination = VSCampaignGeneratedMessagePagination;
VSCampaignGeneratedMessagePagination.discriminator = undefined;
VSCampaignGeneratedMessagePagination.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<VSCampaignGeneratedMessage>"
    },
    {
        "name": "length",
        "baseName": "length",
        "type": "number"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    }
];
//# sourceMappingURL=vSCampaignGeneratedMessagePagination.js.map