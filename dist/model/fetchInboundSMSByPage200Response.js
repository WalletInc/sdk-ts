"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchInboundSMSByPage200Response = void 0;
class FetchInboundSMSByPage200Response {
    static getAttributeTypeMap() {
        return FetchInboundSMSByPage200Response.attributeTypeMap;
    }
}
exports.FetchInboundSMSByPage200Response = FetchInboundSMSByPage200Response;
FetchInboundSMSByPage200Response.discriminator = undefined;
FetchInboundSMSByPage200Response.attributeTypeMap = [
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
        "type": "Array<InboundSMS>"
    }
];
//# sourceMappingURL=fetchInboundSMSByPage200Response.js.map