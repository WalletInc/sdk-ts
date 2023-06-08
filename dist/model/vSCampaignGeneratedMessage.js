"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VSCampaignGeneratedMessage = void 0;
class VSCampaignGeneratedMessage {
    static getAttributeTypeMap() {
        return VSCampaignGeneratedMessage.attributeTypeMap;
    }
}
VSCampaignGeneratedMessage.discriminator = undefined;
VSCampaignGeneratedMessage.attributeTypeMap = [
    {
        "name": "staticVoucherID",
        "baseName": "staticVoucherID",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "cellPhoneNumber",
        "baseName": "cellPhoneNumber",
        "type": "string"
    }
];
exports.VSCampaignGeneratedMessage = VSCampaignGeneratedMessage;
//# sourceMappingURL=vSCampaignGeneratedMessage.js.map