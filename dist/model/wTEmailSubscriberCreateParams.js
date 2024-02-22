"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WTEmailSubscriberCreateParams {
    static getAttributeTypeMap() {
        return WTEmailSubscriberCreateParams.attributeTypeMap;
    }
}
WTEmailSubscriberCreateParams.discriminator = undefined;
WTEmailSubscriberCreateParams.attributeTypeMap = [
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
    }
];
exports.WTEmailSubscriberCreateParams = WTEmailSubscriberCreateParams;
//# sourceMappingURL=wTEmailSubscriberCreateParams.js.map