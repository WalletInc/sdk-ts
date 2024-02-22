"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FetchOptInListSubscribersByPage200Response {
    static getAttributeTypeMap() {
        return FetchOptInListSubscribersByPage200Response.attributeTypeMap;
    }
}
FetchOptInListSubscribersByPage200Response.discriminator = undefined;
FetchOptInListSubscribersByPage200Response.attributeTypeMap = [
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
        "type": "Array<OptInListSubscriber>"
    }
];
exports.FetchOptInListSubscribersByPage200Response = FetchOptInListSubscribersByPage200Response;
//# sourceMappingURL=fetchOptInListSubscribersByPage200Response.js.map