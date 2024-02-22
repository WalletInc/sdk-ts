"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FetchOutboundSMSByPage200Response {
    static getAttributeTypeMap() {
        return FetchOutboundSMSByPage200Response.attributeTypeMap;
    }
}
FetchOutboundSMSByPage200Response.discriminator = undefined;
FetchOutboundSMSByPage200Response.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "length",
        "baseName": "length",
        "type": "number"
    },
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<OutboundSMS>"
    }
];
exports.FetchOutboundSMSByPage200Response = FetchOutboundSMSByPage200Response;
//# sourceMappingURL=fetchOutboundSMSByPage200Response.js.map