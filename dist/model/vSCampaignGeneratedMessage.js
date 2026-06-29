"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VSCampaignGeneratedMessage = void 0;
class VSCampaignGeneratedMessage extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VSCampaignGeneratedMessage.attributeTypeMap);
    }
}
exports.VSCampaignGeneratedMessage = VSCampaignGeneratedMessage;
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
        "type": "any"
    },
    {
        "name": "cellPhoneNumber",
        "baseName": "cellPhoneNumber",
        "type": "any"
    }
];
//# sourceMappingURL=vSCampaignGeneratedMessage.js.map