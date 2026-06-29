"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSmsSubscriberCreateParams = void 0;
class WTSmsSubscriberCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSmsSubscriberCreateParams.attributeTypeMap);
    }
}
exports.WTSmsSubscriberCreateParams = WTSmsSubscriberCreateParams;
WTSmsSubscriberCreateParams.discriminator = undefined;
WTSmsSubscriberCreateParams.attributeTypeMap = [
    {
        "name": "mobileNumber",
        "baseName": "mobileNumber",
        "type": "string"
    }
];
//# sourceMappingURL=wTSmsSubscriberCreateParams.js.map