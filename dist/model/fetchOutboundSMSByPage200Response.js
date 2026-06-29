"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchOutboundSMSByPage200Response = void 0;
class FetchOutboundSMSByPage200Response {
    static getAttributeTypeMap() {
        return FetchOutboundSMSByPage200Response.attributeTypeMap;
    }
}
exports.FetchOutboundSMSByPage200Response = FetchOutboundSMSByPage200Response;
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
//# sourceMappingURL=fetchOutboundSMSByPage200Response.js.map