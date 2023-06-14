"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEmailSubscriberUpdateParams = void 0;
class WTEmailSubscriberUpdateParams {
    static getAttributeTypeMap() {
        return WTEmailSubscriberUpdateParams.attributeTypeMap;
    }
}
exports.WTEmailSubscriberUpdateParams = WTEmailSubscriberUpdateParams;
WTEmailSubscriberUpdateParams.discriminator = undefined;
WTEmailSubscriberUpdateParams.attributeTypeMap = [
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
//# sourceMappingURL=wTEmailSubscriberUpdateParams.js.map