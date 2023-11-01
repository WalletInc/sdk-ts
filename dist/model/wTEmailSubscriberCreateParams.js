"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmailSubscriberCreateParams = void 0;
class WTEmailSubscriberCreateParams {
    static getAttributeTypeMap() {
        return WTEmailSubscriberCreateParams.attributeTypeMap;
    }
}
exports.WTEmailSubscriberCreateParams = WTEmailSubscriberCreateParams;
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
//# sourceMappingURL=wTEmailSubscriberCreateParams.js.map