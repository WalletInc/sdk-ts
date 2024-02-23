"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchOptInListSubscribersByPage200Response = void 0;
class FetchOptInListSubscribersByPage200Response {
    static getAttributeTypeMap() {
        return FetchOptInListSubscribersByPage200Response.attributeTypeMap;
    }
}
exports.FetchOptInListSubscribersByPage200Response = FetchOptInListSubscribersByPage200Response;
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
//# sourceMappingURL=fetchOptInListSubscribersByPage200Response.js.map