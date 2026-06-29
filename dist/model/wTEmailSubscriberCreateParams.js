"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmailSubscriberCreateParams = void 0;
class WTEmailSubscriberCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEmailSubscriberCreateParams.attributeTypeMap);
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